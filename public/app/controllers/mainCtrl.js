(function(){
	angular.module('mainCtrl', ['portfolioService'])
		.controller('MainController', main);
	
	main.$inject = ['$rootScope', '$location', 'Portfolio'];


	//////


	function main($rootScope, $location, Portfolio){
		var vm = this;
		vm.currentPage = currentPage;
		vm.checkPath = checkPath;
		$rootScope.$on('$routeChangeStart', setActive);
		init();

		function setActive(event, next, current) {
			// console.log(next.$$route.originalPath);
			vm.currentPath = next.$$route.originalPath

			vm.showPortfolio = next.params.path;

			if(vm.showPortfolio) {
				vm.currentPath = next.params.path; 
			}

		}

		function init() {
			Portfolio.all().success(function(data){
				vm.loading = false;

				vm.clients = data;
				$rootScope.clients = data;
			});
		}

		function checkPath(path) {
			return vm.currentPath == path;
		}

		// highlight current page
		function currentPage(page) {
			return  $location.path() === page;	
		}
		
	}
})();