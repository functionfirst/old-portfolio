angular.module('mainCtrl', ['portfolioService'])

.controller('MainController', function($scope, $location, Portfolio){
	var main = this;

	// NAVIGATION
	main.pages = pages;

	// toggle filter menu
	main.toggleNav = function(){
		main.showNav = !main.showNav;
	};

	main.hideNav = function(){
		main.showNav = false;
	}

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

	main.filter = {
		get : function() {
			return $scope.filter;
		},
		set : function(filter) {
			$scope.filter = filter;
			main.toggleNav();
		},
		current : function(filter) {
			return $scope.filter === filter;
		}
	};
});

var pages = [{
	name : 'Portfolio',
	url : '/'
},{
	name : 'About',
	url : '/about'
},{
	name : 'CV',
	url : '/cv'
}];