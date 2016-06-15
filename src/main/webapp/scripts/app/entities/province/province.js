'use strict';

angular.module('transandalus')
    .config(function ($stateProvider) {
        $stateProvider
            .state('province', {
                parent: 'entity',
                abstract: true
            })
            .state('province.detail', {
                parent: 'entity',
                url: '/province/{id}',
                data: {
                    authorities: [],
                    pageTitle: 'transandalus.province.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/province/province-detail.html',
                        controller: 'ProvinceDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('province');
                        return $translate.refresh();
                    }],
                    entity: ['$stateParams', 'Province', function($stateParams, Province) {
                        return Province.get({id : $stateParams.id});
                    }]
                }
            });
    });
