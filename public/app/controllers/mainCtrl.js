angular.module('mainCtrl', ['portfolioService', 'cacheService'])

.controller('MainController', function($scope, $location, Portfolio, CacheService){
	var main = this;

	// NAVIGATION
	$scope.$on('$routeChangeSuccess', function(){
        // show filters if on the root, portfolio path
		main.showFilters = $location.path() === '/';

		// highlight current page
		main.currentPage = $location.path();
	});


	// FILTERING
	CacheService.put('filter', 'all');
	main.filter = CacheService.get('filter');
	main.filters = ['axure', 'css', 'c#', 'html', 'javascript', 'node.js', '.net', 'photoshop', 'socket.io']

	main.setFilter = function(filter){
		main.filter = filter;

		CacheService.put('filter', filter);
	}
});