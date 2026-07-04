const timeout = (duration) => new Promise((r) => setTimeout(r, duration));

// Selectors for both old and new Kobo layouts
const PRICE_SELECTORS = [
	// Old layout (pre-2025 redesign)
	".primary-right-container .pricing-details .active-price span",
	// New layout (Tailwind, data-testid based)
	'[data-testid="price"] .text-title-m-bold',
];

const findPrice = (page) => {
	for (const sel of PRICE_SELECTORS) {
		const el = page?.querySelector(sel);
		if (el?.textContent?.trim()) {
			return el.textContent.trim();
		}
	}
	return null;
};

const observePriceOnPage = (page) =>
	new Promise((res, rej) => {
		timeout(5000).then(() => rej("price not found"));

		// Check immediately first
		const immediate = findPrice(page);
		if (immediate) {
			l("found price (immediate)", immediate);
			res(immediate);
			return;
		}

		const observer = new MutationObserver(() => {
			const price = findPrice(page);

			if (price) {
				l("found price", price);
				observer.disconnect();
				res(price);
			}
		});

		observer.observe(page, {
			childList: true,
			characterData: true,
			subtree: true,
		});
	});

export const extractPrice = async (url) => {
	try {
		l("going to", url);

		const iframe = document.createElement("iframe");

		iframe.src = url;

		iframe.hidden = true;

		document.body.append(iframe);

		await new Promise((res) => (iframe.contentWindow.onload = res));

		l("starting observing price on", url);

		const price = await observePriceOnPage(iframe.contentDocument.body);

		document.body.removeChild(iframe);

		return price;
	} catch (e) {
		l("getPriceForCountry", e, url);
		return "";
	}
};
