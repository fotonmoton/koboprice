import { useCallback, useState } from "preact/hooks";
import { bookPriceFor } from "./bookPriceFor";
import { COUNTRIES } from "./countries";

const sortPrices = (prices, selectedCountries) =>
	prices.sort((a, b) => {
		if (!selectedCountries[a.countryCode]) return 1;
		if (!selectedCountries[b.countryCode]) return -1;

		return (
			(a?.convertedPrice?.intValue || Infinity) -
			(b?.convertedPrice?.intValue || Infinity)
		);
	});

export const usePrices = (selectedCountries) => {
	const [prices, setPrices] = useState(COUNTRIES);
	const [state, setState] = useState("init");

	const load = useCallback(async () => {
		setState("loading");
		for (let index = 0; index < prices.length; index += 2) {
			if (!selectedCountries[prices[index].countryCode]) continue;

			// intentionally blocking execution
			// to resolve sequentially.
			// It should prevent DOS and triggering captcha
			if (index + 1 < prices.length) {
				const [first, second] = await Promise.all([
					bookPriceFor(prices[index]),
					bookPriceFor(prices[index + 1]),
				]);
				prices[index] = first;
				prices[index + 1] = second;
			} else {
				prices[index] = await bookPriceFor(prices[index]);
			}

			setPrices([...prices]);
		}
		setState("done");
		l("DONE");
	}, [selectedCountries]);

	const selectedCount = Object.entries(selectedCountries)
		.map(([_, selected]) => selected)
		.filter(Boolean).length;

	const alreadyLoaded = prices.filter(
		(p) => p.countryPrice != undefined && selectedCountries[p.countryCode],
	).length;

	const percentChecked = (alreadyLoaded / selectedCount) * 100;

	return {
		prices: sortPrices(prices, selectedCountries),
		percentChecked: percentChecked.toFixed(2),
		load,
		state,
	};
};
