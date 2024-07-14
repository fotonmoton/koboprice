const timeout = (duration) => new Promise((r) => setTimeout(r, duration));

const observePriceOnPage = (page) =>
  new Promise((res, rej) => {
    timeout(10000).then(() => rej(""));

    var observer = new MutationObserver(() => {
      const price = page
        .querySelector(".active-price")
        .querySelector("span").textContent;
      if (price) {
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

const bookUrlForCountry = (country) => {
  const urlPattern = /^https:\/\/www\.kobo\.com\/../;
  const newPath = `https://www.kobo.com/${country}`;

  return window.location.href.replace(urlPattern, newPath);
};

export const getPriceForCountry = (country) =>
  new Promise((res) => {
    const url = bookUrlForCountry(country);

    l("going to", url);

    const iframe = document.createElement("iframe");

    iframe.src = url;

    iframe.hidden = true;

    document.body.append(iframe);

    iframe.contentWindow.onload = () => {
      l("starting observing price on", url);
      observePriceOnPage(iframe.contentDocument.body, url)
        .then(res)
        .catch(() => {
          l(`failed to find price for ${url}`);
          res("");
        })
        .finally(() => document.body.removeChild(iframe));
    };
  });
