module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            copy: {
                dist: {
                    files:
                        [{
                            expand: true,
                            cwd: 'app/views/',
                            src: ['*.html'],
                            dest: 'build/views/'
                        },
                            {
                                expand: true,
                                cwd: 'app/resources/',
                                src: ['**'],
                                dest: 'build/resources/'
                            }, {
                            expand: true,
                            cwd: 'app/',
                            src: ['index.html'],
                            dest: 'build/'
                        }, {
                            expand: true,
                            cwd: 'app/services/resources/*.js',
                            src: ['**'],
                            dest: 'build/resources/'
                        }

                        ]

                }
            },
            concat: {
                dist: {
                    files: {
                        'build/style.less': 'app/styles/*.less',
                        'build/script.js': [
                            'node_modules/angular/angular.js',
                            'node_modules/angular-route/angular-route.js',
                            'node_modules/less/dist/less.js',
                            'app/script.js',
                            'app/config/routeProvider.js',
                            'app/components/*/*.js',
                            'app/services/*.js',
                            'app/services/resources/*.js'
                        ]
                    }
                }
            },
            clean: {
                build: {
                    src: ['build/']
                }
            },
            connect: {
                server: {
                    options: {
                        port: 8000,
                        keepAlive: true,
                        base: {
                            path: 'build/',
                            options: {
                                index: 'index.html',
                                maxAge: 300000
                            }
                        }
                    }
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'copy:dist', 'concat:dist']);
};
