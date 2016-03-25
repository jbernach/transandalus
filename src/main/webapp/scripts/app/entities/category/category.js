'use strict';

angular.module('transandalus')
    .config(function ($stateProvider) {
        $stateProvider
            .state('category', {
                parent: 'entity',
                url: '/categories',
                data: {
                    authorities: [],
                    pageTitle: 'transandalus.category.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/category/categories.html',
                        controller: 'CategoryController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('category');
                        $translatePartialLoader.addPart('global');
                        return $translate.refresh();
                    }]
                }
            })
            .state('category.detail', {
                parent: 'entity',
                url: '/category/{id}',
                data: {
                    authorities: [],
                    pageTitle: 'transandalus.category.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/category/category-detail.html',
                        controller: 'CategoryDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('category');
                        return $translate.refresh();
                    }],
                    entity: ['$stateParams', 'Category', function($stateParams, Category) {
                        return Category.get({id : $stateParams.id});
                    }]
                }
            });
    });
