// ==UserScript==
// @name         Amazon Price History Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add price history buttons for Keepa and CamelCamelCamel on Amazon product pages
// @author       You
// @match        https://www.amazon.com/*
// @match        https://www.amazon.com.au/*
// @match        https://www.amazon.com.be/*
// @match        https://www.amazon.com.br/*
// @match        https://www.amazon.ca/*
// @match        https://www.amazon.cn/*
// @match        https://www.amazon.eg/*
// @match        https://www.amazon.fr/*
// @match        https://www.amazon.de/*
// @match        https://www.amazon.in/*
// @match        https://www.amazon.it/*
// @match        https://www.amazon.co.jp/*
// @match        https://www.amazon.com.mx/*
// @match        https://www.amazon.nl/*
// @match        https://www.amazon.pl/*
// @match        https://www.amazon.sa/*
// @match        https://www.amazon.sg/*
// @match        https://www.amazon.es/*
// @match        https://www.amazon.se/*
// @match        https://www.amazon.com.tr/*
// @match        https://www.amazon.ae/*
// @match        https://www.amazon.co.uk/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to get the Amazon product ASIN
    function getProductAsin() {
        const asinMatch = window.location.href.match(/\/dp\/([A-Z0-9]{10})/);
        return asinMatch ? asinMatch[1] : null;
    }

    // Function to create the buttons
    function createButtons(asin) {
        const buttonContainer = document.createElement('div');
        buttonContainer.style.position = 'fixed';
        buttonContainer.style.top = '20px';
        buttonContainer.style.left = '20px';
        buttonContainer.style.zIndex = '1000';
        buttonContainer.style.backgroundColor = '#ff9900';
        buttonContainer.style.padding = '10px';
        buttonContainer.style.borderRadius = '5px';
        buttonContainer.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';

        // Keepa button
        const keepaButton = document.createElement('button');
        keepaButton.innerText = 'Price History on Keepa';
        keepaButton.style.marginRight = '10px';
        keepaButton.onclick = () => window.open(`https://keepa.com/#!product/4-${asin}`, '_blank');

        // CamelCamelCamel button
        const camelButton = document.createElement('button');
        camelButton.innerText = 'Price History on CamelCamelCamel';
        camelButton.onclick = () => window.open(`https://camelcamelcamel.com/product/${asin}`, '_blank');

        // Append buttons to the container
        buttonContainer.appendChild(keepaButton);
        buttonContainer.appendChild(camelButton);

        // Append the container to the body
        document.body.appendChild(buttonContainer);
    }

    // Get the product ASIN and create the buttons if available
    const asin = getProductAsin();
    if (asin) {
        createButtons(asin);
    }
})();
