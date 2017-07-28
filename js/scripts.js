var main = function() {
    $('#menu-open').click(function() {
    	$('.overlay').css('width','100%');
    	$('#menu-open').css('visibility','hidden');
    	$('#menu-close').css('visibility','visible');
    });

    $('#menu-close').click(function() {
    	$('.overlay').css('width','0%');
    	$('#menu-open').css('visibility','visible'); 
    	$('#menu-close').css('visibility','hidden');
    })
};

$(main);