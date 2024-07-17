import { useEffect, useState } from "preact/hooks";
import { COUNTRIES } from "./countries";
import { bookPriceFor } from "./bookPriceFor";

const sortPrices = (prices) =>
  prices.sort(
    (a, b) =>
      (a?.convertedPrice?.intValue || Infinity) -
      (b?.convertedPrice?.intValue || Infinity),
  );

export const usePrices = () => {
  const [prices, setPrices] = useState(COUNTRIES);
  useEffect(() => {
    const fetchAll = async () => {
      for (const [index, country] of COUNTRIES.entries()) {
        // intentionally blocking execution
        // to resolve sequentially.
        // It should prevent DOS and triggering captcha
        const found = await bookPriceFor(country);
        prices[index] = found;
        sortPrices(prices);
        setPrices([...prices]);
      }
      l("DONE");
    };
    fetchAll();
  }, []);

  const percentChecked =
    (prices.filter((p) => p.countryPrice != undefined).length / prices.length) *
    100;

  return [prices, percentChecked.toFixed(0)];
};
