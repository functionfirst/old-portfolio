angular.module('homeCtrl', ['portfolioService', 'cacheService'])

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

.controller('HomeController', function(Portfolio, CacheService){
	var home = this;
	home.loading = true;

	home.filter = function(){
		return CacheService.get('filter');
	}

	Portfolio.all().success(function(data){
		home.loading = false;

		home.clients = data;
	});
});