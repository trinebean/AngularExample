
'use strict';

angular.module('myApp.character', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/character/:charId', {
            templateUrl: 'character.html',
            controller: 'CharacterCtrl'
        });
    }])

    .controller('CharacterCtrl', ['$routeParams', 'characters', '$scope', function($routeParams, characters, $scope) {
        console.log($routeParams);
        $scope.character = characters.getCharactersbyId($routeParams.charId);
    }]);