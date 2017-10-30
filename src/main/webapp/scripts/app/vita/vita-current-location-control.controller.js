'use strict';

angular.module('transandalus')
    .controller('VitaCurrentLocationControlController', function ($scope, $rootScope) {
            $scope.goToCurrentLocation = function(){
                $rootScope.$broadcast('goToCurrentLocation', true);
            }
    });
