angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl : '/public/app/views/pages/portfolio/index.html',
			controller : 'PortfolioController',
			controllerAs : 'portfolio'
		})
		.when('/about', {
			templateUrl : '/public/app/views/pages/about/index.html',
			controller : 'AboutController',
			controllerAs : 'about'
		})
		.when('/cv', {
			templateUrl : '/public/app/views/pages/cv/index.html',
			controller : 'CVController',
			controllerAs : 'cv'
		})
		.when('/carioca-digital', {
			templateUrl : '/public/app/views/pages/portfolio/carioca-digital.html',
			controller : 'PortfolioController',
			controllerAs : 'cv'
		})
		.when('/gulfplates', {
			templateUrl : '/public/app/views/pages/portfolio/gulfplates.html',
			controller : 'PortfolioController',
			controllerAs : 'portfolio'
		})
		.when('/buildmate-mobile', {
			templateUrl : '/public/app/views/pages/portfolio/buildmate-mobile.html',
			controller : 'PortfolioController',
			controllerAs : 'portfolio'
		});

		// get rid of the hash in url
		// $locationProvider.html5Mode(true);
});