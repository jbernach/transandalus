'use strict';

angular.module('transandalus')
    .controller('MainController', function ($scope, Principal, Province) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });

        $scope.provinces = [];

        $scope.loadProvinces = function() {
            Province.query({page: 0, size: 50, sort: ['id']}, function(result) {
                $scope.provinces = result;
                angular.forEach(result, function(province){
                    if(province.imageUrl) {
                        $scope.addSlide(province.imageUrl);
                    }
                });
            });
        };

        $scope.slides = [];
        $scope.activeImage = 0;
        var c = 0;
        $scope.addSlide = function(url){
            $scope.slides.push({
                image: url,
                id: c++
            });
        };

        $scope.loadProvinces();
    });
