---
title: Setting Up PatternFly
author: ajolicoeur
layout: page
---
<div class="well">
  <p>
    <b>Note:</b>
    This document will use the command line. If you feel uncomfortable with this, you can install <a href="https://incident57.com/codekit/" target="top">CodeKit</a>. It includes Bower and will automatically reload and compile your LESS files without having to run anything in the command prompt.
    If you are unfamiliar with command line tools, but would like to learn more, you can watch this <a href="https://www.youtube.com/playlist?list=PLLnpHn493BHGmEYzbjWPJsnRMhvs-PSYG" target="top">video series</a> to learn the basics.
  </p>
  <p>As part of this "how to", we are using MacOS running El Capitan.</p>
</div>
<div class="row">
  <div class="col-md-12">
    <h2>Prerequisites</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>Before you can use PatternFly, you must have the following utilities installed:</p>
        <ul>
          <li><a href="https://git-scm.com/downloads" target="top">Git</a>: a free and open source distributed version control system.
            <ul>
              <li>Unfamiliar with Git? Try <a href="https://desktop.github.com/" target="top">GitHub for Windows</a> or <a href="https://desktop.github.com/" target="top">GitHub for Mac</a></li>
            </ul>
          </li>
          <li><a href="https://nodejs.org/en/" target="top">NodeJS (v4.x LTS)</a>: a software platform that is used to build server-side applications.
            <ul>
              <li>
                <kbd>$ sudo gem install node</kbd>
              </li>
            </ul>
          </li>
          <li><a href="http://gruntjs.com/getting-started" target="top">Grunt</a>: a JavaScript task runner.
            <ul>
              <li>
                <kbd>$ sudo npm install -g grunt-cli</kbd>
              </li>
            </ul>
          </li>
          <li><a href="https://bower.io/#installing-bower" target="top">Bower</a>: a package manager for the web.
            <ul>
              <li>
                <kbd>$ sudo install -g bower</kbd>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <h2>Step 1: Create A Project Directory</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6">
        <h3>Using Finder</h3>
        <ul>
          <li>Launch a new Finder window</li>
          <li>Navigate to where you want to project to live</li>
          <li>File -> New Folder (or Ctrl + Shift + N)</li>
          <li>Name the folder</li>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6">
        <h3>Using Command Line</h3>
        <p>
          <ul>
            <li>Open Terminal</li>
            <li>Navigate to where you want the folder<br />
              <kbd>
                cd "path_to/projects"
              </kbd>
            </li>
            <li>Create the directory with the project name<br/>
              <kbd>
                mkdir myProject
              </kbd>
            </li>
          </ul>
        </p>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <h2>Step 2: Use Bower To Install PatternFly</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="well">
          <b>Note:</b> We are going to use Bower to install and update the PatternFly framework, as well as our other dependencies. Verify that you are in the correct project folder before installing with bower.
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>Create your bower.json file
          <ul>
            <li>
              <kbd>$ bower init</kbd>
            </li>
          </ul>
        </p>
      </div>
      <div class="col-sm-12 col-md-12 section-img">
        <img src="{{ site.baseurl}}assets/img/get-started-myProject_bower.png" alt="">
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>Once you have created your bower.json file, you can run the install command for PatternFly. This will add the PatternFly, Bootstrap and jQuery libraries (as well as other packages) to the bower_components folder. Adding '--save' to the end adds the package to your bower.json file.
          <ul>
            <li>
              <kbd>$ bower install patternfly --save</kbd>
            </li>
          </ul>
        </p>
      </div>
      <div class="col-sm-12 col-md-12 section-img">
        <img src="{{ site.baseurl}}assets/img/get-started-bower-init.png" alt="">
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <h2>Step 3: Configure Your Project Structure</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>Your folder should now look like this:</p>
        <div class="col-sm-8 col-md-8 section-img">
          <img src="{{ site.baseurl}}assets/img/get-started-file-structure.png" alt="">
        </div>
        <div class="col-sm-4 col-md-4">
          <b>Tip:</b> Remember never to change the content of the /bower_components folder. Doing so will cause issues with the PatternFly update process.
        <div>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <h2>Step 4: Add Your Less/CSS Folders</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="well col-md-12">
          <b>Note:</b> PatternFly is based off of <a href="https://www.getbootstrap.com" target="top">Bootstrap</a> and it's use of the <a href="http://lesscss.org/" target="top">LESS</a> pre-processor.
          If you prefer to use PatternFly with <a href="http://sass-lang.com/" target="top">SASS</a>, you can find that <a href="https://github.com/patternfly/patternfly-sass" target="top">here</a>.
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>Now create two folders - one for less and one for css.</p>
        <div class="col-sm-8 col-md-8 section-img">
          <img src="{{ site.baseurl}}assets/img/get-started-add-styles.png" alt="">
        </div>
        <div class="col-sm-4 col-md-4">
          <b>Note:</b> You need to leave the css folder empty, as that is where the project will place the compiled css files.
        <div>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <h2>Step 5: Create the styles.less File</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>Open your favorite text editor and create a new file called <b>styles.less</b>.</p>
        <div class="col-sm-8 col-md-8 section-img">
          <img src="{{ site.baseurl}}assets/img/get-started-create-styles.png" alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-12">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>In order to import PatternFly into your project, you will need to add the PatternFly less files to your styles.less file.</p>
        <p>
          <pre>
            <code>// PatternFly libraries</code><br />
            <code>@import "../bower_components/patternfly/less/patternfly.less";</code><br />
            <code>@import "../bower_components/patternfly/less/patternfly-additions.less";</code>
          </pre>
        </p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>Additionally, you will need to add the icons and fonts to your styles.less file</p>
        <p>
          <pre>
            <code>// Font Awesome, PatternFly Fonts and Bootstrap Fonts</code><br />
            <code>@fa-font-path: "../bower_components/patternfly/components/font-awesome/fonts/";</code><br />
            <code>@font-path: "../bower_components/patternfly/dist/fonts";</code><br />
            <code>@icon-font-path: "../bower_components/patternfly/components/bootstrap/fonts/";</code>
          </pre>
        </p>
        <p>
          Now that your styles.less file has been configured, you can begin to write your project specific styles.
          <div class="well">
            <b>Tip:</b> By importing the patternfly.less file, you can utilize all of the mixins built into both Bootstrap and PatternFly (such as clearfix and gradient). Additionally, you can take advantage of the various Bootstrap and PatternFly variables for colors, sizes, etc. through the use of the variables.less file.
          </div>
        </p>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <h2>Step 6: Compiling Your Code</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>
          <div class="well">
            <b>Note:</b> In order to create a CSS file, you will need to compile your Less file using a code compiler. As mentioned previously, you can use <a href="https://incident57.com/codekit/" target="top">CodeKit</a> to perform this function, or you can configure <a href="http://gruntjs.com/" target="top">Grunt</a> or <a href="http://gulpjs.com/" target="top">Gulp</a>.
          </div>
        </p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>This will generate a new file called styles.css under the /css directory.</p>
        <div class="col-sm-8 col-md-8 section-img">
          <img src="{{ site.baseurl}}assets/img/get-started-compile.png" alt="">
        </div>
        <div class="col-sm-4 col-md-4">
          <b>Tip:</b> Do not edit the CSS file, as recompiling the Less file will overwrite your changes. You should only edit the Less file.
        <div>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <h2>Step 7: Setting Up Your HTML</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>
          Create a basic index.html file and add a link to your CSS and JS files to the top of the HTML head.
        </p>
          <pre>
            <code>&lt;!-- myProject Styles + PatternFly --&gt;</code><br />
            <code>&lt;link href="css/styles.css" rel="stylesheet" media="screen, print"&gt;</code>
          </pre>
        <p>
          Add the following script references to your HTML file. If you would like additional pieces, you can find them in the <a href="https://github.com/patternfly/patternfly/blob/master/QUICKSTART.md">PatternFly Quickstart Guide</a>.
        </p>
        <p>
          <pre>
            <code>&lt;!-- jQuery --&gt;</code><br />
            <code>&lt;script src="bower_components/jquery/dist/jquery.min.js"&gt;&lpngscript&gt;</code><br />
            <code>&lt;!-- Bootstrap --&gt;</code><br />
            <code>&lt;script src="bower_components/bootstrap/dist/js/bootstrap.min.js"&gt;&lt;/script&gt;</code>
          </pre>
        </p>
        <div class="col-sm-8 col-md-8 section-img">
          <img src="{{ site.baseurl}}assets/img/get-started-header.png" alt="">
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>
          Your HTML file should sit at the root of /myProject, so that it can reference the folders and files within the project correctly.
        </p>
        <div class="col-sm-8 col-md-8 section-img">
          <img src="{{ site.baseurl}}assets/img/get-started-html.png" alt="">
        </div>
        <div class="col-sm-4 col-md-4">
          <b>Tip:</b> By calling just one CSS file, you avoid making unnecessary requests.
        <div>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <h2>Step 8: Enjoy!</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>
          Now that everything is configured currently, you can check out the <a href="https://www.patternfly.org/" target="top">PatternFly</a> recommendations and specifications. Happy coding!
        </p>
      </div>
    </div>
  </div>
</div>
