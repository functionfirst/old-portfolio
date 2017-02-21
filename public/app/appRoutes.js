angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	console.log($locationProvider);

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
		.when('/carioca-digital', {
			templateUrl : '/public/app/views/pages/portfolio/carioca-digital.html',
			controller : 'PortfolioController',
			controllerAs : 'cv'
		})
		.when('/property-portal', {
			templateUrl : '/public/app/views/pages/portfolio/property-portal.html',
			controller : 'PortfolioController',
			controllerAs : 'portfolio'
		})
		.when('/live-auctions', {
			templateUrl : '/public/app/views/pages/portfolio/live-auctions.html',
			controller : 'PortfolioController',
			controllerAs : 'portfolio'
		})
		.when('/buildmate-mobile', {
			templateUrl : '/public/app/views/pages/portfolio/buildmate-mobile.html',
			controller : 'PortfolioController',
			controllerAs : 'portfolio'
		})
		.when('/buildmateapp', {
			templateUrl : '/public/app/views/pages/portfolio/buildmateapp.html',
			controller : 'PortfolioController',
			controllerAs : 'portfolio'
		})
		.when('/getbuildmate', {
			templateUrl : '/public/app/views/pages/portfolio/getbuildmate.html',
			controller : 'PortfolioController',
			controllerAs : 'portfolio'
		})
		.when('/claromentis', {
			templateUrl : '/public/app/views/pages/portfolio/claromentis.html',
			controller : 'PortfolioController',
			controllerAs : 'portfolio'
		})

		// get rid of the hash in url
		// $locationProvider.html5Mode(true);
});