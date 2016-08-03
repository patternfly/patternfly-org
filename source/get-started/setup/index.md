---
title: Setting Up PatternFly
author: ajolicoeur
layout: page
---
<div class="well">
  <p>
    <b>Note:</b>
    This document will use the command line. If you feel uncomfortable with this, you can install <a href="https://incident57.com/codekit/" target="top">CodeKit</a>. It includes Bower and will automatically reload and compile your files without having to run anything in the command prompt.
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
          <b>Note:</b> We are going to use Bower to install and update the PatternFly framework. Verify that you are in the correct project folder before installing PatternFly with Bower.
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
      <div class="col-sm-8 col-md-8 section-img">
        <img src="{{ site.baseurl}}assets/img/get-started-myProject_bower.png" alt="">
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>Once you have created your bower.json file, you can run the install command for PatternFly. This will add the PatternFly library to the bower_components folder. Adding '--save' to the end adds the package to your bower.json file.
          <ul>
            <li>
              <kbd>$ bower install patternfly --save</kbd>
            </li>
          </ul>
        </p>
      </div>
      <div class="col-sm-8 col-md-8 section-img">
        <img src="{{ site.baseurl}}assets/img/get-started-bower-init.png" alt="">
      </div>
      <div class="col-sm-4 col-md-4">
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>Your folder should now look like this:</p>
        <div class="col-sm-8 col-md-8 section-img">
          <img src="{{ site.baseurl}}assets/img/get-started-file-structure.png" alt="">
        </div>
        <div class="col-sm-4 col-md-4">
          <b>Tip:</b> Remember never to manually change the contents of the /bower_components folder. Doing so will cause issues with the PatternFly update process.
        <div>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <h2>Step 3: Set Up Your HTML</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>
          Your HTML file should sit at the root of myProject, so that it can reference the folders and files within the project correctly.
        </p>
        <div class="col-sm-8 col-md-8 section-img">
          <img src="{{ site.baseurl}}assets/img/get-started-html.png" alt="">
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>
          Create a basic index.html file and add a link to your CSS and JS files to the top of the HTML head.
        </p>
          <pre>
            <code>&lt;!-- PatternFly Styles --&gt;</code>
            <code>&lt;link href="bower_components/patternfly/dist/css/patternfly.min.css" rel="stylesheet" media="screen, print"&gt;</code>
            <code>&lt;link href="bower_components/patternfly/dist/css/patternfly-additions.min.css" rel="stylesheet" media="screen, print"&gt;</code>
          </pre>
        <p>
          Add the following script references to your HTML file. If you would like additional pieces, you can find them in the <a href="https://github.com/patternfly/patternfly/blob/master/QUICKSTART.md">PatternFly Quickstart Guide</a>.
        </p>
        <p>
          <pre>
            <code>&lt;!-- jQuery --&gt;</code>
            <code>&lt;script src="bower_components/jquery/dist/jquery.min.js"&gt;&lt;/script&gt;</code>
            <code>&lt;!-- Bootstrap --&gt;</code>
            <code>&lt;script src="bower_components/bootstrap/dist/js/bootstrap.min.js"&gt;&lt;/script&gt;</code>
            <code>&lt;!-- PatternFly --&gt;</code>
            <code>&lt;script src="bower_components/patternfly/dist/js/patternfly.min.js"&gt;&lt;/script&gt;</code>
          </pre>
        </p>
        <div class="col-sm-8 col-md-8 section-img">
          <img src="{{ site.baseurl}}assets/img/get-started-header.png" alt="">
        </div>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <h2>Step 4: Enjoy!</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>
          Now that you have everything configured, enjoy exploring and using PatternFly. For any questions, reach out to us on our <a href="mailto:patternfly@redhat.com">mailing list</a>, <a href="https://gitter.im/patternfly/patternfly?utm_source=share-link&utm_medium=link&utm_campaign=share-link" target="top">Gitter</a> or on <a href="https://webchat.freenode.net/" target="top">Freenode</a> at #patternfly.
        </p>
      </div>
    </div>
  </div>
</div>
