angular.module('mainCtrl', ['portfolioService', 'cacheService'])

.controller('MainController', function(Portfolio, CacheService){
	var main = this;

	// FILTERING
	CacheService.put('filter', 'all');
	main.filter = CacheService.get('filter');
	main.filters = ['c#','.NET', 'node.js','css','javascript','socket.io','photoshop'];

	main.setFilter = function(filter){
		main.filter = filter;

		CacheService.put('filter', filter);
	}
});