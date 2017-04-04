'use strict';

angular.module('transandalus')
    .controller('VitaMapControlController', function ($scope, $rootScope, $timeout) {
        $scope.showMarkers = false;
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

        $timeout(function() {
            $('#vita-search-placeholder').css('display', 'none');
            $('#vita-search-container').append($('#vita-search-box'));
            $('#vita-search-box').css({'display': 'block', 'position': 'relative', 'left': '0px'});
        });

    });
