angular.module('portfolioCtrl', ['portfolioService', 'cacheService'])

.filter('technologyFilter', function(){
	return function(input, term) {
		if(term === 'all') return input;
		var out = [];

		angular.forEach(input, function(value, key){
			angular.forEach(value.keywords, function(keyword){
				if(keyword === term) {
					out.push(value);
				}
			})
		});
		return out;
	}
})

.controller('PortfolioController', function(Portfolio, CacheService){
	var portfolio = this;
	portfolio.loading = true;

	portfolio.filter = function(){
		return CacheService.get('filter');
	}

	Portfolio.all().success(function(data){
		portfolio.loading = false;

		portfolio.clients = data;
	});
});