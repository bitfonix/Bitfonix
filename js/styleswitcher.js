/**	STYLE SWITCHER
*************************************************** **/
jQuery(document).ready(function() {
	"use strict";

    jQuery("#hideSwitcher, #showSwitcher").click(function () {

        if (jQuery("#showSwitcher").is(":visible")) {

			var _identifier = "#showSwitcher";
            jQuery("#switcher").animate({"margin-left": "0px"}, 500).show();
			createCookie("switcher_visible", 'true', 365);

        } else {

			var _identifier = "#switcher";
            jQuery("#showSwitcher").show().animate({"margin-left": "0"}, 500);
			createCookie("switcher_visible", 'false', 365);

        }

		jQuery(_identifier).animate({"margin-left": "-500px"}, 500, function () {
			jQuery(this).hide();
		});

    });
	
	var orange = true;
		var green = false;
		var blue = false;
		$('#orange-css').on('click', function () {
			
			orange = true;
			green = false;
		    blue = false;
			setActiveStyleSheet('orange'); 
			var logouser = $('#logo-user');
			if (logouser.length) {
				document.getElementById('logo-user').src='images/styleswitcher/logos/logo-dark.png';
			}
			var aboutimg = $('#about-us');
			if (aboutimg.length) {
				document.getElementById('about-us').src='images/about-us.png';
			}
			var aboutimg = $('#about-us');
			if (aboutimg.length) {
				document.getElementById('about-us').src='images/styleswitcher/about-us-green.png';
			}
			if($('#is_light').is(':checked')){ 
				document.getElementById('logo').src='images/styleswitcher/logos/logo-white.png';
				document.getElementById('logo-mobile').src='images/styleswitcher/logos/logo-white.png';
			}
			else {
				document.getElementById('logo').src='images/styleswitcher/logos/logo-dark.png';
				document.getElementById('logo-mobile').src='images/styleswitcher/logos/logo-dark.png';
			}	
			document.getElementById('download-bitcoin').src='images/icons/orange/download-bitcoin.png';
			document.getElementById('add-bitcoins').src='images/icons/orange/add-bitcoins.png';
			document.getElementById('buy-sell-bitcoins').src='images/icons/orange/buy-sell-bitcoins.png';
			document.getElementById('strong-security').src='images/icons/orange/strong-security.png';
			document.getElementById('world-coverage').src='images/icons/orange/world-coverage.png';
			document.getElementById('payment-options').src='images/icons/orange/payment-options.png';
			document.getElementById('mobile-app').src='images/icons/orange/mobile-app.png';
			document.getElementById('cost-efficiency').src='images/icons/orange/cost-efficiency.png';
			document.getElementById('high-liquidity').src='images/icons/orange/high-liquidity.png';
		});
		
		$('#green-css').on('click', function () {
			orange = false;
			green = true;
		    blue = false;
			setActiveStyleSheet('green'); 
			var logouser = $('#logo-user');
			if (logouser.length) {
				document.getElementById('logo-user').src='images/styleswitcher/logos/green-dark.png';
			}
			var aboutimg = $('#about-us');
			if (aboutimg.length) {
				document.getElementById('about-us').src='images/styleswitcher/about-us-green.png';
			}
			if($('#is_light').is(':checked')){ 
				document.getElementById('logo').src='images/styleswitcher/logos/green-white.png';
				document.getElementById('logo-mobile').src='images/styleswitcher/logos/green-white.png';
			}
			else {
				document.getElementById('logo').src='images/styleswitcher/logos/green-dark.png';
				document.getElementById('logo-mobile').src='images/styleswitcher/logos/green-dark.png';
			}	
			document.getElementById('download-bitcoin').src='images/icons/green/download-bitcoin.png';
			document.getElementById('add-bitcoins').src='images/icons/green/add-bitcoins.png';
			document.getElementById('buy-sell-bitcoins').src='images/icons/green/buy-sell-bitcoins.png';
			document.getElementById('strong-security').src='images/icons/green/strong-security.png';
			document.getElementById('world-coverage').src='images/icons/green/world-coverage.png';
			document.getElementById('payment-options').src='images/icons/green/payment-options.png';
			document.getElementById('mobile-app').src='images/icons/green/mobile-app.png';
			document.getElementById('cost-efficiency').src='images/icons/green/cost-efficiency.png';
			document.getElementById('high-liquidity').src='images/icons/green/high-liquidity.png';
		});

		$('#blue-css').on('click', function () {
			orange = false;
			green = false;
		    blue = true;
			setActiveStyleSheet('blue'); 
			var logouser = $('#logo-user');
			if (logouser.length) {
				document.getElementById('logo-user').src='images/styleswitcher/logos/blue-dark.png';
			}
			var aboutimg = $('#about-us');
			if (aboutimg.length) {
				document.getElementById('about-us').src='images/styleswitcher/about-us-blue.png';
			}
			if($('#is_light').is(':checked')){ 
				document.getElementById('logo').src='images/styleswitcher/logos/blue-white.png';
				document.getElementById('logo-mobile').src='images/styleswitcher/logos/blue-white.png';
			}
			else {
				document.getElementById('logo').src='images/styleswitcher/logos/blue-dark.png';
				document.getElementById('logo-mobile').src='images/styleswitcher/logos/blue-dark.png';
			}	
			document.getElementById('download-bitcoin').src='images/icons/blue/download-bitcoin.png';
			document.getElementById('add-bitcoins').src='images/icons/blue/add-bitcoins.png';
			document.getElementById('buy-sell-bitcoins').src='images/icons/blue/buy-sell-bitcoins.png';
			document.getElementById('strong-security').src='images/icons/blue/strong-security.png';
			document.getElementById('world-coverage').src='images/icons/blue/world-coverage.png';
			document.getElementById('payment-options').src='images/icons/blue/payment-options.png';
			document.getElementById('mobile-app').src='images/icons/blue/mobile-app.png';
			document.getElementById('cost-efficiency').src='images/icons/blue/cost-efficiency.png';
			document.getElementById('high-liquidity').src='images/icons/blue/high-liquidity.png';
		});

	$('.dark_switch').on('click', function() {
		var value = $(this).val();
		if(value == 'light') {
			if(orange) {
				document.getElementById('logo').src='images/styleswitcher/logos/logo-white.png';
				document.getElementById('logo-mobile').src='images/styleswitcher/logos/logo-white.png';
			}
			else if(green) {
				document.getElementById('logo').src='images/styleswitcher/logos/green-white.png';
				document.getElementById('logo-mobile').src='images/styleswitcher/logos/green-white.png';
			}
			else if(blue) {
				document.getElementById('logo').src='images/styleswitcher/logos/blue-white.png';
				document.getElementById('logo-mobile').src='images/styleswitcher/logos/blue-white.png';
			}
		}
		else {
			if(orange) {
				document.getElementById('logo').src='images/styleswitcher/logos/logo-dark.png';
				document.getElementById('logo-mobile').src='images/styleswitcher/logos/logo-dark.png';
			}
			else if(green) {
				document.getElementById('logo').src='images/styleswitcher/logos/green-dark.png';
				document.getElementById('logo-mobile').src='images/styleswitcher/logos/green-dark.png';
			}
			else if(blue) {
				document.getElementById('logo').src='images/styleswitcher/logos/blue-dark.png';
				document.getElementById('logo-mobile').src='images/styleswitcher/logos/blue-dark.png';
			}
		}
	});

	$('.boxed_switch').on('click', function() {
		var value = $(this).val();
		if(value == 'boxed') {
			jQuery('body').addClass('boxed');
			createCookie("layout_style", 'boxed', 365);
		}
		else {
			jQuery('body').removeClass('boxed');
			createCookie("layout_style", 'wide', 365);
		}
	});

	if(readCookie("switcher_visible") == 'false') {
		jQuery("#switcher").hide().animate({"margin-left": "-500px"}, 0);
		jQuery("#showSwitcher").show();
	}
	else {
		jQuery("#switcher").show().animate({"margin-left": "0px"}, 0);
		jQuery("#showSwitcher").hide();
	}
});

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function getActiveStyleSheet() {
	var i, a, main;
	for(i=0; (a = document.getElementsByTagName('link')[i]); i++) {
		if(a.getAttribute('rel').indexOf('style') != -1 && a.getAttribute('title')) {
			return a.getAttribute('title');
		}
	}
	return null;
}

function setActiveStyleSheet(title) {
	var i, a, main;
	for(i=0; (a = document.getElementsByTagName('link')[i]); i++) {
		if(a.getAttribute('rel').indexOf('style') != -1 && a.getAttribute('title')) {
			a.disabled = true;
			if(a.getAttribute('title') == title) a.disabled = false;
		}
	}
	createCookie("style_switcher", title, 365);
}

if(readCookie("style_switcher")) {
	setActiveStyleSheet(readCookie("style_switcher"));
}
else {
	setActiveStyleSheet("orange");
}

if(readCookie("layout_style") == 'boxed') {
	jQuery('body').addClass('boxed');
	jQuery('#is_boxed').prop('checked', true);
	jQuery('#is_wide').prop('checked', false);
}