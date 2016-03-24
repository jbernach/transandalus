'use strict';

angular.module('transandalus')
    .factory('Password', function ($resource, API_URL) {
        return $resource(API_URL + '/account/change_password', {}, {
        });
    });

angular.module('transandalus')
    .factory('PasswordResetInit', function ($resource, API_URL) {
        return $resource(API_URL + '/account/reset_password/init', {}, {
        })
    });

angular.module('transandalus')
    .factory('PasswordResetFinish', function ($resource, API_URL) {
        return $resource(API_URL + '/account/reset_password/finish', {}, {
        })
    });
