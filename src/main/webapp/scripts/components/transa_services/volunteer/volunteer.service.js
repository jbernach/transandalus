(function() {
    'use strict';

    angular
        .module('transandalus')
        .factory('Volunteer', Volunteer);

    Volunteer.$inject = ['$resource', 'API_URL'];

    function Volunteer ($resource, API_URL) {
        return $resource(API_URL+'/volunteers/:id', {}, {
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
    }
})();
