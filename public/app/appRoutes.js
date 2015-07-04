angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
	$routeProvider
		//homepage
		.when('/', {
			templateUrl : '/public/app/views/pages/portfolio/index.html',
			controller : 'PortfolioController',
			controllerAs : 'portfolio'
		})
		// filter
		.when('/about', {
			templateUrl : '/public/app/views/pages/about/index.html',
			controller : 'AboutController',
			controllerAs : 'about'
		})
		// filter
		.when('/cv', {
			templateUrl : '/public/app/views/pages/cv/index.html',
			controller : 'CVController',
			controllerAs : 'cv'
		});

		// get rid of the hash in url
		$locationProvider.html5Mode(true);
});