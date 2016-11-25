/*global module,require*/
var lrSnippet = require('connect-livereload')({
  port: 35731
});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.loadNpmTasks('grunt-sync');

  // configurable paths
  var config = {
    site: '_site',
    build: '_build',
    source: 'source'
  };

  grunt.initConfig({
    clean: {
      build: '<%= config.build %>',
      site: '<%= config.site %>'
    },
    config: config,
    connect: {
      server: {
        options: {
          hostname: '0.0.0.0',
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, config.site)
            ];
          },
          port: 9002
        }
      }
    },
    run: {
      options: {
      },
      submodulesUpdate: {
        cmd: 'git',
        args: [
          'submodule',
          'update',
          '--init',
          '--remote'
        ]
      }
    },
    sync: {
      source: {
        files: [
          {
            expand: true,
            cwd: '<%= config.source %>',
            src: ['**', '!<%= config.build %>/assets/css'],
            dest: '<%= config.build %>'
          }
        ],
        verbose: true
      }
    },
    copy: {
      bower: {
        files: [
          // Copy resources from git submodules
          {
            expand: true,
            cwd: 'bower_components',
            src: ['**'],
            dest: '<%= config.build %>/components'
          },
        ]
      },
      prebuild: {
        files: [
          // Copy resources from git submodules
          {
            expand: true,
            cwd: 'submodules/patternfly-core/tests/pages/_includes/widgets',
            src: ['**'],
            dest: '<%= config.build %>/_includes/widgets'
          },
          {
            expand: true,
            cwd: 'submodules/patternfly-design/pattern-library',
            src: ['**/design/**', '!**/documents/**'],
            dest: '<%= config.build %>/_includes/patterns',
            rename: function(dest, src) {
              return dest + '/' + src.replace('/design', '');
            }
          },
          {
            expand: true,
            cwd: 'submodules/angular-patternfly/dist/docs/partials',
            src: ['**'],
            dest: '<%= config.build %>/_includes/angular-partials'
          }
        ]
      },
      design: {
        files: [
          {
            expand: true,
            cwd: 'submodules/patternfly-design/pattern-library',
            src: ['**/design/**', '!**/documents/**', '!**/*.md'],
            dest: '<%= config.build %>/pattern-library',
            rename: function(dest, src) {
              return dest + '/' + src.replace('/design', '');
            }
          }
        ]
      }
    },
    csscount: {
      source: {
        src: [
          '<%= config.build %>/assets/css/patternfly*.min.css'
        ],
        options: {
          maxSelectors: 4096
        }
      }
    },
    cssmin: {
      source: {
        files: [{
          expand: true,
          cwd: '<%= config.build %>/assets/css',
          src: ['patternfly*.css', '!*.min.css'],
          dest: '<%= config.build %>/assets/css',
          ext: '.min.css',
        }],
        options: {
          sourceMap: true
        }
      }
    },
    jekyll: {
      source: {
        options: {
          config: '<%= config.source %>/_config.yml',
          dest: '<%= config.site %>',
          src: '<%= config.build %>',
          bundleExec: 'true',
          incremental: 'true'
        }
      }
    },
    less: {
      patternflySite: {
        files: {
          '<%= config.build %>/assets/css/patternfly-site.css': '<%= config.source %>/_less/patternfly-site.less'
        },
        options: {
          paths: [
            'less/',
            'node_modules/',
            '_build/components/'
          ],
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: '<%= config.build %>/assets/css/patternfly-site.css.map',
          sourceMapURL: 'patternfly-site.css.map'
        }
      },
      patternflySiteAdjusted: {
        files: {
          '<%= config.build %>/assets/css/patternfly-adjusted.css': '<%= config.source %>/_less/patternfly-adjusted.less'
        },
        options: {
          paths: [
            'less/',
            'node_modules/',
            '_build/components/'
          ],
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: '<%= config.build %>/assets/css/patternfly-adjusted.css.map',
          sourceMapURL: 'patternfly-adjusted.css.map'
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      production: {
        files: {
          '<%= config.build %>/assets/js/patternfly-site.min.js': ['<%= config.source %>/assets/js/patternfly-site.js']
        }
      }
    },
    watch: {
      source: {
        files: ['<%= config.source %>/**/*', '!<%= config.source %>/_less/**/*', '!<%= config.source %>/assets/js/**/*'],
        tasks: ['sync:source']
      },
      less: {
        files: ['<%= config.source %>/_less/*.less'],
        tasks: ['less', 'cssmin']
      },
      js: {
        files: ['<%= config.source %>/assets/js/*.js'],
        tasks: ['uglify']
      },
      jekyll: {
        files: ['<%= config.build %>/**/*', '!<%= config.source %>/_less/**/*'],
        tasks: ['jekyll']
      },
      livereload: {
        files: ['<%= config.site %>/**/*'],
        options: {
          livereload: 35731
        }
      }
    }
  });

  grunt.registerTask('jenkins', [
    'less',
    'cssmin',
    'uglify'
  ]);

  grunt.registerTask('prebuild', [
    'run:submodulesUpdate',
    'copy:prebuild'
  ])

  grunt.registerTask('build', [
    'clean',
    'copy:bower',
    'sync:source',
    'copy:design',
    'prebuild',
    'less',
    'cssmin',
    //'csscount',
    'uglify',
    'jekyll'
  ]);

  grunt.registerTask('serve', [
    'build',
    'connect:server',
    'watch'
  ]);

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('default', ['build']);
};
