// Vercel Serverless Function — /api/submit-quote
module.exports = async function handler(req, res) {
	const origin = req.headers.origin || '';
	const allowed = ['https://dronesurveycr.com', 'https://www.dronesurveycr.com'];
	if (allowed.includes(origin)) res.setHeader('Access-Control-Allow-Origin', origin);
	else res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	if (req.method === 'OPTIONS') return res.status(200).end();
	if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

	const data = req.body;

	const results = await Promise.allSettled([
		saveToNotion(data),
		sendSlack(data),
		sendEmail(data)
	]);

	results.forEach((r, i) => {
		const name = ['Notion', 'Slack', 'Email'][i];
		if (r.status === 'rejected') console.error(`${name} failed:`, r.reason?.message);
		else console.log(`${name} OK`);
	});

	const errors = results.filter(r => r.status === 'rejected').map(r => r.reason?.message);
	return res.status(200).json({ success: true, errors });
};

// ─── NOTION ────────────────────────────────────────────────────
async function saveToNotion(d) {
	const token = process.env.NOTION_TOKEN;
	if (!token) throw new Error('NOTION_TOKEN not set');

	const DATABASE_ID = '21eefe17-c791-4f60-a64e-69b9a1e3ff44';
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
			'Select the services you are requesting': { rich_text: [{ text: { content: d.services || '' } }] },
			'The size of the land to be surveyed in Square Kilometers': { rich_text: [{ text: { content: `${d.hectares} ha` } }] },
			'State / Province': { rich_text: [{ text: { content: d.province || '' } }] },
			'Street Address':   { rich_text: [{ text: { content: d.address || '' } }] },
			'who referred you / how did you hear about us?': {
				rich_text: [{ text: { content: `${d.referral || ''}\n\nQuoted: ${d.quotedTotal} | Deposit: ${d.deposit}\nBreakdown:\n${d.breakdown}\n\nNotes: ${d.notes || ''}` } }]
			},
			'Status': { select: { name: '🆕 New Lead' } },
			'Submission Date': { date: { start: new Date().toISOString() } },
		}
	};

	if (d.deadline) {
		body.properties['Date the contract needs to be finished before'] = { date: { start: d.deadline } };
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

	if (!r.ok) throw new Error(`Notion: ${await r.text()}`);
}

// ─── SLACK ─────────────────────────────────────────────────────
async function sendSlack(d) {
	const webhook = process.env.SLACK_WEBHOOK_URL;
	if (!webhook) throw new Error('SLACK_WEBHOOK_URL not set');

	const text = [
		`*🛰️ New Quote — DroneSurveyCR.com*`,
		`*👤 Name:* ${d.firstName} ${d.lastName}${d.company ? ' — ' + d.company : ''}`,
		`*📧 Email:* ${d.email}  |  *📱 Phone:* ${d.phone}`,
		`*🔧 Services:* ${d.services}`,
		`*📐 Size:* ${d.hectares} ha  |  *📍 Province:* ${d.province}`,
		d.deadline ? `*📅 Deadline:* ${d.deadline}` : '',
		`*💰 Quote:* ${d.quotedTotal}  |  *Deposit:* ${d.deposit}`,
		d.notes ? `*📋 Notes:* ${d.notes}` : '',
		`<https://wa.me/${(d.phone||'').replace(/\D/g,'')}|💬 Reply on WhatsApp>  |  <https://notion.so/21eefe17c7914f60a64e69b9a1e3ff44|📋 Open Notion>`
	].filter(Boolean).join('\n');

	const r = await fetch(webhook, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ text })
	});
	if (!r.ok) throw new Error(`Slack: ${await r.text()}`);
}

