import currency from "currency.js";

export const baseCurrency = "usd";

export const convertCurrency = async (price, outCurrency, rates) => {
  return currency(price).divide(rates[baseCurrency][outCurrency]);
};

export const loadCurrencyRates = async () => {
  l("loading currency rates");
  try {
    const res = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`,
    );
    return await res.json();
  } catch (e) {
    l("error", e);
    return null;
  }
};
