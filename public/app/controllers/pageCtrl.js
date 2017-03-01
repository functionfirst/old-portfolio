(function(){
    angular.module('pageCtrl', [])
        .controller('PageController', page);

    page.$inject = ['$scope', '$routeParams', '$anchorScroll', '$location'];


    //////


    function page($scope, $routeParams, $anchorScroll, $location){
        var vm = this;
        vm.template = $routeParams.path;
        vm.scrollTo = scrollTo;

        if(vm.template) {
            vm.template = ('public/app/views/pages/{0}.html').replace('{0}',vm.template);
        }

        function scrollTo(id) {
            $location.hash(id);
            $anchorScroll();
        } 


//         app.controller('TestCtrl', function($scope, $location, $anchorScroll) {
//    $scope.scrollTo = function(id) {
//       $location.hash(id);
//       $anchorScroll();
//    }
// });
    }
})();