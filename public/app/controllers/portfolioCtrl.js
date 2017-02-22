(function() {
	angular.module('portfolioCtrl', ['portfolioService'])
		.controller('PortfolioController', portfolio);


	//////


	function portfolio($rootScope, $scope, Portfolio){
		var vm = this;
		vm.clients = $rootScope.clients;
	}
})();