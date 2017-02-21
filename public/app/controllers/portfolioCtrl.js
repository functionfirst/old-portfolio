angular.module('portfolioCtrl', ['portfolioService'])

.controller('PortfolioController', function($scope, Portfolio){
	var portfolio = this;
	portfolio.loading = true;

    $scope.pageClass = 'page-portfolio';

	Portfolio.all().success(function(data){
		portfolio.loading = false;

		portfolio.clients = data;
	});
});