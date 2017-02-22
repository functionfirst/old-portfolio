(function(){
    angular.module('aboutCtrl', [])
        .controller('AboutController', about);

    //////

    function about($scope){
        $scope.pageClass = 'page-about';
        var vm = this;
    }
})();