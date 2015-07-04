angular.module('mainCtrl', [])

.controller('MainController', function(){
	var main = this;
	main.nav = false;

	main.toggleNav = function(){
		console.log('toggle nav');
		main.nav = !main.nav;
	}
});