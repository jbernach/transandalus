'use strict';

angular.module('transandalus')
    .controller('ArticleDetailController', function ($scope, $rootScope, $stateParams, entity, Article, Category) {
        $scope.article = entity;
        $scope.load = function (id) {
            Article.get({id: id}, function(result) {
                $scope.article = result;
            });
        };
        var unsubscribe = $rootScope.$on('transandalus:articleUpdate', function(event, result) {
            $scope.article = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
