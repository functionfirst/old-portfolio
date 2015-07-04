angular.module('mainCtrl', ['portfolioService', 'cacheService'])

.controller('MainController', function(Portfolio, CacheService){
	var main = this;

	// FILTERING
	CacheService.put('filter', 'all');
	main.filter = CacheService.get('filter');
	main.filters = ['axure', 'css', 'c#', 'html', 'javascript', 'node.js', '.net', 'photoshop', 'socket.io']

	main.setFilter = function(filter){
		main.filter = filter;

		CacheService.put('filter', filter);
	}
});