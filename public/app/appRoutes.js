angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
	$routeProvider
		//homepage
		.when('/', {
			templateUrl : '/public/app/views/pages/home.html',
			controller : 'HomeController',
			controllerAs : 'home'
		})
		// about
		.when('/about', {
			templateUrl : '/public/app/views/pages/about/index.html',
			controller : 'AboutController',
			controllerAs : 'about'
		});

		// get rid of the hash in url
		$locationProvider.html5Mode(true);
});