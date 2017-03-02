(function(){
	angular.module('mainCtrl', ['portfolioService'])
		.controller('MainController', main);

	main.$inject = ['$rootScope', '$location', 'Portfolio'];


	//////


	function main($rootScope, $location, Portfolio){
		var vm = this;
		vm.checkPath = checkPath;
		$rootScope.$on('$routeChangeStart', setActive);
		init();

		function checkPath(path) {
			return vm.currentPath == path;
		}

		function init() {
			Portfolio.all().success(function(data){

				vm.clients = data;
				$rootScope.clients = data;
			});
		}

		function setActive(event, next, current) {
			vm.showMenu = false;
			vm.currentPath = next.$$route.originalPath;
			vm.showPortfolio = next.params.path;

			if(vm.showPortfolio) {
				vm.currentPath = next.params.path; 
			}

		}
	}
})();