
# :dollar: Kobo Price

Compare ebook and audiobook prices across all Kobo country stores.

![example](./img/example.gif)

## Installation

- [Firefox add-on](https://addons.mozilla.org/en-US/firefox/addon/kobo-price)
- [Chrome extension](https://chromewebstore.google.com/detail/kobo-price/gjiadglcgiidfphjijgeellagidbkiah)
- [Userscript](https://raw.githubusercontent.com/fotonmoton/koboprice/master/userscript/koboprice.user.js)

## Usage

Kobo shows different prices for the same book depending on your country.
This extension fetches prices from every Kobo store, converts them to
USD using today's exchange rate, and displays them sorted from cheapest
to most expensive.

1. Go to any ebook or audiobook page on kobo.com
2. Click the **PRICES** button in the bottom of the screen
3. A panel expands showing a country list with checkboxes — deselect
   countries you don't care about
4. Click **Load prices** and wait for all prices to load (progress is
   shown as a percentage)
5. The list is sorted by converted USD price — click any country name
   to open that store's page for the book
6. Change your billing address to the cheapest country and check out

## Build

All artifacts are produced from the `dist/index.js` bundle.

```sh
npm install
npm run bundle           # build dist/index.js
npm run build-ext        # build the web extension archive
npm run build-userscript # build the userscript
npm run build-all        # run all three above
```
