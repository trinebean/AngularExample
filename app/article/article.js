
'use strict';

angular.module('myApp.article', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/article/:id', {
      templateUrl: 'article/article.html',
      controller: 'ArticleCtrl'
    });
  }])

  .controller('ArticleCtrl', ['$routeParams', 'articles', '$scope', function($routeParams, articles, $scope) {
    console.log($routeParams);
        $scope.article = articles.getArticlesbyId($routeParams.id);
  }]);