(function(){
    angular.module('pageCtrl', [])
        .controller('PageController', page);

    page.$inject = ['$rootScope', '$routeParams'];


    //////


    function page($rootScope, $routeParams){
        var vm = this;
        vm.template = $routeParams.path;
        $rootScope.pageClass = 'page';

        if(vm.template) {
            vm.template = ('public/app/views/pages/{0}.html').replace('{0}',vm.template);
        }
    }
})();