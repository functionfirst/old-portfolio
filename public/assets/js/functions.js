var ff = {

	toggleMenu : function(){
		$('#nav').toggleClass('nav-open');
		$('.content').toggleClass('overlay-open');
		// $('aside').find('section').removeClass('active');
		ff.closeNav();
		return false;
	},
	toggleNav : function(){
		var target = $(this).attr('href');
		$(target).toggleClass('active').siblings().removeClass('active');
		return false;
	},
	closeNav : function(){
		$('aside').find('section').removeClass('active');
	}
};

(function(){
	$('body').on('click', '[data-navigation="open"]', ff.toggleMenu);
	$('body').on('click', '[data-navigation="close"]', ff.toggleMenu);
	$('body').on('escapeAction', ff.toggleMenu);
	$('body').on('click', '.overlay-open', ff.toggleMenu);

	$('body').on('click', '[data-aside="close"]', ff.closeNav);
	$('body').on('click', '[data-show]', ff.toggleNav);

    // create custom escape key trigger
    $(document).keyup(function (e) {
        if (e.which == 27) {
            $('body').trigger('escapeAction');
        }
    });
})();