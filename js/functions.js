var ff = {

	toggleMenu : function(){
		$('#nav').toggleClass('nav-open');
		$('.content').toggleClass('overlay-open');
		// $('.overlay').toggleClass('open');
		return false;
	}
};

(function(){
	$('body').on('click', '[data-navigation="open"]', ff.toggleMenu);
	$('body').on('click', '[data-navigation="close"]', ff.toggleMenu);
})();