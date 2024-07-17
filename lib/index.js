import "./logger";
import { initCache } from "./cache";
import { createElement, h, render } from "preact";
import { usePrices } from "./usePrices";
import { useCallback, useState } from "preact/hooks";

/*
TODO:
- more durable source for rates
- readme how to use and debug
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

  return visible.parentNode.insertBefore(
    document.createElement("div"),
    visible,
  );
};

const isInLibrary = () => document.querySelectorAll(".read-now").length;

const formatPrice = (countryPrice, convertedPrice) => {
  if (countryPrice == undefined) {
    return `LOADING`;
  }

  if (convertedPrice) {
    return `${countryPrice} => ${convertedPrice?.formatted}`;
  }
  return `NOT FOUND`;
};

const Price = ({ props }) => {
  const { convertedPrice, countryCode, countryPrice, url } = props;
  const [isHovered, setHover] = useState(false);

  const hover = useCallback(() => setHover(true));
  const leave = useCallback(() => setHover(false));

  const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: isHovered ? "#d7d7d7" : "",
    padding: "10px 10px 0 10px",
  };

  return h(
    "a",
    {
      style,
      href: url,
      target: "_blank",
      onMouseEnter: hover,
      onMouseLeave: leave,
    },
    [
      h("p", null, countryCode.toUpperCase()),
      h(
        "p",
        { style: { fontWeight: "bold" } },
        formatPrice(countryPrice, convertedPrice),
      ),
    ],
  );
};

const InLibrary = () =>
  h(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        textAlign: "center",
      },
    },
    h("h2", null, "Already in Library!"),
  );

const Percent = (percent) => {
  const style = { padding: "10px 10px 0 10px", textAlign: "center" };

  if (percent == 100) return h("h2", { style }, "all prices are loaded!");

  return h("h2", { style }, `${percent}%`);
};

const App = () => {
  const [prices, percentChecked] = usePrices();

  const style = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
  };

  if (isInLibrary()) {
    return InLibrary();
  }

  return h("div", { style }, [
    Percent(percentChecked),
    ...prices.map((price) => h(Price, { props: price })),
  ]);
};

l("starting...");
initCache();
render(createElement(App), createPricesContainer());
