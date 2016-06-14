'use strict';

angular.module('transandalus')
    .controller('MainController', function ($scope, Principal, Province) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });

        $scope.provinces = [];
        $scope.loadAll = function() {
            Province.query({page: 0, size: 50, sort: ['id']}, function(result, headers) {
                $scope.provinces = result;
            });
        };
        
        $scope.loadAll();
    });
