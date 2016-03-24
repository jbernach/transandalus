'use strict';

angular.module('transandalus')
    .factory('Menu', function ($resource, API_URL) {
        return $resource(API_URL+'/menus/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
