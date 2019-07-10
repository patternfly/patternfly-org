/*global module,require*/
var connect = require('connect'),
    connectLivereload = require('connect-livereload'),
    serveStatic = require('serve-static'),
    http = require('http'),
    open = require('open'),
    _ = require('lodash'),
    yaml = require('js-yaml'),
    packageJson = require('./package.json');


function correctBaseUrl(_baseurl) {
  if (_baseurl.length) {
    if (_baseurl.substr(0, 1) !== '/') {
      // add leading slash
      _baseurl = '/' + _baseurl;
    }
    if (_baseurl.substr(-1, 1) === '/') {
      // remove trailing slash
      _baseurl = _baseurl.slice(0, -1);
    }
  }
  return _baseurl;
}


module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev(['grunt-*', '!grunt-cli']).forEach(grunt.loadNpmTasks);

  var config = {
    site: '_site',
    build: '_build',
    source: 'source',
    defaultTarget: 'staging',
    baseurl: correctBaseUrl(grunt.option('baseurl') || '/v3')
  };

  grunt.initConfig({
    clean: {
      build: '<%= config.build %>',
      site: '<%= config.site %>'
    },
    config: config,
    sync: {
      source: {
        files: [
          {
            expand: true,
            cwd: '<%= config.source %>',
            src: ['**', '!<%= config.build %>/assets/css'],
            dest: '<%= config.build %>'
          }
        ]
      },
      design: {
        files: [
          {
            expand: true,
            cwd: 'repos/patternfly-design/pattern-library',
            src: ['**/design/**', '!**/documents/**'],
            dest: '<%= config.build %>/_includes/pattern-library'
          },
          {
            expand: true,
            cwd: 'repos/patternfly-design/pattern-library',
            src: ['**/design/**', '!**/documents/**', '!**/*.md'],
            dest: '<%= config.build %>/pattern-library',
            rename: function(dest, src) {
              return dest + '/' + src.replace('/design', '');
            }
          },
          {
            expand: true,
            cwd: 'repos/patternfly-design/pattern-library',
            src: ['**/site.md'],
            dest: '<%= config.build %>/pattern-library',
            rename: function(dest, src) {
              return dest + '/' + src.replace('site.md', 'index.md');
            }
          },
          {
            expand: true,
            cwd: 'repos/patternfly-design/styles',
            src: ['**/*.md'],
            dest: '<%= config.build %>/_includes/styles'
          },
          {
            expand: true,
            cwd: 'repos/patternfly-design/styles',
            src: ['**/!(*.md)'],
            dest: '<%= config.build %>/styles'
          },
          {
            expand: true,
            cwd: 'repos/patternfly-design/styles/icons',
            src: ['icons.json'],
            dest: '<%= config.build %>/_data'
          }
        ]
      },
      examples: {
        files: [
          // Copy resources from git repos
          {
            expand: true,
            cwd: 'repos/patternfly-core/tests/pages/_includes/widgets',
            src: ['**'],
            dest: '<%= config.build %>/_includes/widgets'
          },
          {
            expand: true,
            cwd: 'repos/angular-patternfly/dist/docs/partials',
            src: ['**'],
            dest: '<%= config.build %>/_includes/angular-partials'
          }
        ]
      },
      patternflyDist: {
        files: [
          // Copy resources from git repos
          {
            expand: true,
            cwd: 'repos/patternfly-core/dist',
            src: ['**'],
            dest: '<%= config.build %>/components/patternfly/dist'
          },
          {
            expand: true,
            cwd: 'repos/angular-patternfly/dist',
            src: ['**'],
            dest: '<%= config.build %>/components/angular-patternfly/dist'
          }
        ]
      }
    },
    copy: {
      components: {
        files: [
          {
            expand: true,
            cwd: 'node_modules',
            src: [
              '**/*'
            ],
            filter: function(filepath) { // this filter is 5x faster as the corresponding glob
              if (! grunt.file.isFile(filepath)) {
                return false;
              }
              var fileparts = filepath.split('/');
              if (fileparts[2] == 'node_modules') {
                return false;
              }
              var packages = _.keys(packageJson.dependencies);
              if (fileparts[1] === 'patternfly' || fileparts[1] === 'angular-patternfly' || packages.indexOf(fileparts[1]) < 0) {
                return false;
              }
              var extensions = ['html','txt','js','coffee','css','scss','less','otf','eot','svg','ttf','woff','woff2','png','jpg','gif','ico','xml','yml','yaml','map','json','md'];
              var extparts = fileparts[fileparts.length - 1].split('.');
              return extensions.indexOf(extparts[extparts.length-1]) >= 0;
            },
            dest: '<%= config.build %>/components'
          },
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
    http: {
      pattern_status: {
        options: {
          url: 'https://www.patternfly.org/patternfly-design/status/pattern-status.json'
        },
        dest: '_build/_data/pattern-status.json'
      }
    },
    jekyll: {
      options: {
        dest: '<%= config.site %>',
        config: '<%= config.build %>/_config.yml',
        src: '<%= config.build %>',
        bundleExec: 'true',
        incremental: 'true'
      },
      production: {
        incremental: 'false'
      },
      staging: {
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
            'node_modules/'
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
            'node_modules/'
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
        tasks: ['jekyll:staging']
      },
      design: {
        files: ['repos/patternfly-design/**/*'],
        tasks: ['sync:design']
      },
      examples: {
        files: ['repos/patternfly-core/tests/pages/_includes/widgets',
                'repos/angular-patternfly/dist/docs/partials'],
        tasks: ['sync:examples']
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

  grunt.registerTask('buildConfig', function (target) {
    if (target === 'staging') {
      var jekyllConfig = grunt.file.readYAML(`${config.source}/_config.yml`);
      jekyllConfig.baseurl = config.baseurl;
      grunt.file.write(`${config.build}/_config.yml`, yaml.safeDump(jekyllConfig));
    }
  })

  grunt.registerTask('serve', function (target) {
    target = target || config.defaultTarget;
    grunt.task.run([
      'build:' + target,
      'connect:' + target,
      'watch'
    ]);
  });

  grunt.registerTask('prebuild', function (target) {
    target = target || config.defaultTarget;
    grunt.task.run([
      'clean',
      // 'http:pattern_status',
      'copy:components',
      'sync:patternflyDist',
      'buildConfig:' + target,
      'sync:source',
      'sync:design',
      'sync:examples',
      'less',
      'cssmin',
      //'csscount',
      'uglify',
    ]);
  });

  grunt.registerTask('build', function (target) {
    target = target || config.defaultTarget;
    grunt.task.run([
      'prebuild:' + target,
      'jekyll:' + target
    ]);
  });

  grunt.registerTask('connect', function(target) {
    // Load the jekyll config
    var jekyllConfig = grunt.file.readYAML(`${config.source}/_config.yml`);
    if (target === 'staging') {
      jekyllConfig.baseurl = config.baseurl;
    }

    var host = '0.0.0.0';
    var port = 9002;
    grunt.log.writeln(`Starting static web server for folder ${config.site} on host ${host}:${port}.`);
    var url = `http://localhost:${port}${config.baseurl}/`;
    grunt.log.writeln(url);
    var app = connect();
    app.use(connectLivereload({
      port: 35731
    }));
    app.use(config.baseurl, serveStatic(config.site));
    http.createServer(app).listen(port, host);
    open(url);
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:'+target]);
  });

  grunt.registerTask('default', ['build']);
};
