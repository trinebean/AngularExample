'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])
    .controller('View2Ctrl', ['$scope', 'characters', function($scope, characters) {
          $scope.selectedItem={};
          $scope.characters = characters.getCharacters();
          $scope.update = function(){
            $scope.selected = JSON.parse($scope.selectedItem);
          }

}]);