// ─── EMAIL (Resend) ────────────────────────────────────────────
async function sendEmail(d) {
	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey) throw new Error('RESEND_API_KEY not set');

	const ownerHtml = `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
		<div style="background:#302F40;padding:24px;border-radius:12px 12px 0 0">
			<h2 style="color:#fff;margin:0">🛰️ New Quote — ${d.firstName} ${d.lastName}</h2>
			<p style="color:#9ca3b0;margin:6px 0 0">${new Date().toLocaleDateString('en-CR')}</p>
		</div>
		<div style="background:#f8f9fc;padding:24px;border-radius:0 0 12px 12px">
			<table style="width:100%;border-collapse:collapse;font-size:14px">
				<tr><td style="padding:6px 0;color:#888;width:120px">Name</td><td style="padding:6px 0;color:#302F40;font-weight:600">${d.firstName} ${d.lastName}</td></tr>
				<tr><td style="padding:6px 0;color:#888">Company</td><td style="padding:6px 0;color:#302F40">${d.company || '—'}</td></tr>
				<tr><td style="padding:6px 0;color:#888">Email</td><td style="padding:6px 0"><a href="mailto:${d.email}">${d.email}</a></td></tr>
				<tr><td style="padding:6px 0;color:#888">Phone</td><td style="padding:6px 0;color:#302F40">${d.phone}</td></tr>
				<tr><td style="padding:6px 0;color:#888">Services</td><td style="padding:6px 0;color:#302F40">${d.services}</td></tr>
				<tr><td style="padding:6px 0;color:#888">Size</td><td style="padding:6px 0;color:#302F40">${d.hectares} ha</td></tr>
				<tr><td style="padding:6px 0;color:#888">Location</td><td style="padding:6px 0;color:#302F40">${d.province}</td></tr>
				<tr><td style="padding:6px 0;color:#888">Deadline</td><td style="padding:6px 0;color:#302F40">${d.deadline || '—'}</td></tr>
				<tr><td style="padding:6px 0;color:#888">Notes</td><td style="padding:6px 0;color:#302F40">${d.notes || '—'}</td></tr>
			</table>
			<div style="background:#302F40;border-radius:10px;padding:20px;margin-top:20px;text-align:center">
				<p style="color:#9ca3b0;margin:0 0 4px;font-size:12px">ESTIMATED QUOTE</p>
				<p style="color:#0080FE;font-size:32px;font-weight:bold;margin:0">${d.quotedTotal}</p>
				<p style="color:#9ca3b0;margin:6px 0 0;font-size:13px">Deposit (50%): <strong style="color:#fff">${d.deposit}</strong></p>
			</div>
			<div style="margin-top:14px;padding:14px;background:#fff;border-radius:8px;font-size:13px;color:#666">
				<strong>Breakdown:</strong><br><br>${(d.breakdown||'').replace(/\n/g,'<br>')}
			</div>
			<div style="text-align:center;margin-top:20px">
				<a href="https://wa.me/${(d.phone||'').replace(/\D/g,'')}" style="background:#25D366;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;display:inline-block">💬 Reply on WhatsApp</a>
			</div>
		</div>
	</div>`;

	const clientHtml = `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
		<div style="background:#302F40;padding:24px;border-radius:12px 12px 0 0">
			<h2 style="color:#fff;margin:0">Your Quote from DroneSurveyCR.com</h2>
		</div>
		<div style="background:#f8f9fc;padding:24px;border-radius:0 0 12px 12px">
			<p>Hi ${d.firstName},</p>
			<p>Thanks for your quote request! Here's your estimate:</p>
			<div style="background:#302F40;border-radius:10px;padding:20px;margin:20px 0;text-align:center">
				<p style="color:#9ca3b0;margin:0 0 4px;font-size:12px">ESTIMATED TOTAL</p>
				<p style="color:#0080FE;font-size:36px;font-weight:bold;margin:0">${d.quotedTotal}</p>
				<p style="color:#9ca3b0;margin:6px 0 0;font-size:13px">Deposit to start (50%): <strong style="color:#fff">${d.deposit}</strong></p>
			</div>
			<div style="background:#fff;border-radius:8px;padding:14px;font-size:13px;color:#666;margin-bottom:16px">
				<strong>Breakdown:</strong><br><br>${(d.breakdown||'').replace(/\n/g,'<br>')}
			</div>
			<p style="font-size:13px;color:#888">This is an automated estimate. We'll confirm your final quote shortly.<br>
			💳 Payment: 50% to start · 50% on delivery · Crypto · PayPal · Wire · Cash</p>
			<div style="text-align:center;margin-top:20px">
				<a href="https://wa.me/50672938970" style="background:#25D366;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;display:inline-block">💬 WhatsApp Us</a>
			</div>
		</div>
		<p style="text-align:center;font-size:12px;color:#aaa;margin-top:12px">DroneSurveyCR.com · +506 7293 8970</p>
	</div>`;

	// Email to owner
	const ownerRes = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
		body: JSON.stringify({
			from: 'DroneSurveyCR <noreply@dronesurveycr.com>',
			to: ['dronesurveycr@gmail.com'],
			subject: `New Quote — ${d.firstName} ${d.lastName} — ${d.quotedTotal}`,
			html: ownerHtml
		})
	});
	if (!ownerRes.ok) throw new Error(`Resend owner: ${await ownerRes.text()}`);

	// Email to client
	if (d.email) {
		const clientRes = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
			body: JSON.stringify({
				from: 'DroneSurveyCR <noreply@dronesurveycr.com>',
				to: [d.email],
				subject: `Your Drone Survey Quote — ${d.quotedTotal}`,
				html: clientHtml
			})
		});
		if (!clientRes.ok) throw new Error(`Resend client: ${await clientRes.text()}`);
	}
}
