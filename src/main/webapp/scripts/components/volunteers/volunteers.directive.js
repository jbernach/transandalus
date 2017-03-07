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
                        "image": "assets/images/volunteers/" + image
                    }
                };

                $scope.loadVolunteers = function(){
                    $scope.volunteers.push($scope.createMockVolunteer("Fran", "El que se inventó la TransAndalus", "fran.jpg"));
                    $scope.volunteers.push($scope.createMockVolunteer("David", "El que subió todas las fotos", "david.jpg"));
                    $scope.volunteers.push($scope.createMockVolunteer("José María", "El hacker que lo ha hecho posible", "bernaco.jpg"));
                    $scope.volunteers.push($scope.createMockVolunteer("Julen", "El que contesta emails", "julen.jpg"));
                    $scope.volunteers.push($scope.createMockVolunteer("Bea", "La diseñadora", "bea.jpg"));
                    $scope.volunteers.push($scope.createMockVolunteer("Pepe", "El que invita a rondas", "pepe.jpg"));
                }

                $scope.loadVolunteers();
            }]
        };
    });
