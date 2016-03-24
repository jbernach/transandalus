'use strict';

angular.module('transandalus')
    .factory('errorHandlerInterceptor', function ($q, $rootScope) {
        return {
            'responseError': function (response) {
                if (!(response.status == 401 && response.data.path.indexOf("/admin/api/account") == 0 )){
	                $rootScope.$emit('transandalus.httpError', response);
	            }
                return $q.reject(response);
            }
        };
    });