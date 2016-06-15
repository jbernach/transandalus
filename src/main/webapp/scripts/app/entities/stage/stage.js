'use strict';

angular.module('transandalus')
    .config(function ($stateProvider) {
        $stateProvider
            .state('stage', {
                parent: 'entity',
                abstract: true
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
                        $translatePartialLoader.addPart('stageType');
                        return $translate.refresh();
                    }],
                    entity: ['$stateParams', 'Stage', function($stateParams, Stage) {
                        return Stage.get({id : $stateParams.id});
                    }]
                }
            });
    });
