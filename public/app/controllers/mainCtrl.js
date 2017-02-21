(function(){
	angular.module('mainCtrl', ['portfolioService'])
		.controller('MainController', main);
	

	//////

	var pages = [{
		name : 'Portfolio',
		url : '/'
	},{
		name : 'About',
		url : '/about'
	}];

	function main($scope, $location, Portfolio){
		var vm = this;
		vm.pages = pages;
		vm.currentPage = currentPage;

		// highlight current page
		function currentPage(page) {
			return  $location.path() === page;	
		}
	}
})();