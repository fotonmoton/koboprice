export const bookUrl = (country) => {
  const urlPattern = /^https:\/\/www\.kobo\.com\/../;
  const newPath = `https://www.kobo.com/${country}`;

  return window.location.href.replace(urlPattern, newPath);
};
