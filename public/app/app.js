(function(){

	angular.module('portfolioApp', [
		'ngAnimate',
		'appRoutes',

		// Controllers
		'mainCtrl',
		'portfolioCtrl',
		'aboutCtrl',
		'pageCtrl',

		// directives
		'pageViewer',

		// Services
		'portfolioService'
	]);

})();