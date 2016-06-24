'use strict';

angular.module('transandalus')
    .config(function ($stateProvider) {
        $stateProvider
            .state('vita', {
                parent: 'site',
                url: '/visor',
                data: {
                    authorities: [],
                    pageTitle: 'transandalus.vita.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/vita/vita.html',
                        controller: 'VitaController'
                    }
                },
                resolve: {
                    mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('vita');
                        return $translate.refresh();
                    }]
                }
            });
    });
