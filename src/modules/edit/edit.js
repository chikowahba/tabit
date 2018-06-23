var edit = null
rosApp.controller('EditController',
        function($scope, $rootScope,catFactory,modifiersFactory, $timeout) {
            
            edit = $scope;
            $scope.modifiers_groups = angular.copy(modifiersFactory.getModifiersGroup());
            $scope.categories = angular.copy(catFactory.getCategories());

            //add kind of item

            for (var i = 0; i < $scope.categories.length; i++) {
                $scope.categories[i].allowedType = [ $scope.categories[i].name];
                for (var j = 0; j < $scope.categories[i].items.length; j++) {
                    $scope.categories[i].items[j].kind = $scope.categories[i].name;
                }
            }
            for (var i = 0; i < $scope.modifiers_groups.length; i++) {
                $scope.modifiers_groups[i].allowedType = [ $scope.modifiers_groups[i].name];
                for (var j = 0; j < $scope.modifiers_groups[i].options.length; j++) {
                    $scope.modifiers_groups[i].options[j].kind = $scope.modifiers_groups[i].name;
                }
            }


            // functions

            $scope.selectItem= function(item,index,list){
                $('#myModal').modal('show');
                $scope.selectedItem = angular.copy(item);
                $scope.index = index;
                $scope.selectedList = list;
            }

            $scope.saveDetailes = function() {
                if ($scope.selectedList.name == 'Temperature' ||$scope.selectedList.name  == 'Toppings' ) {
                   $scope.selectedList.options[$scope.index] = $scope.selectedItem;
                }
                else  $scope.selectedList.items[$scope.index] =  $scope.selectedItem;
                $('#myModal').modal('hide');
            }

            $scope.saveChanges = function () {
                catFactory.setCatgories($scope.categories);
                modifiersFactory.setModifiersGroup($scope.modifiers_groups);
            }

        }
);
