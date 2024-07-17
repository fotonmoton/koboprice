const timeout = (duration) => new Promise((r) => setTimeout(r, duration));

const observePriceOnPage = (page) =>
  new Promise((res, rej) => {
    timeout(5000).then(() => rej("price not found"));

    var observer = new MutationObserver(() => {
      const price = page?.querySelector(
        ".primary-right-container .pricing-details .active-price span",
      )?.textContent;

      if (price) {
        l("found price", price);
        observer.disconnect();
        res(price);
      }
    });

    observer.observe(page, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    });
  });

export const extractPrice = async (url) => {
  try {
    l("going to", url);

    const iframe = document.createElement("iframe");

    iframe.src = url;

    iframe.hidden = true;

    document.body.append(iframe);

    await new Promise((res) => (iframe.contentWindow.onload = res));

    l("starting observing price on", url);

    const price = await observePriceOnPage(iframe.contentDocument.body, url);

    document.body.removeChild(iframe);

    return price;
  } catch (e) {
    l("getPriceForCountry", e, url);
    return "";
  }
};
