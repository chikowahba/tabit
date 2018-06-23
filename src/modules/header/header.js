var he = null;

rosApp.directive('rosHeader', function(){
    return {
        restrict: 'AE',
        transclude: true,
        controller: ['$scope', '$location', function tingoHeader($scope, $location) {
            
            he = $scope;
            $scope.location = $location;
            $scope.currentPage = $scope.location.$$path;


            $scope.go = function (path) {
                $scope.currentPage = path;
                $location.path(path);
            };
        }],


        templateUrl: '/src/modules/header/header.html',
        scope: {
            modalTitle: '@?',
            extraModalClass: '@?'
        }
    }
});
