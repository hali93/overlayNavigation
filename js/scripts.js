var main = function() {
    $('.menu-button').click(function() {
    	$('.overlay').toggleClass('open');
    	$('.overlay a').fadeToggle('fast','linear');
    });
};

$(main);