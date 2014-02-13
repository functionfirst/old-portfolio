var ff = {

	toggleMenu : function(){
		$('#nav').toggleClass('nav-open');
		$('.content').toggleClass('overlay-open');
		return false;
	}
};

(function(){
	$('body').on('click', '[data-navigation="open"]', ff.toggleMenu);
	$('body').on('click', '[data-navigation="close"]', ff.toggleMenu);
	$('body').on('escapeAction', ff.toggleMenu);
	$('body').on('click', '.overlay-open', ff.toggleMenu);

    // create custom escape key trigger
    $(document).keyup(function (e) {
        if (e.which == 27) {
            $('body').trigger('escapeAction');
        }
    });
})();