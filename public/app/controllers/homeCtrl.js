angular.module('homeCtrl', ['portfolioService'])

.controller('HomeController', function(Portfolio){
	var home = this;
	home.loading = true;

	Portfolio.all().success(function(data){
		home.loading = false;

		home.clients = data;
	});
});