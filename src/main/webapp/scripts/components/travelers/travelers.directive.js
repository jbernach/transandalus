/* globals $ */
'use strict';

angular.module('transandalus')
    .directive('taTravelers', function($state, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/travelers/travelers.html'
        };
    });
