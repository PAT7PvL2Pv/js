// ==UserScript==
// @name         x重定向
// @namespace    
// @version      1.0
// @description  
// @match        *://x.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Current page URL
    var currentUrl = window.location.href;

    // Define regex patterns and corresponding replacements
    var regexRedirects = [
        {
            pattern: /^https?:\/\/x\.com\/([^\/]+)\/status\/(\d+)(.*)/,
            replacement: 'https://www.sotwe.com/tweet/$2'
        },
        {
            pattern: /^https?:\/\/x\.com\/(.*)/,
            replacement: 'https://sotwe.com/$1'
        }
    ];

    // Function to apply redirects based on regex patterns
    function applyRedirects(url) {
        for (var i = 0; i < regexRedirects.length; i++) {
            var redirect = regexRedirects[i];
            if (redirect.pattern.test(url)) {
                var redirectedUrl = url.replace(redirect.pattern, redirect.replacement);
                if (redirectedUrl !== url) {
                    window.location.replace(redirectedUrl);
                    return;
                }
            }
        }
    }

    // Apply redirects on page load
    applyRedirects(currentUrl);

})();
