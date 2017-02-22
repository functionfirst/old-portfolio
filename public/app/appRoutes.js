angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl : '/public/app/views/index.html',
			controller : 'HomeController',
			controllerAs : 'home'
		})
		.when('/about', {
			templateUrl : '/public/app/views/about.html',
			controller : 'AboutController',
			controllerAs : 'about'
		})
		.when('/:path', {
			templateUrl : '/public/app/views/pages/index.html',
			controller : 'PageController',
			controllerAs : 'page'
		});

		// get rid of the hash in url
		// $locationProvider.html5Mode(true);
});