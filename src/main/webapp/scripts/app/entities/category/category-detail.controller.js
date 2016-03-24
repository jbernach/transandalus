'use strict';

angular.module('transandalus')
    .controller('CategoryDetailController', function ($scope, $rootScope, $stateParams, entity, Category) {
        $scope.category = entity;
        $scope.load = function (id) {
            Category.get({id: id}, function(result) {
                $scope.category = result;
            });
        };
        var unsubscribe = $rootScope.$on('transandalus:categoryUpdate', function(event, result) {
            $scope.category = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
