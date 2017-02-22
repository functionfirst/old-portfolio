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
		.when('/:path', {
			templateUrl : '/public/app/views/pages/page.html',
			controller : 'PageController',
			controllerAs : 'page'
		});

		// get rid of the hash in url
		// $locationProvider.html5Mode(true);
});