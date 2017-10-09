(function() {
    'use strict';

    angular
        .module('transandalus')
        .factory('Traveler', Traveler);

    Traveler.$inject = ['$resource', 'API_URL'];

    function Traveler ($resource, API_URL) {
        return $resource(API_URL + '/travelers/:id', {}, {
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
