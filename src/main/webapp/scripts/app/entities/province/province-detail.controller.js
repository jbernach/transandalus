'use strict';

angular.module('transandalus')
    .controller('ProvinceDetailController', function ($scope, $rootScope, $stateParams, DataUtils, entity, Province, $location, API_URL) {
        $scope.province = entity;

        $scope.load = function (id) {
            Province.get({id: id}, function(result) {
                $scope.province = result;
            });
        };
        var unsubscribe = $rootScope.$on('transandalus:provinceUpdate', function(event, result) {
            $scope.province = result;
        });
        $scope.$on('$destroy', unsubscribe);

        $scope.byteSize = DataUtils.byteSize;

        $scope.map = {
            //Cordoba
            center: {
              latitude: 37.891581,
              longitude: -4.778564
            },
            zoom:7,
            options: {scrollwheel:false}
        };


        if($scope.province.$promise){
            $scope.province.$promise.then(function(el){
                if(el.track){
                    var url = API_URL + '/tracks/'+el.track.id;
                    $scope.map.kmlLayerOptions = {'url':url};
                }
          });
        }
         
    });
