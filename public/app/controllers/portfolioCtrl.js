angular.module('portfolioCtrl', ['portfolioService'])

.filter('technologyFilter', function(){
	return function(input, term) {
		if(term === 'all') return input;
		var out = [];

		angular.forEach(input, function(value, key){
			angular.forEach(value.keywords, function(keyword){
				if(keyword === term) {
					out.push(value);
				}
			})
		});
		return out;
	}
})

.controller('PortfolioController', function($scope, Portfolio){
	var portfolio = this;
	portfolio.loading = true;

    $scope.pageClass = 'page-portfolio';

	portfolio.filter = function(){
		return $scope.filter;
	}

	Portfolio.all().success(function(data){
		portfolio.loading = false;

		portfolio.clients = data;
	});
});