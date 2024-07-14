import { isToday } from "date-fns";
import { getRates, cacheRates } from "./cache";

export const baseCurrency = "usd";

export const loadCurrencyRates = async () => {
  l("loading currency rates");

  try {
    const res = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`,
    );
    return await res.json();
  } catch (e) {
    l("loadCurrencyRates", e);
    return null;
  }
};

export const getRate = async (currency) => {
  const cached = getRates();

  if (cached && isToday(cached.date)) {
    l("found rates in cache", cached);

    return cached[baseCurrency][currency];
  }

  const newRates = await loadCurrencyRates();

  if (!newRates) {
    l("failed to download rates");
    return 0;
  }

  l("new rates", newRates);

  cacheRates(newRates);

  return newRates[baseCurrency][currency];
};
