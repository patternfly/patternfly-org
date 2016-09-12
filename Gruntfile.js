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

  // configurable paths
  var projectConfig = {
    dist: 'dist',
    src: ''
  };

  try {
      projectConfig.src = require('./bower.json').appPath || projectConfig.src;
  } catch (e) {}

  grunt.initConfig({
    clean: {
      build: '<%= config.dist %>'
    },
    config: projectConfig,
    connect: {
      server: {
        options: {
          hostname: '0.0.0.0',
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, projectConfig.src),
              mountFolder(connect, projectConfig.src + 'source/_site')
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
    copy: {
      prebuild: {
        files: [
          // Copy resources from git submodules
          {
            expand: true,
            cwd: 'submodules/patternfly-core/tests/pages/_includes/widgets',
            src: ['**'],
            dest: 'source/_includes/widgets'
          },
          {
            expand: true,
            cwd: 'submodules/patternfly-design/pattern-library',
            src: ['**/design/**', '!**/documents/**'],
            dest: 'source/_includes/patterns',
            rename: function(dest, src) {
              return dest + '/' + src.replace('/design', '');
            }
          },
          {
            expand: true,
            cwd: 'submodules/angular-patternfly/dist/docs/partials',
            src: ['**'],
            dest: 'source/_includes/angular-partials'
          }
        ]
      },
      postbuild: {
        files: [
          {
            expand: true,
            cwd: 'submodules/patternfly-design/pattern-library',
            src: ['**/design/**', '!**/documents/**', '!**/*.md'],
            dest: 'source/_site/pattern-library',
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
          'source/assets/css/patternfly*.min.css'
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
          cwd: 'source/assets/css',
          src: ['patternfly*.css', '!*.min.css'],
          dest: 'source/assets/css',
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
          config: 'source/_config.yml',
          dest: 'source/_site',
          src: 'source'
        }
      }
    },
    less: {
      patternflySite: {
        files: {
          'source/assets/css/patternfly-site.css': 'source/_less/patternfly-site.less'
        },
        options: {
          paths: ['less/'],
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: 'source/assets/css/patternfly-site.css.map',
          sourceMapURL: 'patternfly-site.css.map'
        }
      },
      patternflySiteAdjusted: {
        files: {
          'source/assets/css/patternfly-adjusted.css': 'source/_less/patternfly-adjusted.less'
        },
        options: {
          paths: ['less/'],
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: 'source/assets/css/patternfly-adjusted.css.map',
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
          'source/assets/js/patternfly-site.min.js': ['source/assets/js/patternfly-site.js']
        }
      }
    },
    watch: {
      less: {
        files: ['source/_less/*.less'],
        tasks: ['less']
      },
      css: {
        files: ['source/assets/css/*.css', '!source/assets/css/*.min.css'],
        tasks: ['cssmin'/* , 'csscount' */]
      },
      js: {
        files: ['source/assets/js/*.js', '!source/assets/js/*.min.js'],
        tasks: ['uglify']
      },
      jekyll: {
        files: ['source/**/*', '!source/_less/*', '!source/_site/**/*', '!source/assets/css/*.css',],
        tasks: ['jekyll']
      },
      livereload: {
        files: ['source/_site/**/*.html', '!source/_site/bower_components/**/*.html', '!source/_site/components/**/*.html', 'source/_site/assets/css/*.css', 'source/_site/assets/js/*.js']
      },
      options: {
        livereload: 35731
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
    'prebuild',
    'less',
    'cssmin',
    //'csscount',
    'uglify',
    'jekyll',
    'copy:postbuild'
  ]);

  grunt.registerTask('server', [
    'build',
    'connect:server',
    'watch'
  ]);

  grunt.registerTask('default', ['build']);
};
