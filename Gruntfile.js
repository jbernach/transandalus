// Generated on 2016-01-24 using generator-jhipster 2.27.0
'use strict';

// usemin custom step
var useminAutoprefixer = {
    name: 'autoprefixer',
    createConfig: function(context, block) {
        if(block.src.length === 0) {
            return {};
        } else {
            return require('grunt-usemin/lib/config/cssmin').createConfig(context, block) // Reuse cssmins createConfig
        }
    }
};

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        yeoman: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            dist: 'dist'
        },
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            ngconstant: {
                files: ['Gruntfile.js', 'bower.json'],
                tasks: ['ngconstant:dev']
            }
        },
        autoprefixer: {
            // src and dest is configured in a subtask called "generated" by usemin
        },
        wiredep: {
            app: {
                src: ['src/main/webapp/index.html'],
                exclude: [
                    /angular-i18n/  // localizations are loaded dynamically
                ]
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'src/main/webapp/**/*.html',
                        'src/main/webapp/**/*.json',
                        'src/main/webapp/assets/styles/**/*.css',
                        'src/main/webapp/scripts/**/*.{js,html}',
                        'src/main/webapp/assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
                        'tmp/**/*.{css,js}'
                    ]
                }
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "src/main/webapp",
                    index: "index.html"
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'src/main/webapp/scripts/app.js',
                'src/main/webapp/scripts/app/**/*.js',
                'src/main/webapp/scripts/components/**/*.js'
            ]
        },
        concat: {
            // src and dest is configured in a subtask called "generated" by usemin
        },
        uglifyjs: {
            // src and dest is configured in a subtask called "generated" by usemin
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/**/*.js',
                        '<%= yeoman.dist %>/assets/styles/**/*.css',
                        '<%= yeoman.dist %>/assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= yeoman.dist %>/assets/fonts/*'
                    ]
                }
            }
        },
        useminPrepare: {
            html: 'src/main/webapp/index.html',
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin', useminAutoprefixer] // Let cssmin concat files so it corrects relative paths to fonts and images
                        },
                            post: {}
                        }
                    }
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/**/*.html'],
            css: ['<%= yeoman.dist %>/assets/styles/**/*.css'],
            js: ['<%= yeoman.dist %>/scripts/**/*.js'],
            options: {
                assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/assets/styles', '<%= yeoman.dist %>/assets/images', '<%= yeoman.dist %>/assets/fonts'],
                patterns: {
                    js: [
                        [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the JS to reference our revved images']
                    ]
                },
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/main/webapp/assets/images',
                    src: '**/*.{jpg,jpeg}', // we don't optimize PNG files as it doesn't work on Linux. If you are not on Linux, feel free to use '**/*.{png,jpg,jpeg}'
                    dest: '<%= yeoman.dist %>/assets/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/main/webapp/assets/images',
                    src: '**/*.svg',
                    dest: '<%= yeoman.dist %>/assets/images'
                }]
            }
        },
        cssmin: {
            // src and dest is configured in a subtask called "generated" by usemin
        },
        ngtemplates:    {
            dist: {
                cwd: 'src/main/webapp',
                src: ['scripts/app/**/*.html', 'scripts/components/**/*.html',],
                dest: '.tmp/templates/templates.js',
                options: {
                    module: 'transandalus',
                    usemin: 'scripts/app.js',
                    htmlmin: '<%= htmlmin.dist.options %>'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    conservativeCollapse: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    keepClosingSlash: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            fonts: {
                files: [{
                    expand: true,
                    dot: true,
                    flatten: true,
                    cwd: 'src/main/webapp',
                    dest: '<%= yeoman.dist %>/assets/fonts',
                    src: [
                      'bower_components/bootstrap/fonts/*.*'
                    ]
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'src/main/webapp',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.html',
                        'scripts/**/*.html',
                        'assets/images/**/*.{png,gif,webp,jpg,jpeg,svg}',
                        'assets/fonts/*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/assets/images',
                    dest: '<%= yeoman.dist %>/assets/images',
                    src: [
                        'generated/*'
                    ]
                }, {
                    expand: true,
                    cwd: 'src/main/webapp',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        'robots.txt',
                        'favicon.ico',
                        'i18n/**/*.json'
                    ]
                },{
                    expand: true,
                    cwd: 'src/main/webapp/bower_components/angular-i18n/',
                    src: '*.js',
                    dest: '<%= yeoman.dist %>/bower_components/angular-i18n'
                }]
            }
        },
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
                }]
            }
        },
        buildcontrol: {
            options: {
                commit: true,
                push: false,
                connectCommits: false,
                message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
            }
        },
        ngconstant: {
            options: {
                name: 'transandalus',
                deps: false,
                wrap: '"use strict";\n// DO NOT EDIT THIS FILE, EDIT THE GRUNT TASK NGCONSTANT SETTINGS INSTEAD WHICH GENERATES THIS FILE\n{%= __ngModule %}'
            },
            dev: {
                options: {
                    dest: 'src/main/webapp/scripts/app/app.constants.js'
                },
                constants: {
                    ENV: 'dev',
                    VERSION: require('./bower.json').version || '0.0.0',
                    API_URL: 'http://127.0.0.1:7001/api'
                }
            },
            prod: {
                options: {
                    dest: '.tmp/scripts/app/app.constants.js'
                },
                constants: {
                    ENV: 'prod',
                    VERSION: require('./bower.json').version || '0.0.0',
                    API_URL: 'http://nueva.transandalus.org/admin/api'
                }
            }
        }
    });

    grunt.registerTask('serve', [
        'clean:server',
        'wiredep',
        'ngconstant:dev',
        'browserSync',
        'watch'
    ]);

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run([target ? ('serve:' + target) : 'serve']);
    });

    grunt.registerTask('test', [
        'clean:server'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'wiredep:app',
        'ngconstant:prod',
        'useminPrepare',
        'ngtemplates',
        'imagemin',
        'svgmin',
        'concat',
        'copy:fonts',
        'copy:dist',
        'ngAnnotate',
        'cssmin',
        'autoprefixer',
        'uglify',
        'rev',
        'usemin',
        'htmlmin'
    ]);

    
    grunt.registerTask('default', ['serve']);
};
