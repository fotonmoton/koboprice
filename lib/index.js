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
				display: "flex",
				flexDirection: "column",
				border: "1px solid black",
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
		'Select countries or leave as is and press "load"',
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

	l(selected);
	const style = {
		display: "flex",
		flexDirection: "column",
		border: "1px solid black",
	};

	if (isInLibrary()) {
		return InLibrary();
	}

	return h(
		"div",
		{ style },
		Header(state, percentChecked),
		...prices.map((price) =>
			h(Price, {
				price,
				toggleCountry: () => toggleCountry(price.countryCode),
				isSelected: isSelected(price.countryCode),
				isLoading: state,
			}),
		),
		Load(state, load),
	);
};

l("starting...");
initCache();
render(createElement(App), createPricesContainer());
