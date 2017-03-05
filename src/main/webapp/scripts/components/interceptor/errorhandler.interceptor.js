'use strict';

angular.module('transandalus')
    .factory('errorHandlerInterceptor', function ($q, $rootScope, API_URL) {
        return {
            'responseError': function (response) {
                console.error(response);

                if (!(response.status == 401 && response.data.path.indexOf("/api/account") == 0 )){
	                $rootScope.$emit('transandalus.httpError', response);
	            }
                return $q.reject(response);
            }
        };
    });
