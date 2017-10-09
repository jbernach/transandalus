(function() {
    'use strict';

    angular
        .module('transandalus')
        .factory('Sponsor', Sponsor);

    Sponsor.$inject = ['$resource', 'API_URL'];

    function Sponsor ($resource, API_URL) {
        return $resource(API_URL + '/sponsors/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.fromDate = new Date(data.fromDate);
                    data.toDate = new Date(data.toDate);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
