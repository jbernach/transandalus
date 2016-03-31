'use strict';

angular.module('transandalus')
    .service('ParseLinks', function () {
        this.parse = function (header) {
            var links = {};
            
            if (!angular.isObject()) {
                // CORS OPTIONS responses
                return links;
            }

            if (header.length == 0) {
                throw new Error("input must not be of zero length");
            }

            // Split parts by comma
            var parts = header.split(',');
            
            // Parse each part into a named link
            angular.forEach(parts, function (p) {
                var section = p.split(';');
                if (section.length != 2) {
                    throw new Error("section could not be split on ';'");
                }
                var url = section[0].replace(/<(.*)>/, '$1').trim();
                var queryString = {};
                url.replace(
                    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
                    function($0, $1, $2, $3) { queryString[$1] = $3; }
                );
                var page = queryString['page'];
                if( angular.isString(page) ) {
                    page = parseInt(page);
                }
                var name = section[1].replace(/rel="(.*)"/, '$1').trim();
                links[name] = page;
            });

            return links;
        }
    });
