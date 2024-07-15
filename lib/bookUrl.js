export const bookUrl = (country) => {
  const urlPattern = /^https:\/\/www\.kobo\.com\/../;
  const newPath = `https://www.kobo.com/${country}`;
  const url = window.location.href.replace(urlPattern, newPath);

  l("url for country", country, url);

  return url;
};
