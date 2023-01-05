(function($){
	'use strict';

// mobile-menu

$('.icon-bar i').on('click', function(){
	$('.menu').slideToggle();
});

var block = $(window).width();
$(window).resize(function(){
	var block = $(window).width();

	if (block>991) {
		$('.menu').removeAttr('style');
	}
});







}) (jQuery);