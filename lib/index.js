import "./logger";
import { COUNTRIES } from "./countries";
import { initCache } from "./cache";
import { bookPriceFor } from "./bookPriceFor";

/*
TODO:
- more durable source for rates
- React for UI
- More informative UI, show loading progress
- clear stale cache
- readme how to use and debug
- configuration (purge cache, change base currency)
*/

const createPricesContainer = () => {
  const pricingActionContainers = document.querySelectorAll(".pricing-details");

  l("all pricing containers", pricingActionContainers);

  let visible;
  for (const node of pricingActionContainers) {
    if (node.checkVisibility()) {
      l("found visible pricing container", node);
      visible = node;
      break;
    }
  }

  const container = document.createElement("div");

  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.border = "1px solid black";
  container.style.padding = "10px";

  return visible.parentNode.insertBefore(container, visible);
};

const getPrices = async () => {
  const prices = [];
  for (const country of COUNTRIES) {
    // intentionally blocking execution
    // to resolve sequentially.
    // It should prevent DOS and triggering captcha
    prices.push(await bookPriceFor(country));
  }

  return prices;
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
    link.style.display = "flex";
    link.style.justifyContent = "space-between";
    const oldPrice = document.createElement("p");
    oldPrice.innerText = `${price.countryCode.toUpperCase()}: ${price?.countryPrice || "NO PRICE"}`;
    const newPrice = document.createElement("p");
    newPrice.innerText = price?.convertedPrice?.formatted ?? "NO PRICE";
    newPrice.style.fontWeight = "bold";
    link.appendChild(oldPrice);
    link.appendChild(newPrice);
    container.appendChild(link);
  });
};

async function main() {
  const container = createPricesContainer();

  container.innerText = "LOADING PRICES...";

  try {
    initCache();

    const countriesPrice = await getPrices();

    l("country prices", countriesPrice);

    sortPrices(countriesPrice);

    l("sorted prices", countriesPrice);

    showPrices(container, countriesPrice);
  } catch (e) {
    l("error", e);
    container.innerText = "FAILED TO LOAD PRICES. CHECK CONSOLE FOR MORE INFO";
  } finally {
    l("done");
  }
}

l("starting...");
void main();
