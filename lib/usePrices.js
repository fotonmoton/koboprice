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
      for (let index = 0; index < prices.length; index += 2) {
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
