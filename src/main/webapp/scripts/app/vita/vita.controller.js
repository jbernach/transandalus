'use strict';

angular.module('transandalus')
    .controller('VitaController', function ($scope, Principal) {
       Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });
    });
