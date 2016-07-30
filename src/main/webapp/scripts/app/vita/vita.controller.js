'use strict';

angular.module('transandalus')
    .controller('VitaController', function ($scope, Principal, Stage, API_URL) {
       Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });

       $scope.map = {
            center: { //Cordoba
              latitude: 37.891581,
              longitude: -4.778564
            },
            zoom:7,
            options: {scrollwheel:false}
        };

        $scope.map.kmlLayerOptions = {'url':''};

        $scope.loadAllStages = function() {
            Stage.query({page: 0, size: 18, sort: ['id']}, function(result, headers) {
               for (var i = 0; i < result.length; i++) {
                   result[i].kmlLayerOptions = {url: API_URL + '/tracks/'+result[i].trackId};
               }
             
                $scope.stages = result;
            });
        };
       
        $scope.loadAllStages();
    });
