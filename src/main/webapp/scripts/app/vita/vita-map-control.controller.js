'use strict';

angular.module('transandalus')
    .controller('VitaMapControlController', function ($scope, $rootScope) {
        $scope.showMarkers = true;
        $scope.showServices = false;
        $scope.showAlternatives = false;
        $scope.showLinks = false;

        $scope.$watch('showMarkers', function () {
            $rootScope.$broadcast('showMarkers:changed', $scope.showMarkers);
        });

        $scope.$watch('showServices', function () {
            $rootScope.$broadcast('showServices:changed', $scope.showServices);
        });

        $scope.$watch('showAlternatives', function () {
            $rootScope.$broadcast('showAlternatives:changed', $scope.showAlternatives);
        });

        $scope.$watch('showLinks', function () {
            $rootScope.$broadcast('showLinks:changed', $scope.showLinks);
        });
    });
