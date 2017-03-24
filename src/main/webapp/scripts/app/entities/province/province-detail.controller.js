'use strict';

angular.module('transandalus')
    .controller('ProvinceDetailController', function ($scope, entity, Province, Stage, API_URL) {
        $scope.province = entity;

        $scope.stages = [];

        $scope.loadStages = function(){
            Stage.query({page: 0, size: 100, sort: ['id'], province: $scope.province.id}, function(result) {
                $scope.stages = result;
                angular.forEach(result, function(stage){
                    if(stage.imageUrl) {
                        $scope.addSlide(stage.imageUrl);
                    }
                });
            });
        }

        $scope.map = {
            //Cordoba
            center: {
              latitude: 37.891581,
              longitude: -4.778564
            },
            zoom:7,
            options: {scrollwheel: false}
        };

        $scope.province.$promise.then(function(el){
            if(el.track){
                var url = API_URL + '/tracks/'+el.track.id;
                $scope.map.kmlLayerOptions = {'url':url};
            }

            $scope.loadStages();
        });

        $scope.slides = [];
        $scope.activeImage = 0;
        var c = 0;
        $scope.addSlide = function(url){
            $scope.slides.push({
                image: url,
                id: c++
            });
        };
    });
