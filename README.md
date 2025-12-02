# Amazon Price History Button Userscript

A Tampermonkey/Greasemonkey userscript that adds quick-access buttons for Keepa and CamelCamelCamel price history tools on Amazon product pages.

## Features

- Detects the product ASIN from the URL
- Inserts two floating buttons:
  - Price History on Keepa
  - Price History on CamelCamelCamel
- Supports Amazon storefronts across multiple regions (US, EU, Asia, etc.)
- Opens price history pages in new tabs

## Installation

1. Install a userscript manager extension:
   - **Chrome/Edge**: [Tampermonkey](https://www.tampermonkey.net/)
   - **Firefox**: [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/) or Tampermonkey

2. Click the raw script link below (or copy the source) and confirm the installation in the manager.

[📥 Install Script (raw)](https://github.com/llllIIIIlllIIl/amazon-price-history-button/raw/main/amazon-price-history.user.js](https://github.com/llllIIIIlllIIl/Amazon-Price-History-Button-Userscript/raw/refs/heads/main/amazon-price-history.user.js)

## Supported Domains

| Region | Domain |
|--------|--------|
| United States | [www.amazon.com](https://www.amazon.com) |
| Australia | [www.amazon.com.au](https://www.amazon.com.au) |
| Belgium | [www.amazon.com.be](https://www.amazon.com.be) |
| Brazil | [www.amazon.com.br](https://www.amazon.com.br) |
| Canada | [www.amazon.ca](https://www.amazon.ca) |
| China | [www.amazon.cn](https://www.amazon.cn) |
| Egypt | [www.amazon.eg](https://www.amazon.eg) |
| France | [www.amazon.fr](https://www.amazon.fr) |
| Germany | [www.amazon.de](https://www.amazon.de) |
| India | [www.amazon.in](https://www.amazon.in) |
| Italy | [www.amazon.it](https://www.amazon.it) |
| Japan | [www.amazon.co.jp](https://www.amazon.co.jp) |
| Mexico | [www.amazon.com.mx](https://www.amazon.com.mx) |
| Netherlands | [www.amazon.nl](https://www.amazon.nl) |
| Poland | [www.amazon.pl](https://www.amazon.pl) |
| Saudi Arabia | [www.amazon.sa](https://www.amazon.sa) |
| Singapore | [www.amazon.sg](https://www.amazon.sg) |
| Spain | [www.amazon.es](https://www.amazon.es) |
| Sweden | [www.amazon.se](https://www.amazon.se) |
| Turkey | [www.amazon.com.tr](https://www.amazon.com.tr) |
| United Arab Emirates | [www.amazon.ae](https://www.amazon.ae) |
| United Kingdom | [www.amazon.co.uk](https://www.amazon.co.uk) |

## Usage

1. Navigate to any Amazon product page (URL containing `/dp/<ASIN>`)
2. The script injects a small orange panel at the top-left corner
3. Click **Price History on Keepa** or **Price History on CamelCamelCamel** to view the product's price trends

## Development

- **Source Code**: `amazon-price-history.user.js`
- **Contributing**: Fork the repository, make changes, and submit a pull request
- **Issues**: Report bugs or feature requests via the GitHub Issues tab

## License

MIT ©
