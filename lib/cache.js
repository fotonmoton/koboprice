import { COUNTRIES } from "./countries";

const CACHE_PREFIX = "KOBOPRICE";

const initCountries = () =>
	COUNTRIES.reduce(
		(acc, { countryCode }) => ({ ...acc, [countryCode]: true }),
		{},
	);

export const initCache = () => {
	if (!localStorage.getItem(CACHE_PREFIX)) {
		setState({
			books: {},
			rates: null,
			countries: initCountries(),
		});
	}
};
export const getState = () => JSON.parse(localStorage.getItem(CACHE_PREFIX));
export const setState = (s) =>
	localStorage.setItem(CACHE_PREFIX, JSON.stringify(s));
export const getRates = () => getState().rates;
export const cacheRates = (rates) => setState({ ...getState(), rates });
export const getBookPrice = (url) => getState().books[url];
export const cacheBookPrice = (price, url) => {
	const state = getState();
	state.books[url] = price;
	setState(state);
};
export const getSelectedCountries = () =>
	getState().countries || initCountries();
export const cacheSelectedCountries = (countries) => {
	const state = getState();
	state.countries = countries;
	setState(state);
};
