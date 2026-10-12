'use strict';

angular.module('transandalus')
    .directive('taKmlLayer', function ($window) {
        return {
            restrict: 'E',
            scope: {
                mapControl: '<',
                url: '<',
                layerVisible: '<?'
            },
            link: function (scope) {
                var parser;
                var parserMap;
                var parserUrl;
                var documents = [];
                var parserHidden = false;

                function hideDocuments(activeParser, docs) {
                    angular.forEach(docs, function (doc) {
                        activeParser.hideDocument(doc);
                    });
                }

                function clearParser() {
                    if (parser && !parserHidden) {
                        hideDocuments(parser, documents);
                    }
                    parser = null;
                    parserMap = null;
                    parserUrl = null;
                    documents = [];
                    parserHidden = false;
                }

                function getMap() {
                    var control = scope.mapControl;
                    return control && angular.isFunction(control.getGMap) ? control.getGMap() : null;
                }

                function updateVisibility() {
                    if (!parser) {
                        return;
                    }
                    if (scope.layerVisible === false && !parserHidden) {
                        hideDocuments(parser, documents);
                        parserHidden = true;
                    } else if (scope.layerVisible !== false && parserHidden) {
                        angular.forEach(documents, function (doc) {
                            parser.showDocument(doc);
                        });
                        parserHidden = false;
                    }
                }

                function updateLayer() {
                    var map = getMap();
                    var url = scope.url;

                    if (!map || !url) {
                        clearParser();
                        return;
                    }

                    if (parser && parserMap === map && parserUrl === url) {
                        updateVisibility();
                        return;
                    }

                    clearParser();

                    if (scope.layerVisible === false) {
                        return;
                    }

                    var geoXML3 = $window.geoXML3;
                    if (!geoXML3 || !angular.isFunction(geoXML3.parser)) {
                        console.error('GeoXML3 is not available to render KML:', url);
                        return;
                    }

                    parserMap = map;
                    parserUrl = url;
                    var activeParser = new geoXML3.parser({
                        map: map,
                        zoom: false,
                        afterParse: function (parsedDocuments) {
                            if (parser !== activeParser) {
                                hideDocuments(activeParser, parsedDocuments);
                                return;
                            }
                            documents = parsedDocuments;
                            parserHidden = false;
                            updateVisibility();
                        },
                        failedParse: function (doc) {
                            if (parser === activeParser) {
                                console.error('Unable to load KML:', doc.url);
                            }
                        }
                    });
                    parser = activeParser;
                    parser.parse(url);
                }

                scope.$watch(getMap, updateLayer);
                scope.$watchGroup(['url', 'layerVisible'], updateLayer);
                scope.$on('$destroy', clearParser);
            }
        };
    });
