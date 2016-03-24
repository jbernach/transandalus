'use strict';

angular.module('transandalus')
    .factory('Account', function Account($resource, API_URL) {
        return $resource(API_URL + '/account', {}, {
            'get': { method: 'GET', params: {}, isArray: false,
                interceptor: {
                    response: function(response) {
                        // expose response
                        return response;
                    }
                }
            }
        });
    });
