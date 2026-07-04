import { useSelectedCountries } from "./useCountries";
import "./logger";
import { createElement, h, render } from "preact";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import { bookUrl } from "./bookUrl";
import { initCache } from "./cache";
import { usePrices } from "./usePrices";

/*
TODO:
- more durable source for rates
- readme how to use and debug
*/

const isInLibrary = () =>
  // Old layout
  document.querySelectorAll(".read-now").length > 0 ||
  // New layout
  document.querySelectorAll('[data-testid="buypad-readnow"]').length > 0;

const formatPrice = (countryPrice, convertedPrice, isSelected) => {
  if (!isSelected) return "SKIP";

  if (countryPrice == undefined) {
    return "NOT LOADED";
  }

  if (convertedPrice) {
    return `${countryPrice} => ${convertedPrice?.formatted}`;
  }

  return "NOT FOUND";
};

const Price = ({ price, toggleCountry, isSelected }) => {
  const { convertedPrice, countryCode, countryPrice } = price;
  const [isHovered, setHover] = useState(false);

  const hover = useCallback(() => setHover(true));
  const leave = useCallback(() => setHover(false));

  const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: isHovered ? "#d7d7d7" : "",
    padding: "0 10px",
  };

  const link = h(
    "a",
    {
      style: { textDecoration: "underline" },
      href: bookUrl(countryCode),
      target: "_blank",
    },
    countryCode.toUpperCase(),
  );

  const checkbox = h("input", {
    type: "checkbox",
    checked: isSelected,
    onChange: () => toggleCountry(),
  });

  const priceLabel = h(
    "p",
    { style: { fontWeight: "bold" } },
    formatPrice(countryPrice, convertedPrice, isSelected),
  );

  return h(
    "label",
    { style, onMouseEnter: hover, onMouseLeave: leave },
    h("div", { style: { display: "flex" } }, checkbox, link),
    priceLabel,
  );
};

const InLibrary = () =>
  h(
    "div",
    {
      style: {
        padding: "10px",
        textAlign: "center",
      },
    },
    h("h2", null, "Already in Library!"),
  );

const Percent = (percent) => {
  const spinner = useRef();

  useEffect(() => {
    spinner.current.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
      { iterations: Infinity, duration: 1000 },
    );
  }, []);

  const style = { padding: "10px 10px 0 10px", textAlign: "center" };

  if (percent == 100) return h("h2", { style }, "all prices are loaded!");

  return h(
    "h2",
    { style },
    `${percent}%`,
    h("span", {
      ref: spinner,
      style: {
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        display: "inline-block",
        borderTop: "3px solid black",
        borderRight: "3px solid transparent",
        boxSizing: "border-box",
        marginLeft: "15px",
      },
    }),
  );
};

const Header = (state, percentChecked) => {
  if (state === "loading") return Percent(percentChecked);

  if (state === "done")
    return h(
      "h2",
      { style: { textAlign: "center" } },
      "All prices are loaded!",
    );

  return h(
    "h2",
    { style: { textAlign: "center" } },
    'Select countries or leave as is and press "Load prices"',
  );
};

const Load = (state, load) => {
  return h(
    "button",
    {
      disabled: state === "loading",
      onClick: load,
      type: "button",
      style: { backgroundColor: "#91ff91" },
    },
    state === "loading" ? "Loading..." : "Load prices",
  );
};

const App = () => {
  const { isSelected, toggleCountry, selected } = useSelectedCountries();
  const { prices, percentChecked, state, load } = usePrices(selected);
  const [expanded, setExpanded] = useState(false);

  l(selected);

  const toggle = useCallback(() => setExpanded((v) => !v));

  if (isInLibrary()) {
    return h(
      "div",
      {
        style: {
          position: "fixed",
          top: "10px",
          left: "10px",
          zIndex: 99999,
          background: "white",
          border: "1px solid black",
          fontFamily: "sans-serif",
          fontSize: "14px",
        },
      },
      InLibrary(),
    );
  }

  const panelStyle = {
    position: "fixed",
    bottom: "0",
    left: "0",
    zIndex: 99999,
    background: "white",
    border: "1px solid black",
    fontFamily: "sans-serif",
    fontSize: "14px",
    maxHeight: expanded ? "100vh" : "auto",
    overflowY: expanded ? "auto" : "hidden",
    minWidth: "100%",
  };

  const buttonStyle = {
    height: "2.25rem",
    background: "white",
    border: "1px solid black",
    // padding: "6px 12px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    width: "100%",
  };

  if (!expanded) {
    return h(
      "div",
      { style: panelStyle },
      h("button", { style: buttonStyle, onClick: toggle }, "PRICES"),
    );
  }

  const listStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return h(
    "div",
    { style: panelStyle },
    h("button", { style: buttonStyle, onClick: toggle }, "CLOSE"),
    h(
      "div",
      { style: listStyle },
      ...[
        Header(state, percentChecked),
        Load(state, load),
        ...prices.map((price) =>
          h(Price, {
            price,
            toggleCountry: () => toggleCountry(price.countryCode),
            isSelected: isSelected(price.countryCode),
            isLoading: state,
          }),
        ),
      ],
    ),
  );
};

l("starting...");
initCache();

const container = document.createElement("div");
document.body.appendChild(container);
render(createElement(App), container);
