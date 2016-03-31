'use strict';

angular.module('transandalus')
    .factory('AuthServerProvider', function loginService($http, localStorageService, API_URL, $$cookieReader) {
        return {
            login: function(credentials) {
                var data = 'j_username=' + encodeURIComponent(credentials.username) +
                    '&j_password=' + encodeURIComponent(credentials.password) +
                    '&remember-me=' + credentials.rememberMe + '&submit=Login';
                return $http.post(API_URL + '/authentication', data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                       ,'X-CSRF-TOKEN': $$cookieReader()['CSRF-TOKEN']
                    }
                }).success(function (response) {
                    return response;
                });
            },
            logout: function() {
                // logout from the server
                $http.post(API_URL + '/logout').success(function (response) {
                    localStorageService.clearAll();
                    // to get a new csrf token call the api
                    $http.get(API_URL +'/account');
                    return response;
                });
            },
            getToken: function () {
                var token = localStorageService.get('token');
                return token;
            },
            hasValidToken: function () {
                var token = this.getToken();
                return !!token;
            }
        };
    });
