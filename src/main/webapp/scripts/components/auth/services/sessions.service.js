'use strict';

angular.module('transandalus')
    .factory('Sessions', function ($resource, API_URL) {
        return $resource(API_URL + '/account/sessions/:series', {}, {
            'getAll': { method: 'GET', isArray: true}
        });
    });



