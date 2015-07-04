angular.module('homeCtrl', ['portfolioService'])

.filter('technologyFilter', function(){
	return function(input, term) {
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

.controller('HomeController', function(Portfolio){
	var home = this;
	home.loading = true;

	Portfolio.all().success(function(data){
		home.loading = false;

		home.clients = data;
	});
});