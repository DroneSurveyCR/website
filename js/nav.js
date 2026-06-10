/* Auto-hide sticky header: slide away on scroll down, return on scroll up. */
(function () {
	var header = document.getElementById('site-header');
	if (!header) return;
	var lastY = window.pageYOffset, ticking = false, THRESHOLD = 120;
	function onScroll() {
		var y = window.pageYOffset;
		var toggle = document.getElementById('nav-toggle');
		if (toggle && toggle.checked) { lastY = y; ticking = false; return; } // mobile menu open
		if (y > lastY && y > THRESHOLD) header.classList.add('nav-hidden');
		else if (y < lastY) header.classList.remove('nav-hidden');
		lastY = y; ticking = false;
	}
	window.addEventListener('scroll', function () {
		if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
	}, { passive: true });
})();
