import "./logger";
import { COUNTRIES } from "./countries";
import { initCache } from "./cache";
import { bookPriceFor } from "./bookPriceFor";

/*
TODO:
- not all currencies parsed as expected: 
  https://www.kobo.com/za/en/ebook/nine-minds
  ZA: R300,60 -> $1,674.58
  JP: 2,246 円 -> $Infinity
- publish to stores
- check in chrome
- more durable source for rates
- React for UI
- More informative, show loading progress
- clear stale cache
*/

const createPricesContainer = () => {
  const pricingActionContainer = document
    .querySelector(".primary-right-container")
    .querySelector(".pricing-details")
    .querySelector(".action-container");

  const container = document.createElement("div");

  container.style.display = "flex";
  container.style.flexDirection = "column";

  return pricingActionContainer.parentNode.insertBefore(
    container,
    pricingActionContainer,
  );
};

const getCountriesPrice = async () => {
  const prices = [];
  for (const country of COUNTRIES) {
    // intentionally blocking execution
    // to resolve sequentially.
    // It should prevent DOS and triggering captcha
    prices.push(await bookPriceFor(country));
  }

  return prices;
};

const formatPrice = (price) => {
  const convertedPrice = price?.convertedPrice?.format ?? "NO PRICE";

  const countryPrice = price?.countryPrice ?? "NO PRICE";

  return `${price.countryCode.toUpperCase()}: ${countryPrice} -> ${convertedPrice}`;
};

const sortPrices = (prices) =>
  prices.sort(
    (a, b) =>
      (a?.convertedPrice?.intValue || Infinity) -
      (b?.convertedPrice?.intValue || Infinity),
  );

const showPrices = (container, prices) => {
  container.innerText = null;
  prices.forEach((price) => {
    const link = document.createElement("a");
    link.href = price.url;
    link.target = "_blank";
    link.style.marginBottom = "5px";
    link.innerText = formatPrice(price);
    container.appendChild(link);
  });
};
async function main() {
  try {
    initCache();

    const container = createPricesContainer();

    container.innerText = "LOADING PRICES...";

    const countriesPrice = await getCountriesPrice();

    l("country prices", countriesPrice);

    sortPrices(countriesPrice);

    l("sorted prices", countriesPrice);

    showPrices(container, countriesPrice);
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
