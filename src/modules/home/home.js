var home = null
rosApp.controller('HomeController',
        function($scope, $rootScope,catFactory,modifiersFactory) {
            
            home = $scope;
            $scope.tabsParam = 'menu';
            $scope.categories = angular.copy(catFactory.getCategories());
            $scope.modifiers_groups = angular.copy(modifiersFactory.getModifiersGroup());


            $scope.changeTab = function (cat) {
                $scope.tabsParam = cat;
            }
        }
);
