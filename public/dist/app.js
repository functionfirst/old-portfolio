var app=angular.module("portfolioApp",["ngAnimate","appRoutes","mainCtrl","portfolioCtrl","aboutCtrl","portfolioService"]);angular.module("appRoutes",["ngRoute"]).config(["$routeProvider","$locationProvider",function(o,l){console.log(l),o.when("/",{templateUrl:"/public/app/views/pages/portfolio/index.html",controller:"PortfolioController",controllerAs:"portfolio"}).when("/about",{templateUrl:"/public/app/views/pages/about/index.html",controller:"AboutController",controllerAs:"about"}).when("/carioca-digital",{templateUrl:"/public/app/views/pages/portfolio/carioca-digital.html",controller:"PortfolioController",controllerAs:"cv"}).when("/property-portal",{templateUrl:"/public/app/views/pages/portfolio/property-portal.html",controller:"PortfolioController",controllerAs:"portfolio"}).when("/live-auctions",{templateUrl:"/public/app/views/pages/portfolio/live-auctions.html",controller:"PortfolioController",controllerAs:"portfolio"}).when("/buildmate-mobile",{templateUrl:"/public/app/views/pages/portfolio/buildmate-mobile.html",controller:"PortfolioController",controllerAs:"portfolio"}).when("/buildmateapp",{templateUrl:"/public/app/views/pages/portfolio/buildmateapp.html",controller:"PortfolioController",controllerAs:"portfolio"}).when("/getbuildmate",{templateUrl:"/public/app/views/pages/portfolio/getbuildmate.html",controller:"PortfolioController",controllerAs:"portfolio"}).when("/claromentis",{templateUrl:"/public/app/views/pages/portfolio/claromentis.html",controller:"PortfolioController",controllerAs:"portfolio"})}]),angular.module("aboutCtrl",[]).controller("AboutController",["$scope",function(o){o.pageClass="page-about"}]),function(){function o(o,t,r){function e(o){return t.path()===o}var i=this;i.pages=l,i.currentPage=e}o.$inject=["$scope","$location","Portfolio"],angular.module("mainCtrl",["portfolioService"]).controller("MainController",o);var l=[{name:"Portfolio",url:"/"},{name:"About",url:"/about"}]}(),angular.module("portfolioCtrl",["portfolioService"]).controller("PortfolioController",["$scope","Portfolio",function(o,l){var t=this;t.loading=!0,o.pageClass="page-portfolio",l.all().success(function(o){t.loading=!1,t.clients=o})}]),function(){function o(o){function l(){return o.get("/api/portfolio.json")}return{all:l}}o.$inject=["$http"],angular.module("portfolioService",[]).factory("Portfolio",o)}();