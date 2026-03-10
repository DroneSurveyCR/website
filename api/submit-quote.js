// Vercel Serverless Function — /api/submit-quote
// Handles: Notion row creation + WhatsApp (CallMeBot) + Email (Resend)

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	const data = req.body;

	const results = await Promise.allSettled([
		saveToNotion(data),
		sendWhatsApp(data),
		sendEmail(data)
	]);

	const errors = results
		.filter(r => r.status === 'rejected')
		.map(r => r.reason?.message || 'Unknown error');

	if (errors.length === 3) {
		return res.status(500).json({ error: 'All notifications failed', details: errors });
	}

	return res.status(200).json({ success: true, errors });
}

// ─── NOTION ────────────────────────────────────────────────────
async function saveToNotion(d) {
	const token = process.env.NOTION_TOKEN;
	if (!token) throw new Error('NOTION_TOKEN not set');

	const DATABASE_ID = '2b8f0eb5-7d15-4c6e-84b4-0ab2ea584e74';

	const title = `Quote — ${d.firstName} ${d.lastName} — ${d.quotedTotal}`;

	const body = {
		parent: { database_id: DATABASE_ID },
		properties: {
			'Title':           { title: [{ text: { content: title } }] },
			'First Name':      { rich_text: [{ text: { content: d.firstName || '' } }] },
			'Last Name':       { rich_text: [{ text: { content: d.lastName || '' } }] },
			'E-mail':          { email: d.email || null },
			'Phone Number':    { phone_number: d.phone || null },
			'Company Name':    { rich_text: [{ text: { content: d.company || '' } }] },
			'Select the services you are requesting': {
				rich_text: [{ text: { content: d.services || '' } }]
			},
			'The size of the land to be surveyed in Square Kilometers': {
				rich_text: [{ text: { content: `${d.hectares} ha` } }]
			},
			'State / Province': { rich_text: [{ text: { content: d.province || '' } }] },
			'Street Address':   { rich_text: [{ text: { content: d.address || '' } }] },
			'who referred you / how did you hear about us?': {
				rich_text: [{ text: { content: `${d.referral || ''}\n\nQuoted: ${d.quotedTotal} | Deposit: ${d.deposit}\nBreakdown: ${d.breakdown}\n\nNotes: ${d.notes || ''}` } }]
			},
			'date:Submission Date:start':       { type: 'date', date: { start: new Date().toISOString().split('T')[0] } },
			'date:Submission Date:is_datetime': 0,
		}
	};

	if (d.deadline) {
		body.properties['date:Date the contract needs to be finished before:start'] = {
			type: 'date', date: { start: d.deadline }
		};
		body.properties['date:Date the contract needs to be finished before:is_datetime'] = 0;
	}

	const r = await fetch('https://api.notion.com/v1/pages', {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
			'Notion-Version': '2022-06-28'
		},
		body: JSON.stringify(body)
	});

	if (!r.ok) {
		const err = await r.text();
		throw new Error(`Notion error: ${err}`);
	}
}

