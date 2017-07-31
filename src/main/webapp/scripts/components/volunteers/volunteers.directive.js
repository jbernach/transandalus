/* globals $ */
'use strict';

angular.module('transandalus')
    .directive('taVolunteers', function($state, $timeout, $interval, $document, Volunteer) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/volunteers/volunteers.html',
            scope: {
                maxVisibleVolunteers: '=maxVisibleVolunteers'
            },
            controller: ['$scope', function ($scope) {
                $scope.volunteers = [];
                $scope.visibleVolunteers = [];
                $scope.startFrom = 0;
                $scope.reveal = false;

                $scope.loadVolunteers = function(){
                    return Volunteer.query({page: 0, size: 200, sort: ['id'], menu: $scope.idMenu}, function(result, headers) {
                        $scope.volunteers = result;
                        $scope.visibleVolunteers = new Array(Math.min($scope.maxVisibleVolunteers, $scope.volunteers.length));
                        // Give all the oportunity to be on front initially
                        $scope.startFrom = Math.floor(Math.random() * $scope.volunteers.length);
                    });
                };

                $scope.selectVisibleVolunteers = function(){
                    $scope.reveal = false;
                    $timeout(function(){
                        var selected = $scope.startFrom;
                        for(var i = 0;i < $scope.visibleVolunteers.length;i++){
                            $scope.visibleVolunteers[i] = $scope.volunteers[selected];
                            selected++;
                            if(selected >= $scope.volunteers.length){
                                selected = 0;
                            }
                        }
                        $scope.startFrom = selected;
                    },1000);
                    $timeout(function(){
                        $scope.reveal = true;
                    },1000);
                };

                $scope.loadVolunteers().$promise.then(function() {
                    $scope.selectVisibleVolunteers();
                    if($scope.maxVisibleVolunteers < $scope.volunteers.length){
                        $interval(function(){ $scope.selectVisibleVolunteers();}, 10000); // change volunteers every 10 seconds
                    }
                });

            }]
        };
    });
