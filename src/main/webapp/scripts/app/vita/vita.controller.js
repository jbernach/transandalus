'use strict';

angular.module('transandalus')
    .controller('VitaController', function ($scope, Principal, API_URL) {
       Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });

       $scope.map = {
            center: { //Cordoba
              latitude: 37.891581,
              longitude: -4.778564
            },
            zoom:7,
            options: {
                scrollwheel:false,
                mapTypeControlOptions:{
                    position: 3
                }
            }
        };

       
       //            result[i].kmlLayerOptions = {url: API_URL + '/tracks/'+result[i].trackId};
       
        $scope.$on('$viewContentLoaded', function () {
            var mapHeight = window.screen.availHeight - 240; // or any other calculated value
            $("#vita-google-map .angular-google-map-container").height(mapHeight);
        });
    });
