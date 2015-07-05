angular.module('mainCtrl', ['portfolioService', 'cacheService'])

.controller('MainController', function($scope, $location, Portfolio, CacheService){
	var main = this;

	// NAVIGATION
	main.pages = [{
		name : 'Portfolio',
		url : '/'
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
	CacheService.put('filter', 'all');

	// Set current filter in scope
	main.filter = CacheService.get('filter');

	// available filters
	// this should probably be generated using the data in portfolio.json
	main.filters = ['axure', 'css', 'c#', 'html', 'javascript', 'node.js', '.net', 'photoshop', 'socket.io']

	main.setFilter = function(filter){
		console.log(filter);
		main.filter = filter;

		CacheService.put('filter', filter);
	};

	main.currentFilter = function(filter){
		return main.filter === filter;
	};
});