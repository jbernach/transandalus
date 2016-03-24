'use strict';

angular.module('transandalus')
    .factory('Article', function ($resource, API_URL) {
        return $resource(API_URL+'/articles/:id', {}, {
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
