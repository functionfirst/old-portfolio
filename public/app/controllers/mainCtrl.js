angular.module('mainCtrl', ['portfolioService'])

.controller('MainController', function(Portfolio){
	var main = this;
	main.nav = {
		class : 'nav-thumb'
	};
	main.filter = 'all';
	main.filters = ['c#','.NET', 'node.js','css','javascript','socket.io','photoshop'];

	main.setFilter = function(filter){
		main.filter = filter;
	}

	// // Nav controls
	// main.nav = {
	// 	state : false,
	// 	toggle : function() {
	// 		main.nav.state = !main.nav.state;
	// 	},
	// 	hide : function() {
	// 		main.nav.state = false;
	// 	},
	// 	show : function() {
	// 		main.nav.state = true;
	// 	}
	// }
});