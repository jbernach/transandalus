'use strict';

angular.module('transandalus')
    .controller('MenuDetailController', function ($scope, $rootScope, $stateParams, entity, Menu) {
        $scope.menu = entity;
        $scope.load = function (id) {
            Menu.get({id: id}, function(result) {
                $scope.menu = result;
            });
        };
        var unsubscribe = $rootScope.$on('transandalus:menuUpdate', function(event, result) {
            $scope.menu = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
