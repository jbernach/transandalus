/* globals $ */
'use strict';

angular.module('transandalus')
    .directive('taRouteOutline', function($state, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/route/route.html',
            link: function (scope, element, attrs) {
                $timeout(function () {
                    angular.element(element).ready(function(){
                        document.querySelectorAll('.province-outline').forEach(function(el){
                            el.addEventListener('click',function(){
                                var province = el.getAttribute('data-province');
                                console.debug('Map: Province ' + province + ' clicked');
                                $state.go('province.detail', {id: province});
                            },true);
                        });
                    });
                });
            }
        };
    });
