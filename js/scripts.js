var main = function() {
    $('.icon-menu').click(function() {
    	$('.overlay').css('width','100%');
    	$('.icon-menu').css('visibility','hidden');
    });

    $('.btn-close').click(function() {
    	$('.overlay').css('width','0%');
    	$('.icon-menu').css('visibility','visible');
    })
};

$(document).ready(main);