angular.module('mainCtrl', ['portfolioService'])

.controller('MainController', function($scope, $location, Portfolio){
	var main = this;

	// NAVIGATION
	main.pages = [{
		name : 'Portfolio',
		url : '/'
	},{
		name : 'About',
		url : '/about'
	},{
		name : 'CV',
		url : '/cv'
	}];

    // show filters if on the root, portfolio path
	$scope.$on('$routeChangeSuccess', function(){
		main.showFilters = $location.path() === '/';
	});

	// highlight current page
	main.currentPage = function(page) {
		return  $location.path() === page;	
	}

	// FILTERING

	// Initialise default filter keyword
	$scope.filter = 'all';

	// available filters
	// this should probably be generated using the data in portfolio.json
	main.filters = ['axure', 'css', 'c#', 'html', 'javascript', 'node.js', '.net', 'photoshop', 'socket.io']

	main.filter = {};

	main.filter.get = function() {
		return $scope.filter;
	}

	main.filter.set = function(filter) {
		$scope.filter = filter;
	}

	main.filter.current = function(filter) {
		return $scope.filter === filter;
	}

	// main.setFilter = function(filter){
	// 	$scope.filter = filter;
	// };

	// main.isCurrentFilter = function(filter){
	// 	return $scope.filter === filter;
	// };
});