(function(){
    angular.module('pageCtrl', [])
        .controller('PageController', page);

    //////

    function page($scope, $routeParams){
        var vm = this;
        vm.template = $routeParams.path;

        if(vm.template) {
            vm.template = ('public/app/views/pages/portfolio/{0}.html').replace('{0}',vm.template);
        }
    }
})();