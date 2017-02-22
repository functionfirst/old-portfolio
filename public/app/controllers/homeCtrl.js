(function() {
	angular.module('homeCtrl', ['portfolioService'])
		.controller('HomeController', home);


	//////


	function home($rootScope, $scope, Portfolio){
		var vm = this;
		vm.clients = $rootScope.clients;
	}
})();