// ─── WHATSAPP (CallMeBot) ──────────────────────────────────────
async function sendWhatsApp(d) {
	const phone  = process.env.CALLMEBOT_PHONE;
	const apikey = process.env.CALLMEBOT_APIKEY;
	if (!phone || !apikey) throw new Error('CallMeBot env vars not set');

	const text = [
		`🛰️ NEW QUOTE — DroneSurveyCR.com`,
		``,
		`👤 ${d.firstName} ${d.lastName}${d.company ? ' — ' + d.company : ''}`,
		`📧 ${d.email}`,
		`📱 ${d.phone}`,
		``,
		`🔧 Services: ${d.services}`,
		`📐 Size: ${d.hectares} hectares`,
		`📍 Location: ${d.province}`,
		d.nights > 0 ? `🌙 Nights: ${d.nights}` : '',
		d.deadline ? `📅 Deadline: ${d.deadline}` : '',
		``,
		`💰 QUOTE: ${d.quotedTotal}`,
		`💳 Deposit: ${d.deposit}`,
		``,
		d.notes ? `📋 Notes: ${d.notes}` : ''
	].filter(Boolean).join('\n');

	const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(text)}&apikey=${apikey}`;
	const r = await fetch(url);
	if (!r.ok) throw new Error(`CallMeBot error: ${r.status}`);
}

// ─── EMAIL (Resend) ────────────────────────────────────────────
async function sendEmail(d) {
	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey) throw new Error('RESEND_API_KEY not set');

	// Email to owner
	const ownerHtml = `
		<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
			<div style="background:#302F40;padding:24px;border-radius:12px 12px 0 0">
				<h1 style="color:#fff;margin:0;font-size:22px">🛰️ New Quote Request</h1>
				<p style="color:#9ca3b0;margin:6px 0 0">DroneSurveyCR.com — ${new Date().toLocaleDateString('en-CR')}</p>
			</div>
			<div style="background:#f8f9fc;padding:24px;border-radius:0 0 12px 12px">
				<table style="width:100%;border-collapse:collapse">
					<tr><td style="padding:8px 0;font-weight:bold;color:#302F40;width:40%">Name</td><td style="padding:8px 0;color:#444">${d.firstName} ${d.lastName}</td></tr>
					<tr><td style="padding:8px 0;font-weight:bold;color:#302F40">Company</td><td style="padding:8px 0;color:#444">${d.company || '—'}</td></tr>
					<tr><td style="padding:8px 0;font-weight:bold;color:#302F40">Email</td><td style="padding:8px 0"><a href="mailto:${d.email}">${d.email}</a></td></tr>
					<tr><td style="padding:8px 0;font-weight:bold;color:#302F40">Phone</td><td style="padding:8px 0;color:#444">${d.phone}</td></tr>
					<tr><td style="padding:8px 0;font-weight:bold;color:#302F40">Services</td><td style="padding:8px 0;color:#444">${d.services}</td></tr>
					<tr><td style="padding:8px 0;font-weight:bold;color:#302F40">Hectares</td><td style="padding:8px 0;color:#444">${d.hectares} ha</td></tr>
					<tr><td style="padding:8px 0;font-weight:bold;color:#302F40">Location</td><td style="padding:8px 0;color:#444">${d.province}</td></tr>
					<tr><td style="padding:8px 0;font-weight:bold;color:#302F40">Deadline</td><td style="padding:8px 0;color:#444">${d.deadline || '—'}</td></tr>
					<tr><td style="padding:8px 0;font-weight:bold;color:#302F40">Notes</td><td style="padding:8px 0;color:#444">${d.notes || '—'}</td></tr>
					<tr><td style="padding:8px 0;font-weight:bold;color:#302F40">Referral</td><td style="padding:8px 0;color:#444">${d.referral || '—'}</td></tr>
				</table>
				<div style="background:#302F40;border-radius:10px;padding:20px;margin-top:20px;text-align:center">
					<p style="color:#9ca3b0;margin:0 0 4px;font-size:13px">ESTIMATED QUOTE</p>
					<p style="color:#0080FE;font-size:32px;font-weight:bold;margin:0">${d.quotedTotal}</p>
					<p style="color:#9ca3b0;margin:6px 0 0;font-size:13px">50% deposit to start: <strong style="color:#fff">${d.deposit}</strong></p>
				</div>
				<div style="margin-top:16px;padding:16px;background:#fff;border-radius:8px;font-size:13px;color:#666">
					<strong>Breakdown:</strong><br>${d.breakdown.replace(/\n/g, '<br>')}
				</div>
				<div style="text-align:center;margin-top:20px">
					<a href="https://wa.me/${d.phone?.replace(/\D/g,'')}" style="background:#25D366;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;display:inline-block">💬 Reply on WhatsApp</a>
				</div>
			</div>
		</div>`;

	// Email to client
	const clientHtml = `
		<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
			<div style="background:#302F40;padding:24px;border-radius:12px 12px 0 0">
				<h1 style="color:#fff;margin:0;font-size:22px">Your Quote from DroneSurveyCR.com</h1>
				<p style="color:#9ca3b0;margin:6px 0 0">We've received your project details</p>
			</div>
			<div style="background:#f8f9fc;padding:24px;border-radius:0 0 12px 12px">
				<p>Hi ${d.firstName},</p>
				<p>Thank you for your quote request! Here's a summary of your estimated project cost:</p>
				<div style="background:#302F40;border-radius:10px;padding:20px;margin:20px 0;text-align:center">
					<p style="color:#9ca3b0;margin:0 0 4px;font-size:13px">ESTIMATED QUOTE</p>
					<p style="color:#0080FE;font-size:36px;font-weight:bold;margin:0">${d.quotedTotal}</p>
					<p style="color:#9ca3b0;margin:6px 0 0;font-size:13px">Deposit to start (50%): <strong style="color:#fff">${d.deposit}</strong></p>
				</div>
				<div style="background:#fff;border-radius:8px;padding:16px;font-size:14px;color:#444;margin-bottom:20px">
					<strong>Breakdown:</strong><br><br>${d.breakdown.replace(/\n/g, '<br>')}
				</div>
				<div style="background:#fff;border-radius:8px;padding:16px;font-size:13px;color:#666;margin-bottom:20px">
					<strong>Services requested:</strong> ${d.services}<br>
					<strong>Land size:</strong> ${d.hectares} hectares<br>
					<strong>Location:</strong> ${d.province}<br>
					${d.deadline ? '<strong>Deadline:</strong> ' + d.deadline + '<br>' : ''}
				</div>
				<p style="font-size:14px;color:#666">This is an automated estimate. We'll confirm your final quote and reach out shortly.</p>
				<p style="font-size:13px;color:#888">💳 <strong>Payment:</strong> 50% to start · 50% on delivery<br>
				We accept: Crypto · PayPal · Bank Wire · Cash</p>
				<div style="text-align:center;margin-top:24px">
					<a href="https://wa.me/50672938970" style="background:#25D366;color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:bold;display:inline-block;margin-right:10px">💬 WhatsApp Us</a>
					<a href="mailto:dronesurveycr@gmail.com" style="background:#0080FE;color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:bold;display:inline-block">📧 Email Us</a>
				</div>
			</div>
			<p style="text-align:center;font-size:12px;color:#aaa;margin-top:16px">DroneSurveyCR.com · Costa Rica · +506 7293 8970</p>
		</div>`;

	const r = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
		body: JSON.stringify({
			from: 'DroneSurveyCR <quotes@dronesurveycr.com>',
			to: ['dronesurveycr@gmail.com'],
			subject: `New Quote Request — ${d.firstName} ${d.lastName} — ${d.quotedTotal}`,
			html: ownerHtml
		})
	});
	if (!r.ok) throw new Error(`Resend owner email error: ${await r.text()}`);

	// Send to client
	const r2 = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
		body: JSON.stringify({
			from: 'DroneSurveyCR <quotes@dronesurveycr.com>',
			to: [d.email],
			subject: `Your Drone Survey Quote — ${d.quotedTotal}`,
			html: clientHtml
		})
	});
	if (!r2.ok) throw new Error(`Resend client email error: ${await r2.text()}`);
}
