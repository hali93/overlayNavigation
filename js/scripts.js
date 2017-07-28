var main = function() {
    $('#menu-open').click(function() {
    	$('.overlay').css('width','100%');
    	$('#menu-open').css('visibility','hidden');
    });

    $('#menu-close').click(function() {
    	$('.overlay').css('width','0%');
    	$('#menu-open').css('visibility','visible');
    })
};

$(main);