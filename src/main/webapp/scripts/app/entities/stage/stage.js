'use strict';

angular.module('transandalus')
    .config(function ($stateProvider) {
        $stateProvider
            .state('stage', {
                parent: 'entity',
                url: '/stages',
                data: {
                    authorities: [],
                    pageTitle: 'transandalus.stage.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/stage/stages.html',
                        controller: 'StageController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('stage');
                        $translatePartialLoader.addPart('difficulty');
                        $translatePartialLoader.addPart('global');
                        return $translate.refresh();
                    }]
                }
            })
            .state('stage.detail', {
                parent: 'entity',
                url: '/stage/{id}',
                data: {
                    authorities: [],
                    pageTitle: 'transandalus.stage.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/stage/stage-detail.html',
                        controller: 'StageDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('stage');
                        $translatePartialLoader.addPart('difficulty');
                        $translatePartialLoader.addPart('difficulty');
                        return $translate.refresh();
                    }],
                    entity: ['$stateParams', 'Stage', function($stateParams, Stage) {
                        return Stage.get({id : $stateParams.id});
                    }]
                }
            });
    });
