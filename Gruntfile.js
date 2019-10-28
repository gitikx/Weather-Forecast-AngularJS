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
                            },
                            {
                                expand: true,
                                cwd: 'app/',
                                src: ['index.html'],
                                dest: 'build/'
                            },
                            {
                                expand: true,
                                cwd: 'app/services/resources/*.js',
                                src: ['**'],
                                dest: 'build/resources/'
                            },
                            {
                                expand: true,
                                cwd: 'app/resources/languages/resources/*.json',
                                src: ['**'],
                                dest: 'build/languages/'
                            }

                        ]

                }
            },
            concat: {
                dist: {
                    files: {
                        'build/script.js': [
                            'node_modules/angular/angular.js',
                            'node_modules/angular-translate/dist/angular-translate.js',
                            'node_modules/angular-route/angular-route.js',
                            'node_modules/angular-cookies/angular-cookies.js',
                            'app/script.js',
                            'app/config/*.js',
                            'app/components/*.js',
                            'app/services/*.js',
                            'app/directives/*.js',
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
            },
            less: {
                development: {
                    options: {
                        paths: ['app/styles/']
                    },
                    files: {
                        'build/style.css': 'app/styles/styles.less'
                    }
                }
            },
            watch: {
                scripts: {
                    files: ['app/*/*.js', 'app/*/*.less', 'app/*/*.html'],
                    tasks: ['default'],
                    options: {
                        interrupt: true,
                    },
                },
            },
            autoprefixer: {
                options: {
                    browsers: ['last 2 versions', 'ie 8', 'ie 9']
                },
                your_target: {
                    'build/style.css': 'build/style.css'
                },
            }
        }
    );
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer')


    grunt.registerTask('default', ['clean', 'copy:dist', 'concat:dist', 'less:development', 'autoprefixer']);
};