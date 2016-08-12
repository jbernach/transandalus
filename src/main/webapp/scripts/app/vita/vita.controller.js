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
                fullscreenControl: true,
                mapTypeControlOptions:{
                    position: 3
                }
            }
        };

        $scope.showMarkers = true;
        $scope.showServices = false;
        $scope.showAlternatives = false;
        $scope.showLinks = false;

        $scope.updateLayers = function(){
            $scope.kmlLayers = {
                track: {
                    url: API_URL + '/layer/track?alt=' + $scope.showAlternatives + '&link=' + $scope.showLinks,
                    preserveViewport: true
                },
                markers: {
                    url: API_URL + '/layer/marcadores?alt=' + $scope.showAlternatives + '&link=' + $scope.showLinks,
                    preserveViewport: true
                },
                services: {
                    url: API_URL + '/layer/servicios?alt=' + $scope.showAlternatives + '&link=' + $scope.showLinks,
                    preserveViewport: true
                }
            };
        }
        
        $scope.updateLayers();

        // Listen to changes in vita-map-control.controller on these variables
        $scope.$on('showMarkers:changed', function(event, val) {
           $scope.showMarkers = val;
           $scope.updateLayers();
        });

        $scope.$on('showServices:changed', function(event, val) {
           $scope.showServices = val;
           $scope.updateLayers();
        });

        $scope.$on('showAlternatives:changed', function(event, val) {
           $scope.showAlternatives = val;
           $scope.updateLayers();
        });

        $scope.$on('showLinks:changed', function(event, val) {
           $scope.showLinks = val;
           $scope.updateLayers();
        });

        // Dinamically set map vertical size
        $scope.$on('$viewContentLoaded', function () {
            var mapHeight = window.innerHeight - 110;
            $("#vita-google-map .angular-google-map-container").height(mapHeight);
        });
    });
