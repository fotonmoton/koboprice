import './logger'
import { COUNTRIES } from "./countries";
import { getPriceForCountry } from "./getPriceForCountry";
import { loadCurrencyRates, convertCurrency } from "./currency";

async function main() {
  try {
    const rates = await loadCurrencyRates();

    l('currency rates', rates)

    const prices = await Promise.all(
      COUNTRIES.map(async (c) => {
        l("looking price for", c.countryCode);
        const originalPrice = await getPriceForCountry(c.countryCode);
        const convertedPrice = await convertCurrency(
          originalPrice,
          c.currencyCode,
          rates,
        );

        return { ...c, originalPrice, convertedPrice };
      }),
    );

    l(prices);
  } catch (e) {
    l("error", e);
  } finally {
    l("done");
  }
}

l("starting...");

window.onload = () => {
  l("page is fully loaded");
  void main();
};
