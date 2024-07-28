
# :dollar: Kobo Price

Helps you find the lowest book price on kobo.com.

![example](./img/example.gif)

## Installation
You can install this script in several ways:

- [Firefox add-on](https://addons.mozilla.org/en-US/firefox/addon/kobo-price)
- [Chrome extension](https://chromewebstore.google.com/detail/kobo-price/gjiadglcgiidfphjijgeellagidbkiah)
- [Userscript](https://raw.githubusercontent.com/fotonmoton/koboprice/master/userscript/koboprice.user.js)

## Usage
On kobo.com, the book price for each country could be different. This script will fetch all book prices, convert them to USD at today's rate, sort them, and show to you as a list. Then you can change your billing address to the country whose price you like and proceed to checkout.

- Go to the book/audiobook page you want to buy
- wait a couple of minutes until all the prices are loaded (you should see the progress on the right side of the book page)
- get the list of prices sorted and converted to USD

## Build

All artifacts are based on the `dist/index.js` bundle. To get it, run `npm run bundle`. To get the web extension archive, run `npm run build-ext`. To get the userscript, run `npm run build-userscript`.

To get all the above:

```sh
npm install && npm build-all
```