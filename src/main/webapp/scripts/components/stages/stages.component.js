/* globals $ */
'use strict';

angular.module('transandalus').component('stages', {
    templateUrl: 'scripts/components/stages/stages.html',
    bindings: {
        province: '<',
        stages: '<'
    },
    controllerAs: 'ctrl',
    controller:  ['Stage', function(Stage){
        var ctrl = this;

        this.$onChanges = function(changes){
            //console.log("StagesComponent: On changes for..");
            //console.dir(changes);

            if(changes.province && changes.stages.currentValue === undefined){
                ctrl.loadStages();
            }
        };

        ctrl.loadStages = function(){
            //console.log("StagesComponent: Loading stages for " + ctrl.province);
            Stage.query({page: 0, size: 100, sort: ['id'], province: ctrl.province}, function(result) {
                ctrl.stages = result;
            });
        };
    }]
});
