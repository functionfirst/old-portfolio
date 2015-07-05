angular.module('mainCtrl', ['portfolioService', 'cacheService'])

.controller('MainController', function(Portfolio, CacheService){
	var main = this;
	main.page = 'portfolio';

	// FILTERING
	main.showFilter = function() {
		return main.page === 'portfolio';
	}

	CacheService.put('filter', 'all');
	main.filter = CacheService.get('filter');
	main.filters = ['axure', 'css', 'c#', 'html', 'javascript', 'node.js', '.net', 'photoshop', 'socket.io']

	main.setFilter = function(filter){
		main.filter = filter;

		CacheService.put('filter', filter);
	}

	main.currentNav = function(page) {
		main.page = page;
	}

	main.currentPage = function(page) {
		return main.page === page;
	}
});