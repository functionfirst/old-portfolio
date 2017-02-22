(function() {
	angular.module('portfolioService', [])
		.factory('Portfolio', portfolio);

	//////

	function portfolio($http) {
		return {
			all: all
		};


		//////


		function all() {
			return $http.get('/api/portfolio.json');
		}
	}
})();