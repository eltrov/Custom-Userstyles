// ==UserScript==
// @name         Fandom Cleaner
// @namespace    eltrovFandomCleaner
// @version      0.4
// @description  Greatly reduces the amout of visual clutter on Fandom wiki sites
// @author       eltrov
// @match        https://*.fandom.com/*
// @grant        none
// @noframes
// @downloadURL  https://raw.githubusercontent.com/eltrov/TampermonkeyStuff/master/FandomClaner.user.js
// @require      https://openuserjs.org/src/libs/sizzle/GM_config.js
// @run-at       document-body
// ==/UserScript==

GM_config.init({
  'id': 'MyConfig',
  'fields': {
    'bgColor': {
      'label': 'Background Color Hex Code',
      'type': 'text',
      'default': '#222426'
    },
    'CustomCursor': {
      'labebl': 'Allow custom cursors?',
      'type': 'checkbox',
      'default': false
    }
  }
});

var $bgColor = GM_config.get('bgColor');
var CustomCursor = GM_config.get('CustomCursor');

//alert($bgColor);

function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function () {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

// wipes out the random fandom-specific class in the body tag. this removed any wallpapers and allows you to have a simple color background
var bodyClass = document.body.className;
//alert(bodyClass);
document.body.className = document.body.className.replace(bodyClass, "");
// via - https://stackoverflow.com/questions/4397289/javascript-fastest-way-to-remove-a-class-from-body


GM_addStyle('body { background-color: #222426; }');

// Custom Cursor on/off based on config - default is off
if (!CustomCursor) {
  GM_addStyle('body { cursor: auto; }');
  GM_addStyle('a:hover { cursor: pointer; }');
} else {}

// erase Wikia Rail - this single element was what made me create this script in the first place
GM_addStyle('.WikiaRail { display:none; }');

// adjust main content width to fully fill the new area
GM_addStyle('.WikiaMainContent { width:100%; }');

// wrapper right-side image
GM_addStyle('.WikiaTopAds { display: none;}');

// wiki page body
GM_addStyle('.WikiaPage { width: 80%;}');

//  community banner
GM_addStyle('.wds-community-header { width: auto;}');

// removes ALL content below the body of the wiki page except comments where applicable
GM_addStyle('.WikiaFooter { display: none;}');

// below is no longer needed (child element of the above footer)
GM_addStyle('.mcf-en { display: none;}');

// Fandom company footer, including corporate links
GM_addStyle('.wds-global-footer { display: none;}');

// Removed the wrapper that runs across the very bottom of the page, linking to random other things (ads?)
GM_addStyle('.WikiaBarWrapper { display: none;}');

// Fandom company links (to other topics/wikis) - this essentially slims down the header bar to just the search bar itself
GM_addStyle('.wds-global-navigation__content-bar-left { display: none;}');

// Removed the "Start a Wiki" page and fully right-justifys the search bar
GM_addStyle('.wds-global-navigation__start-a-wiki { display: none;}');

// Removes the Harry Potter Community Header bar with links to the various books and other common pages. Also unfortunately removes the "random page" button. Link: https://harrypotter.fandom.com/wiki/Special:Random
GM_addStyle('.wds-community-header { display: none;}');

//template for extra elements if more need to be added
GM_addStyle('.WikiaBar { display: none;}');

// Removes the login icon to the right of the searhc bar
GM_addStyle('.wds-global-navigation__link-group, .wds-global-navigation__notifications-dropdown, .wds-global-navigation__user-menu { display: none;}');

//template for extra elements if more need to be added
GM_addStyle('.featured-video__wrapper { display: none;}');

//template for extra elements if more need to be added
//GM_addStyle('.foo { display: none;}');