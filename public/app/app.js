(function(){

	angular.module('portfolioApp', [
		'ngAnimate',
		'appRoutes',

		// Controllers
		'mainCtrl',
		'homeCtrl',
		'aboutCtrl',
		'pageCtrl',

		// directives
		'pageViewer',

		// Services
		'portfolioService'
	]);

})();