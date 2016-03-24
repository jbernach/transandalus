'use strict';

angular.module('transandalus')
    .config(function ($stateProvider) {
        $stateProvider
            .state('menu', {
                parent: 'entity',
                url: '/menus',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'transandalus.menu.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/menu/menus.html',
                        controller: 'MenuController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('menu');
                        $translatePartialLoader.addPart('global');
                        return $translate.refresh();
                    }]
                }
            })
            .state('menu.detail', {
                parent: 'entity',
                url: '/menu/{id}',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'transandalus.menu.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/menu/menu-detail.html',
                        controller: 'MenuDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('menu');
                        return $translate.refresh();
                    }],
                    entity: ['$stateParams', 'Menu', function($stateParams, Menu) {
                        return Menu.get({id : $stateParams.id});
                    }]
                }
            });
    });
