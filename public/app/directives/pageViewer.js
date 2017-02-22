(function(){
    angular.module('pageViewer', [])
		.factory('PageViewer', pageViewer);


    //////


    function pageViewer() {
        var directive = {
            restrict: 'E',
            link: linkFunc,
            template: '<div ng-include="contentUrl"></div>'
        }

        return directive;


        //////


        function linkFunc(scope, elem, attrs) {
            console.log(scope);
            scope.contentUrl = 'content/excerpts';

            attrs.$observe('ver', getTemplate);

            function getTemplate(path) {
                scope.contentUrl = 'views/pages/' + path;
            }
        }
    }
})();