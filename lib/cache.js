const CACHE_PREFIX = "KOBOPRICE";

export const initCache = () => {
  if (!localStorage.getItem(CACHE_PREFIX)) {
    setState({ books: {}, rates: null });
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
