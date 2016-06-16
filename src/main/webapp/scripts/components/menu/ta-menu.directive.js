/* globals $ */
'use strict';

angular.module('transandalus')
    .directive('taMenu', function() {
        return {
        	restrict: 'A',
        	scope: {
                idMenu: '=taMenu'
            },
            templateUrl: 'scripts/components/menu/menu.html',
            controller: ['$scope','MenuItem', function ($scope, MenuItem) {
                //console.debug("Menu de id " + $scope.idMenu);
                $scope.menuItems = [];
                $scope.loadMenuItems = function(){
            		MenuItem.query({page: 0, size: 20, sort: ['order'], menu: $scope.idMenu}, function(result, headers) {
                		$scope.menuItems = result;
            		});
        		}

        		$scope.loadMenuItems();
            }]
        };
    });
