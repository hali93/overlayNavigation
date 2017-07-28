var main = function() {
    $('.icon-menu').click(function() {
    	$('.overlay').css('width','100%');
    });

    $('.btn-close').click(function() {
    	$('.overlay').css('width','0%');
    })
};

$(document).ready(main);