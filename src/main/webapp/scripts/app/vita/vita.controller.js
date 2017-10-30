'use strict';

angular.module('transandalus')
    .controller('VitaController', function ($scope, Principal, API_URL) {

       $scope.searchMarker = {};
       $scope.currentPositionMarker = {};
       $scope.showMarkers = false;
       $scope.showServices = false;
       $scope.showAlternatives = false;
       $scope.showLinks = false;
       $scope.auxPos = 'top-right';
       $scope.searchMarkerId = 100;
       $scope.currentPositionMarkerId = 200;

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
                    position: google.maps.ControlPosition.LEFT_BOTTOM
                },
                fullscreenControlOptions:{
                    position: google.maps.ControlPosition.BOTTOM_RIGHT
                }
            }
        };

        $scope.searchbox = {
          template:'searchbox.tpl.html',
          events:{
            places_changed: function (searchBox) {
            },
            place_changed: function (searchBox) {
                var place = searchBox.getPlace();

                if (!place || place == 'undefined' || !place.geometry) {
                    return;
                }

                // refresh the map
                $scope.map = {
                    center: {
                        latitude: place.geometry.location.lat(),
                        longitude: place.geometry.location.lng()
                    },
                    zoom: 10
                };

                // refresh the marker
                $scope.searchMarker = {
                    options:{
                        draggable: false,
                        animation: google.maps.Animation.DROP
                    },
                    coords:{
                        latitude:place.geometry.location.lat(),
                        longitude:place.geometry.location.lng()
                   }
                };
            }
          },
          options:{
                autocomplete:true,
                componentRestrictions:{
                    country:'es'
                }
            }
        };

        $scope.updateLayers = function(){
            $scope.kmlLayers = {
                track: {
                    url: API_URL + '/layer/track?alt=' + $scope.showAlternatives + '&link=' + $scope.showLinks + '&cacheBuster=' + (new Date()).getTime(),
                    preserveViewport: true
                },
                markers: {
                    url: API_URL + '/layer/marcadores?alt=' + $scope.showAlternatives + '&link=' + $scope.showLinks + '&cacheBuster=' + (new Date()).getTime(),
                    preserveViewport: true
                },
                services: {
                    url: API_URL + '/layer/servicios?alt=' + $scope.showAlternatives + '&link=' + $scope.showLinks + '&cacheBuster=' + (new Date()).getTime(),
                    preserveViewport: true
                }
            };
        };

        $scope.centerOnCurrentLocation = function(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function(pos) {
                    $scope.map.center = {
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude
                    };

                    $scope.currentPositionMarker = {
                        markerId: 200,
                        options:{
                            icon: '/uploaded-images/bluecircle.png',
                            draggable: false,
                            animation: google.maps.Animation.DROP
                        },
                        coords:{
                            latitude: pos.coords.latitude,
                            longitude: pos.coords.longitude
                        }
                    };

                    $scope.$apply();
                }, function(error){},
                {
                    enableHighAccuracy: true
                    ,timeout : 5000
                });
            }

        }

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

        $scope.$on('goToCurrentLocation', function(event, val){
            $scope.centerOnCurrentLocation();
        });

        // Dinamically set map vertical size
        $scope.$on('$viewContentLoaded', function () {
            var mapHeight = window.innerHeight - 110;
            $('#vita-google-map .angular-google-map-container').height(mapHeight);
        });

        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });

        $scope.updateLayers();
    });
