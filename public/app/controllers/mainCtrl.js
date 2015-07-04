angular.module('mainCtrl', [])

.controller('MainController', function(){
	var main = this;
	// main.nav = false;

	main.nav = {
		state : false,
		toggle : function() {
			main.nav.state = !main.nav.state;
		},
		hide : function() {
			main.nav.state = false;
		},
		show : function() {
			main.nav.state = true;
		}
	}
});