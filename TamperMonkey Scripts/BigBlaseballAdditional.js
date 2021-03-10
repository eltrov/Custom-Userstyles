// ==UserScript==
// @name          BIG Blaseball additional
// @description	  additional custom content running on top of BIG Blaseball
// @include       http://blaseball.com/*
// @include       https://blaseball.com/*
// @include       http://*.blaseball.com/*
// @include       https://*.blaseball.com/*
// @run-at        document-start
// @version       0.20200807120102
// @require       https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==
(function() {var css = [
	".GameWidget-Header-Wrapper {",
	"    border-radius: 5px 5px 0 0;",
	"}",
   	".GameWidget-Upcoming-Info {",
	"    border-radius: 0;",
	"}",
   	".GameWidget-Outcome {",
	"    border-radius: 0;",
	"}",
    ".Navigation {",
	"    margin: auto;",
	"}",
    ".Navigation-Main {",
	"    padding-right: 50px;",
	"}",
     ".GameWidget-Upcoming-Bets {",
	"    border-radius: 0 0 5px 5px;",
	"}",
    ".GameWidget-ScoreTeam {",
	"    padding-left: 10px;",
	"}",
    ".GameWidget-UpcomingBet {",
	"    margin-bottom: 15px;",
	"}",
    ".GameWidget-Display-Visual {",
	"    border-radius: 0;",
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

/*
alert($('a:eq(5)').text());
*/

$('a:eq(6)').html('<div id="waldo" style="background-color: pink;"><h1>Hello!</h1></div>');
$('a:eq(16)').text("Hello WOffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffRLD");

/* alert($('.Navigation-CurrencyButton').text());

/*
function ReplaceNumberWithCommas(yourNumber) {
    //Seperates the components of the number
    var n= yourNumber.toString().split(".");
    //Comma-fies the first part
    n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //Combines the two sections
    return n.join(".");
}

var coins = document.getElementbyClass(".Navigation-CurrencyButton");

ReplaceNumberWithCommas(coins.innerText); //yields 1,136.6696

*/