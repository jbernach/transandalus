'use strict';

angular.module('transandalus')
    .controller('MainController', function ($scope, Principal, Province) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });

        $scope.provinces = [];
        $scope.slides = [];

        $scope.loadProvinces = function() {
            Province.query({page: 0, size: 50, sort: ['id']}, function(result) {
                $scope.provinces = result;
            });
        };

        var c = 1;
        $scope.addSlide = function(url){
            $scope.slides.push({
                image: url,
                id: c++
            });
        };

        $scope.loadProvinces();
        $scope.addSlide('https://goo.gl/photos/qUxtGeF8mcDbHRhAA');
        $scope.addSlide('https://goo.gl/photos/bYdNP6nUXZT1cuqd6');
    });
