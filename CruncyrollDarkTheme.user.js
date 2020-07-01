// ==UserScript==
// @name         Crunchyroll Background Color Changer
// @namespace    http://tampermonkey.net/
// @version      0.11
// @description  Gives Cruncyroll a dark theme using my preferred dark-mode hex color code (#222426)
// @author       eltrov
// @grant        none
// @include      https://www.crunchyroll.com/*
// @downloadURL  https://raw.githubusercontent.com/eltrov/TampermonkeyStuff/master/CruncyrollDarkTheme.user.js
// ==/UserScript==

// code via https://superuser.com/questions/181214/change-the-white-background-in-webpages-to-another-color
document.body.setAttribute("style", "background-color: #222426;");

// I haven't done any extensive testing on this but so far this single line has been all I've needed.
// I'll revisit this if the site necessitates more 'fixes' like this


// To-Do:
// text needs to be changed to be more visible on pages. This script was originally only intended to be used for the viewing pages but can (I think) easily be expanded
