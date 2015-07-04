angular.module('appRoutes', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			//homepage
			.when('/', {
				templateUrl : '/public/app/views/pages/home.html',
				controller : 'HomeController',
				controllerAs : 'home'
			});

			// get rid of the hash in url
			$locationProvider.html5Mode(true);
	});