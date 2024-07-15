import { bookUrl } from "./bookUrl";
import { extractPriceFrom } from "./extractPriceFrom";
import { getRate } from "./rates";
import { cacheBookPrice, getBookPrice } from "./cache";
import { format, isToday } from "date-fns";

export const bookPriceFor = async (country) => {
  l("looking price for", country.countryCode);

  const url = bookUrl(country.countryCode);

  const fromCache = getBookPrice(url);

  if (fromCache && isToday(fromCache.cachedAt)) {
    l("found book price in cache", fromCache);
    return fromCache;
  }

  const countryPrice = await extractPriceFrom(url);

  let convertedPrice;

  if (countryPrice) {
    l("found price", countryPrice, url);
    const rate = await getRate(country.currencyCode);
    convertedPrice = await convertedPrice(
      countryPrice,
      country.currencyCode,
      rate,
    );
  }

  const newPrice = {
    ...country,
    countryPrice,
    convertedPrice,
    url,
    cachedAt: format(new Date(), "yyyy-MM-dd"),
  };

  cacheBookPrice(newPrice, url);

  return newPrice;
};
