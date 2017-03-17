/* globals $ */
'use strict';

angular.module('transandalus')
    .directive('taVolunteers', function($state, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/volunteers/volunteers.html',
            controller: ['$scope', function ($scope) {
                $scope.volunteers = [];

                $scope.createMockVolunteer = function(name, text, image) {
                    return {
                        "name": name,
                        "text": text,
                        "image": image
                    }
                };

                $scope.loadVolunteers = function(){
                    $scope.volunteers.push($scope.createMockVolunteer("Fran", "El que se inventó la TransAndalus", "uploaded-images/volunteers/fran.jpg"));
                    $scope.volunteers.push($scope.createMockVolunteer("David", "El que subió todas las fotos", "uploaded-images/volunteers/david.jpg"));
                    $scope.volunteers.push($scope.createMockVolunteer("José María", "El hacker que lo ha hecho posible", "uploaded-images/volunteers/bernaco.jpg"));
                    $scope.volunteers.push($scope.createMockVolunteer("Julen", "El que contesta emails", "uploaded-images/volunteers/julen.jpg"));
                    $scope.volunteers.push($scope.createMockVolunteer("Bea", "La diseñadora", "uploaded-images/volunteers/bea.jpg"));
                    $scope.volunteers.push($scope.createMockVolunteer("Pepe", "El que invita a rondas", "uploaded-images/volunteers/pepe.jpg"));
                }

                $scope.loadVolunteers();
            }]
        };
    });
