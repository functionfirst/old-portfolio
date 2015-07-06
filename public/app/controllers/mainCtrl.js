angular.module('mainCtrl', ['portfolioService'])

.controller('MainController', function($scope, $location, Portfolio){
	var main = this;

	// NAVIGATION
	main.pages = pages;

	// highlight current page
	main.currentPage = function(page) {
		return  $location.path() === page;	
	}
});

var pages = [{
	name : 'Portfolio',
	url : '/'
},{
	name : 'About',
	url : '/about'
},{
	name : 'CV',
	url : '/cv'
}];