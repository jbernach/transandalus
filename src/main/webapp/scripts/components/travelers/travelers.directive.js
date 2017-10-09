/* globals $ */
'use strict';

angular.module('transandalus')
    .directive('taTravelers', function($state, $timeout, $interval, Traveler) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/travelers/travelers.html',
            scope: {
                maxVisibleTravelers: '=maxVisibleTravelers'
            },
            controller: ['$scope', function ($scope) {
                $scope.travelers = [];
                $scope.visibleTravelers = [];
                $scope.startFrom = 0;
                $scope.reveal = false;

                $scope.loadTravelers = function(){
                    return Traveler.query({page: 0, size: 200, sort: ['id']}, function(result, headers) {
                        $scope.travelers = result;
                        $scope.visibleTravelers = new Array(Math.min($scope.maxVisibleTravelers, $scope.travelers.length));
                        // Give all the oportunity to be on front initially
                        $scope.startFrom = Math.floor(Math.random() * $scope.travelers.length);
                    });
                };

                $scope.selectVisibleTravelers = function(){
                    $scope.reveal = false;
                    $timeout(function(){
                        var selected = $scope.startFrom;
                        for(var i = 0;i < $scope.visibleTravelers.length;i++){
                            $scope.visibleTravelers[i] = $scope.travelers[selected];
                            selected++;
                            if(selected >= $scope.travelers.length){
                                selected = 0;
                            }
                        }
                        $scope.startFrom = selected;
                    },1000);
                    $timeout(function(){
                        $scope.reveal = true;
                    },1000);
                };

                $scope.loadTravelers().$promise.then(function() {
                    $scope.selectVisibleTravelers();
                    if($scope.maxVisibleTravelers < $scope.travelers.length){
                        $interval(function(){ $scope.selectVisibleTravelers();}, 20000); // change travelers every 20 seconds
                    }
                });

            }]
        };
    });
