'use strict';

angular.module('transandalus')
    .config(function ($stateProvider) {
        $stateProvider
            .state('menuItem', {
                parent: 'entity',
                url: '/menuItems',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'transandalus.menuItem.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/menuItem/menuItems.html',
                        controller: 'MenuItemController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('menuItem');
                        $translatePartialLoader.addPart('global');
                        return $translate.refresh();
                    }]
                }
            })
            .state('menuItem.detail', {
                parent: 'entity',
                url: '/menuItem/{id}',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'transandalus.menuItem.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/menuItem/menuItem-detail.html',
                        controller: 'MenuItemDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('menuItem');
                        return $translate.refresh();
                    }],
                    entity: ['$stateParams', 'MenuItem', function($stateParams, MenuItem) {
                        return MenuItem.get({id : $stateParams.id});
                    }]
                }
            });
    });
