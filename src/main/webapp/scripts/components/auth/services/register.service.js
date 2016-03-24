'use strict';

angular.module('transandalus')
    .factory('Register', function ($resource, API_URL) {
        return $resource(API_URL + '/register', {}, {
        });
    });


