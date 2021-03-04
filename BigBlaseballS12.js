// ==UserScript==
// @name          BIG Blaseball - Season 12 Update
// @namespace     https://github.com/eltrov/TampermonkeyStuff/
// @homepage      https://github.com/eltrov/TampermonkeyStuff/raw/master/BigBlaseballS12.js
// @description	  Shows Blaseball in a BIG way (full screen, up to 5x2 where size permits)
// @author        Chris Roy
// @include       http://blaseball.com/*
// @include       https://blaseball.com/*
// @include       http://*.blaseball.com/*
// @include       https://*.blaseball.com/*
// @run-at        document-body
// @updateURL     https://github.com/eltrov/TampermonkeyStuff/raw/master/BigBlaseballS12.js
// @version       0.11
// ==/UserScript==
// based on the original BIG Blaseball userscript by Michael Holmes (https://userstyles.org/styles/187551)
// this is a revision for Season 12 that altered the way the game pages were constructed and redered the original script useless
(function () {
    var css = [
        "ul {",
        "    text-align: center;",
        "}",
        "li {",
        "    display: inline-block;",
        "}",
        ".Main {",
        "    padding: 0;",
        "}",
        "li.GameWidget-Full-Live, .GameWidget-Full-Upcoming {",
        "    display: inline-block;",
        "    flex-direction: column;",
        "    width: 360px;",
        "    margin-bottom: 0px;",
        "    border: 1px solid #000;",
        "}",
        ".Widget-Header-Wrapper {",
        "    border-radius: 0;",
        "}",
        ".GameWidget-Outcome {",
        "    border-radius: 0;",
        "}",
        ".Widget-Log {",
        "    border-radius: 0;",
        "}",
        ".Widget-Log-PlayCount {",
        "    right: 0;",
        "    bottom: 0;",
        "    background: #979797;",
        "    color: #fff;",
        "    font-weight: 700;",
        "    border-radius: 5px 0 0 0;",
        "    padding: 0 5px;",
        "}",
        ".Widget-Display-Visual {",
        "    border-radius: 0;",
        "}",
        ".Widget-Status {",
        "    border-radius: 0 5px 5px 0;",
        "}",
        ".GameWidget IsComplete GameWidget-Full-Live {",
        "    min-height: 400px;",
        "}"
    ].join("\n");
    if (typeof GM_addStyle != "undefined") {
        GM_addStyle(css);
    } else if (typeof PRO_addStyle != "undefined") {
        PRO_addStyle(css);
    } else if (typeof addStyle != "undefined") {
        addStyle(css);
    } else {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            heads[0].appendChild(node);
        } else {
            // no head yet, stick it whereever
            document.documentElement.appendChild(node);
        }
    }
})();