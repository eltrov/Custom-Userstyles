// ==UserScript==
// @name         Un-Fuck the Harry Potter Wiki
// @namespace    https://eltrov.com
// @version      0.3
// @description  The Harry Potter Wiki (located at https://harrypotter.fandom.com) is an abysmal website bogged down with and obscene amount of garbage. This script removes that garbge and delivers a more pure wiki reading experience.
// @author       eltrov
// @match        https://harrypotter.fandom.com/*
// @grant        none
// @noframes
// @downloadURL  https://raw.githubusercontent.com/eltrov/TampermonkeyStuff/master/HarryPotterWiki.user.js
// ==/UserScript==

// function via https://stackoverflow.com/questions/23683439/gm-addstyle-equivalent-in-tampermonkey#answer-33176845
function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

// wrapper left-side image
//GM_addStyle('.body.background-dynamic.skin-oasis::after, body.background-dynamic.skin-oasis::before { display:none;}');
GM_addStyle('.body.background-dynamic.skin-oasis::after, body.background-dynamic.skin-oasis::before { background-color:#222426; background-image: none;}');

// wrapper right-side image
GM_addStyle('.body.background-dynamic.skin-oasis::before, body.background-dynamic.skin-oasis::after { background-color:#222426; background-image: none;}');

// body background color of the outside of wrapper (outer reaches)
GM_addStyle('body.background-dynamic.skin-oasis { background-color:#222426;}');

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
//GM_addStyle('.foo { display: none;}');

//--------------------------------------------------//

/*
The above code is based on a number of adblock settings I made in order to cut down the amount of visual noise and garbage present on the fandom wikia pages.
This script was created soley with the Harry Potter wiki in mind but could easily be modified to suit any other specific wiki or, perhaps, with some effort, be made into a universal wiki cleaner

AdBlock Settings
! 10/15/2019 https://harrypotter.fandom.com
harrypotter.fandom.com##.body.background-dynamic.skin-oasis::after, body.background-dynamic.skin-oasis::before
harrypotter.fandom.com##.body.background-dynamic.skin-oasis::after, body.background-dynamic.skin-oasis::after
harrypotter.fandom.com##.WikiaRail
harrypotter.fandom.com##.mcf-en
harrypotter.fandom.com##.wds-global-footer
harrypotter.fandom.com##.WikiaBarWrapper
harrypotter.fandom.com##.wds-community-header
harrypotter.fandom.com##.wds-global-navigation__content-bar-left
harrypotter.fandom.com##..wds-dropdown
harrypotter.fandom.com##.wds-button wds-is-secondary wds-global-navigation__link-button
harrypotter.fandom.com##.wds-global-navigation__start-a-wiki
harrypotter.fandom.com##@media only screen and (min-width: 1084px)__.WikiaMainContent
harrypotter.fandom.com##.WikiaMainContent:style(width:100%;)
harrypotter.fandom.com##@media only screen and (min-width: 1084px) {.WikiaMainContent:style(width:99%;)}
harrypotter.fandom.com##WikiaArticle:style(width:100%)
harrypotter.fandom.com##WikiaMainContent:style(width:100%)
harrypotter.fandom.com##.media only screen and (min-width: 1084px)__.WikiaMainContent:style(width:auto;)

*/
