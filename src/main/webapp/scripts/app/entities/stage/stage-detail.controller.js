'use strict';

angular.module('transandalus')
    .controller('StageDetailController', function ($scope, entity, API_URL) {
        $scope.stage = entity;

        $scope.map = {
            //Cordoba
            center: {
              latitude: 37.891581,
              longitude: -4.778564
            },
            zoom:7,
            options: {scrollwheel: false}
        };

        if($scope.stage.$promise){
            $scope.stage.$promise.then(function(el){
                if(el.track){
                    var url = API_URL + '/tracks/'+el.track.id;
                    $scope.map.kmlLayerOptions = {'url':url};
                }
                $scope.addSlide(el.imageUrl);
            });
        }

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
