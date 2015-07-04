angular.module('portfolioService', [])

.factory('Portfolio', function($http) {
	var portfolioFactory = {};

	portfolioFactory.all = function(){
		return $http.get('/api/portfolio.json');
	}

	return portfolioFactory;
});