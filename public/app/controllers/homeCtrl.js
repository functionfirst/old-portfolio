(function() {
	angular.module('homeCtrl', ['portfolioService'])
		.controller('HomeController', home);

	home.$inject = ['$rootScope', '$scope', 'Portfolio'];


	//////


	function home($rootScope, $scope, Portfolio){
		var vm = this;
		vm.clients = $rootScope.clients;
	}
})();