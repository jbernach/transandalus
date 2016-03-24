'use strict';

angular.module('transandalus')
    .factory('Activate', function ($resource, API_URL) {
        return $resource(API_URL + '/activate', {}, {
            'get': { method: 'GET', params: {}, isArray: false}
        });
    });


