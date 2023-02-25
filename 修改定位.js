// ==UserScript==
// @name         修改定位
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://eat.zuifuli.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zuifuli.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    navigator.geolocation._getCurrentPosition = navigator.geolocation.getCurrentPosition;
    navigator.geolocation.getCurrentPosition = function(f) {
        navigator.geolocation._getCurrentPosition(p => {
            Object.defineProperty(p.coords, 'longitude', {
                get: function() {
                    return 121.48789;
                }
            });
            Object.defineProperty(p.coords, 'latitude', {
                get: function() {
                    return 31.24309;
                }
            });
            console.info("fake", p);
            f(p);
        });
    }
})();