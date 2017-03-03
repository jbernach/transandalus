'use strict';

angular.module('transandalus')
    .controller('MainController', function ($scope, $state, Principal, Province) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });

        $scope.provinces = [];
        $scope.slides = [];
        $scope.activeImage = 0;

        $scope.loadProvinces = function() {
            Province.query({page: 0, size: 50, sort: ['id']}, function(result) {
                $scope.provinces = result;
            });
        };

        var c = 0;
        $scope.addSlide = function(url){
            $scope.slides.push({
                image: url,
                id: c++
            });
        };

        $scope.loadProvinces();
        $scope.addSlide('assets/images/home1.png');
        $scope.addSlide('assets/images/home2.png');

        angular.element(document).ready(function () {
            document.querySelectorAll('.province-outline').forEach(function(el){
                el.addEventListener('click',function(){
                    var province = el.getAttribute('data-province');
                    console.debug('Map: Province ' + province + ' clicked');
                    $state.go('province.detail', {id: province});
                },true);

            });
        });

    });
