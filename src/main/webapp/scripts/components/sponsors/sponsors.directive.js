/* globals $ */
'use strict';

angular.module('transandalus')
    .directive('taSponsors', function($state, $timeout, $interval, Sponsor) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/sponsors/sponsors.html',
            scope: {
            },
            controller: ['$scope', function ($scope) {
                $scope.sponsors = [];

                $scope.loadSponsors = function(){
                    return Sponsor.query({page: 0, size: 200, sort: ['id']}, function(result, headers) {
                        $scope.sponsors = result.filter(function(sponsor){
                            var now = new Date();
                            return new Date(sponsor.fromDate) <= now && now <= new Date(sponsor.toDate);
                        });
                    });
                };

                $scope.loadSponsors();
            }]
        };
    });
