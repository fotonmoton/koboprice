import currency from "currency.js";

export const convertPrice = async (price, curr, rate) => {
  l("rate for", curr, "is", rate);

  let useVedic = false;

  switch (curr) {
    case "inr":
    case "php": {
      useVedic = true;
      break;
    }
    case "jpy": {
      break;
    }
    case "zar": {
      price = price.replace(",", ".");
      break;
    }
    case "dkk": {
      price = price.replace("kr.", "").replace(",", ".");
      break;
    }
    case "pen": {
      price = price.replace("S/.", "");
      break;
    }
    case "clp":
    case "cop":
    case "twd": {
      break;
    }
    default:
      price = price.replace(/[^\d,.-]/, "").replace(",", ".");
  }

  const convertedPrice = currency(price, { useVedic }).divide(rate);

  l("converted price for", curr, convertedPrice);

  return {
    intValue: convertedPrice.intValue,
    formatted: convertedPrice.format(),
  };
};
