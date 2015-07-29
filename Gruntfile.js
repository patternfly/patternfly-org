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
              mountFolder(connect, projectConfig.src + 'docs/_site')
            ];
          },
          port: 9002
        }
      }
    },
    csscount: {
      docs: {
        src: [
          'docs/assets/css/patternfly*.min.css'
        ],
        options: {
          maxSelectors: 4096
        }
      }
    },
    cssmin: {
      docs: {
        files: [{
          expand: true,
          cwd: 'docs/assets/css',
          src: ['patternfly*.css', '!*.min.css'],
          dest: 'docs/assets/css',
          ext: '.min.css',
        }],
        options: {
          sourceMap: true
        }
      }
    },
    jekyll: {
      docs: {
        options: {
          config: 'docs/_config.yml',
          dest: 'docs/_site',
          src: 'docs'
        }
      }
    },
    less: {
      patternflySite: {
        files: {
          'docs/assets/css/patternfly-site.css': 'docs/_less/patternfly-site.less'
        },
        options: {
          paths: ['less/'],
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: 'docs/assets/css/patternfly-site.css.map',
          sourceMapURL: 'patternfly-site.css.map'
        }
      },
      patternflySiteAdjusted: {
        files: {
          'docs/assets/css/patternfly-adjusted.css': 'docs/_less/patternfly-adjusted.less'
        },
        options: {
          paths: ['less/'],
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: 'docs/assets/css/patternfly-adjusted.css.map',
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
          'docs/assets/js/patternfly-site.min.js': ['docs/assets/js/patternfly-site.js']
        }
      }
    },
    watch: {
      less: {
        files: ['docs/_less/*.less'],
        tasks: ['less']
      },
      css: {
        files: ['docs/assets/css/*.css', '!docs/assets/css/*.min.css'],
        tasks: ['cssmin', 'csscount']
      },
      js: {
        files: ['docs/assets/js/*.js', '!docs/assets/js/*.min.js'],
        tasks: ['uglify']
      },
      jekyll: {
        files: ['docs/**/*', '!docs/_less/*', '!docs/_site/**/*', '!docs/assets/**/*'],
        tasks: ['jekyll']
      },
      livereload: {
        files: ['docs/_site/**/*.html', 'docs/_site/assets/css/*.css', 'docs/_site/assets/js/*.js']
      },
      options: {
        livereload: 35731
      }
    }
  });

  grunt.registerTask('build', [
    'less',
    'cssmin',
    'csscount',
    'uglify',
    'jekyll'
  ]);

  grunt.registerTask('server', [
    'connect:server',
    'watch'
  ]);

  grunt.registerTask('default', ['build']);
};
