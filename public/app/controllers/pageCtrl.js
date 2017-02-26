(function(){
    angular.module('pageCtrl', [])
        .controller('PageController', page);

    page.$inject = ['$routeParams'];


    //////


    function page($routeParams){
        var vm = this;
        vm.template = $routeParams.path;

        if(vm.template) {
            vm.template = ('public/app/views/pages/{0}.html').replace('{0}',vm.template);
        }
    }
})();