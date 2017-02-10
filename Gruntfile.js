/*global module,require*/
var connect = require('connect'),
    connectLivereload = require('connect-livereload'),
    serveStatic = require('serve-static'),
    http = require('http'),
    open = require('open'),
    _ = require('lodash');


module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.loadNpmTasks('grunt-sync');

  var config = {
    site: '_site',
    build: '_build',
    source: 'source',
    defaultTarget: 'staging',
    baseurl: '/' + (grunt.option('baseurl') || 'patternfly-org')
  };

  grunt.initConfig({
    clean: {
      build: '<%= config.build %>',
      site: '<%= config.site %>'
    },
    config: config,
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
      },
      design: {
        files: [
          {
            expand: true,
            cwd: 'submodules/patternfly-design/pattern-library',
            src: ['**/design/**', '!**/documents/**'],
            dest: '<%= config.build %>/_includes/pattern-library'
          },
          {
            expand: true,
            cwd: 'submodules/patternfly-design/pattern-library',
            src: ['**/design/**', '!**/documents/**', '!**/*.md'],
            dest: '<%= config.build %>/pattern-library',
            rename: function(dest, src) {
              return dest + '/' + src.replace('/design', '');
            }
          },
          {
            expand: true,
            cwd: 'submodules/patternfly-design/pattern-library',
            src: ['**/site.md'],
            dest: '<%= config.build %>/pattern-library',
            rename: function(dest, src) {
              return dest + '/' + src.replace('site.md', 'index.md');
            }
          }
        ]
      },
      examples: {
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
            cwd: 'submodules/angular-patternfly/dist/docs/partials',
            src: ['**'],
            dest: '<%= config.build %>/_includes/angular-partials'
          }
        ]
      }
    },
    copy: {
      bower: {
        files: [
          // Copy resources from git submodules
          {
            expand: true,
            cwd: 'bower_components',
            // use a whitelist of file extensions we want to copy
            src: ['**/*.{html,txt,js,coffee,css,scss,less,otf,eot,svg,ttf,woff,woff2,png,jpg,gif,ico,xml,yml,yaml,map,json,md}'],
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
    jekyll: {
      options: {
        dest: '<%= config.site %>',
        config: '<%= config.source %>/_config.yml',
        src: '<%= config.build %>',
        bundleExec: 'true',
        incremental: 'true'
      },
      production: {
        incremental: 'false'
      },
      staging: {
        options: {
          raw: `baseurl: '${config.baseurl}'`
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
      design: {
        files: ['submodules/patternfly-design/**/*'],
        tasks: ['sync:design']
      },
      examples: {
        files: ['submodules/patternfly-core/tests/pages/_includes/widgets',
                'submodules/angular-patternfly/dist/docs/partials'],
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

  grunt.registerTask('cname', function (target) {
    if (target === 'production') {
      grunt.log.writeln(`Writing CNAME file to ${config.build}/CNAME`);
      grunt.file.write(`${config.build}/CNAME`, 'www.patternfly.org\n');
    }
  });

  grunt.registerTask('serve', function (target) {
    target = target || config.defaultTarget;
    grunt.task.run([
      'build:' + target,
      'connect:' + target,
      'watch'
    ]);
  });

  grunt.registerTask('build', function (target) {
    target = target || config.defaultTarget;
    grunt.task.run([
      'clean',
      'run:submodulesUpdate',
      'copy:bower',
      'cname:' + target,
      'sync:source',
      'sync:design',
      'sync:examples',
      'less',
      'cssmin',
      //'csscount',
      'uglify',
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
