---
title: Color Palette
author: Kyle
layout: page
---
<style>
    .palette-table {
        border-spacing: 0px;
        padding: 0px;
        height: 100%;
        width: 100%;
    }

    .palette-table td {
        padding:0px;
    }

    .primary-box {
        height:21em;
    }
    .primary-palette-item {
        text-align: center;
        vertical-align: bottom;
        padding: 0px;
        line-height: 3em;
        font-weight: normal;
    }
    .primary-palette-item-nine {
        text-align: center;
        vertical-align: bottom;
        padding: 0px;
        line-height: 2.325em;
    }
    .accent-box {
        height:14em;
        margin-bottom: 30px;
    }
    .accent-palette-item {
        text-align: center;
        vertical-align: bottom;
        padding: 0px;
        min-width: 75px;
        line-height: 2em;
        font-weight: normal;
    }
    .accent-palette-item-five {
        text-align: center;
        padding: 0px;
        line-height: 3em;
    }
    .palette-box {
        margin-left: 30px;
        margin-right: 30px;
    }

    .alerts-box {
        height:3em;
        margin-bottom: 30px;
    }

    .design-element-item {
        text-align: center;
        padding: 0px;
        height: 3em;
        line-height: 3em;
    }

    <!-- New Styles -->

    .primary-color-swatches {
        margin: 0px;
        overflow: hidden;
    }

    .primary-color-swatch {
      height: 30px;
      margin: 0;
    }

    .important-color-swatches {
        margin: 0px;
        overflow: hidden;
    }

    .important-color-swatch {
        float: left;
        width: 14px;
        height: 14px;
        margin-right: 1px;
        margin-top: 1px;
    }

    .color-pf-black-100 {
    background-color: #fafafa;
    }
    .color-pf-black-150 {
    background-color: #f5f5f5;
    }
    .color-pf-black-200 {
    background-color: #ededed;
    }
    .color-pf-black-300 {
    background-color: #d1d1d1;
    }
    .color-pf-black-400 {
    background-color: #bbbbbb;
    }
    .color-pf-black-500 {
    background-color: #8b8d8f;
    }
    .color-pf-black-600 {
    background-color: #72767b;
    }
    .color-pf-black-700 {
    background-color: #4d5258;
    }
    .color-pf-black-800 {
    background-color: #393f44;
    }
    .color-pf-black-900 {
    background-color: #292e34;
    }
    .color-pf-black {
    background-color: #030303;
    }
    .color-pf-blue-50 {
    background-color: #def3ff;
    }
    .color-pf-blue-100 {
    background-color: #bee1f4;
    }
    .color-pf-blue-200 {
    background-color: #7dc3e8;
    }
    .color-pf-blue-300 {
    background-color: #39a5dc;
    }
    .color-pf-blue-400 {
    background-color: #0088ce;
    }
    .color-pf-blue-500 {
    background-color: #00659c;
    }
    .color-pf-blue-600 {
    background-color: #004368;
    }
    .color-pf-blue-700 {
    background-color: #002235;
    }
    .color-pf-cyan-100 {
    background-color: #bedee1;
    }
    .color-pf-cyan-200 {
    background-color: #7dbdc3;
    }
    .color-pf-cyan-300 {
    background-color: #3a9ca6;
    }
    .color-pf-cyan-400 {
    background-color: #007a87;
    }
    .color-pf-cyan-500 {
    background-color: #005c66;
    }
    .color-pf-cyan-600 {
    background-color: #003d44;
    }
    .color-pf-cyan-700 {
    background-color: #001f22;
    }
    .color-pf-gold-100 {
    background-color: #fbeabc;
    }
    .color-pf-gold-200 {
    background-color: #f9d67a;
    }
    .color-pf-gold-300 {
    background-color: #f5c12e;
    }
    .color-pf-gold-400 {
    background-color: #f0ab00;
    }
    .color-pf-gold-500 {
    background-color: #b58100;
    }
    .color-pf-gold-600 {
    background-color: #795600;
    }
    .color-pf-gold-700 {
    background-color: #3d2c00;
    }
    .color-pf-green-100 {
    background-color: #cfe7cd;
    }
    .color-pf-green-200 {
    background-color: #9ecf99;
    }
    .color-pf-green-300 {
    background-color: #6ec664;
    }
    .color-pf-green-400 {
    background-color: #3f9c35;
    }
    .color-pf-green-500 {
    background-color: #2d7623;
    }
    .color-pf-green-600 {
    background-color: #1e4f18;
    }
    .color-pf-green-700 {
    background-color: #0f280d;
    }
    .color-pf-light-blue-100 {
    background-color: #beedf9;
    }
    .color-pf-light-blue-200 {
    background-color: #7cdbf3;
    }
    .color-pf-light-blue-300 {
    background-color: #35caed;
    }
    .color-pf-light-blue-400 {
    background-color: #00b9e4;
    }
    .color-pf-light-blue-500 {
    background-color: #008bad;
    }
    .color-pf-light-blue-600 {
    background-color: #005c73;
    }
    .color-pf-light-blue-700 {
    background-color: #002d39;
    }
    .color-pf-light-green-100 {
    background-color: #e4f5bc;
    }
    .color-pf-light-green-200 {
    background-color: #c8eb79;
    }
    .color-pf-light-green-300 {
    background-color: #ace12e;
    }
    .color-pf-light-green-400 {
    background-color: #92d400;
    }
    .color-pf-light-green-500 {
    background-color: #6ca100;
    }
    .color-pf-light-green-600 {
    background-color: #486b00;
    }
    .color-pf-light-green-700 {
    background-color: #253600;
    }
    .color-pf-orange-100 {
    background-color: #fbdebf;
    }
    .color-pf-orange-200 {
    background-color: #f7bd7f;
    }
    .color-pf-orange-300 {
    background-color: #f39d3c;
    }
    .color-pf-orange-400 {
    background-color: #ec7a08;
    }
    .color-pf-orange-500 {
    background-color: #b35c00;
    }
    .color-pf-orange-600 {
    background-color: #773d00;
    }
    .color-pf-orange-700 {
    background-color: #3b1f00;
    }
    .color-pf-purple-100 {
    background-color: #c7bfff;
    }
    .color-pf-purple-200 {
    background-color: #a18fff;
    }
    .color-pf-purple-300 {
    background-color: #8461f7;
    }
    .color-pf-purple-400 {
    background-color: #703fec;
    }
    .color-pf-purple-500 {
    background-color: #582fc0;
    }
    .color-pf-purple-600 {
    background-color: #40199a;
    }
    .color-pf-purple-700 {
    background-color: #1f0066;
    }
    .color-pf-red-100 {
    background-color: #cc0000;
    }
    .color-pf-red-200 {
    background-color: #a30000;
    }
    .color-pf-red-300 {
    background-color: #8b0000;
    }
    .color-pf-red-400 {
    background-color: #470000;
    }
    .color-pf-red-500 {
    background-color: #2c0000;
    }

    .important-box-accordion {
        padding-bottom: 20px;
        margin-bottom: 0;
    }

    .important-box {
      background-color: #f7f7f7;
      margin-top: 20px;
      margin-bottom: 50px;
      padding-top: 5px;
    }

    .important-center-container {
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .important-hr {
      background-color: #D5D5D5;
      height: 1px;
      margin-top: 15px;
      margin-bottom: 20px;
    }

    .download-button {
      padding-bottom: 15px;
    }

    .palette-circle-black {
      width: 220px;
      height: 220px;
      border-radius: 50%;
      background: #030303;
      margin-bottom: 20px;
    }

    .palette-circle-blue {
      width: 220px;
      height: 220px;
      border-radius: 50%;
      background: #0088ce;
      margin-bottom: 20px;
    }

    .palette-circle-black p {
      text-align: center;
      font-weight: 700;
      color: #ffffff;
      position: relative;
      top: 100px;
      font-size: 13px;
    }

    .palette-circle-blue p {
      text-align: center;
      font-weight: 700;
      color: #ffffff;
      position: relative;
      top: 100px;
      font-size: 13px;
    }

    .primary-text {
      margin-bottom: 25px;
    }

    .primary-color-swatch p {
      position: relative;
      top: 5px;
      font-size: 12px;
      padding-left: 15px;
    }

    .white-text {
      color: #ffffff;
    }

    .row-gray {
      background: #f8f8f8;
    }

    .white-row {
      background: #ffffff;
      padding-bottom: 40px;
    }

    .secondary-top-block {
      height: 60px;
      margin-top: 30px;
    }

    .secondary-top-block p {
      position: relative;
      top: 10px;
    }

    .red-palette {
      height: 42px;
    }

    .red-palette p {
      position: relative;
      top: 10px;
    }

    .primary-color-swatch-left-spacing-12 {
      margin-left: 12px;
    }

    .primary-color-swatch-left-spacing-18 {
      margin-left: 18px;
    }

    .col-md-offset-12-top-spacer {
      height: 20px;
    }

    .col-md-offset-12-bottom-spacer {
      height: 60px;
    }

    .important-box-row {
      margin-left: 0px;
      margin-right: 0px;
    }

    .primary-container {
      margin-left: 0px;
      margin-right: 0px;
    }

    .primary-color-swatches-margin {
      height: 20px;
    }

    .palette-donut {
      height: 230px;
      width: 230px;
      margin-top: 20px;
    }

</style>

<script>
  // Initialize Popovers
  $(document).ready(function() {
    $('[data-toggle=popover]').popovers()

    $('body').on('click', function (e) {
      if ($(e.target).data('toggle') !== 'popover' && !$(e.target).parents('.popover.in').length) {
        $('.important-color-swatches').children().popover('hide');
      }
    });
  });
</script>

<p>Our palettes are created as a system designed to reinforce application content and workflows. Bright colors are reserved for specific interactions such as reinforcing status and are used sparingly. Our palettes are simple and consolidated to allow them to be easily deployed and versatile for any situation.</p>

<div class="row important-box-row">
  <div class="col-md-12 important-box">
        <h2>Important</h2>
        <p>Use these color swatches to ensure that you are using the correct colors -- do not use the eyedropper tool to select colors. Palettes for Adobe Photoshop, Adobe Illustrator, Sketch, Inkscape, and GIMP that have the correct hex colors in swatch form, are also available to download and install. </p>
    <div class="important-center-container">
      <div class="row">
        <div class="col-md-4 download-button">
          <div class="btn-group">
            <button type="button" class="btn btn-default btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-download"></i> Download Color Swatches <span class="caret"></span>
            </button>
            <ul class="dropdown-menu dropdown-menu-pf-full">
              <li><a href="{{ site.baseurl}}/assets/file/PatternFly_Swatches_02-27-2017.aco">For Adobe Photoshop</a></li>
              <li><a href="{{ site.baseurl}}/assets/file/PatternFly_Swatches_02-27-2017.ase">For Adobe Illustrator/Indesign</a></li>
              <li><a href="{{ site.baseurl}}/assets/file/PatternFly_Palette.sketchpalette">For Sketch</a></li>
              <li><a href="{{ site.baseurl}}/assets/file/PatternFly_Palette.gpl">For Inkscape & GIMP</a></li>
            </ul>
          </div>
          <span class="last-update">Last updated: 27 Feb 2017</span>
        </div>
        <div class="col-md-8 clearfix">
        <div class="important-color-swatches">
          <!-- Black -->
          <div class="important-color-swatch color-pf-black-100" data-toggle="popover" data-container="body" data-content="pf-black-100 #fafafa"></div>
          <div class="important-color-swatch color-pf-black-150" data-toggle="popover" data-container="body" data-content="pf-black-150 #f5f5f5"></div>
          <div class="important-color-swatch color-pf-black-200" data-toggle="popover" data-container="body" data-content="pf-black-200 #ededed"></div>
          <div class="important-color-swatch color-pf-black-300" data-toggle="popover" data-container="body" data-content="pf-black-300 #d1d1d1"></div>
          <div class="important-color-swatch color-pf-black-400" data-toggle="popover" data-container="body" data-content="pf-black-400 #bbbbbb"></div>
          <div class="important-color-swatch color-pf-black-500" data-toggle="popover" data-container="body" data-content="pf-black-500 #8b8d8f"></div>
          <div class="important-color-swatch color-pf-black-600" data-toggle="popover" data-container="body" data-content="pf-black-600 #72767b"></div>
          <div class="important-color-swatch color-pf-black-700" data-toggle="popover" data-container="body" data-content="pf-black-700 #4d5258"></div>
          <div class="important-color-swatch color-pf-black-800" data-toggle="popover" data-container="body" data-content="pf-black-800 #393f44"></div>
          <div class="important-color-swatch color-pf-black-900" data-toggle="popover" data-container="body" data-content="pf-black-900 #292e34"></div>
          <div class="important-color-swatch color-pf-black" data-toggle="popover" data-container="body" data-content="pf-black #030303"></div>
          <!-- Red -->
          <div class="important-color-swatch color-pf-red-100" data-toggle="popover" data-container="body" data-content="pf-red-100 #cc0000"></div>
          <div class="important-color-swatch color-pf-red-200" data-toggle="popover" data-container="body" data-content="pf-red-200 #a30000"></div>
          <div class="important-color-swatch color-pf-red-300" data-toggle="popover" data-container="body" data-content="pf-red-300 #8b0000"></div>
          <div class="important-color-swatch color-pf-red-400" data-toggle="popover" data-container="body" data-content="pf-red-400 #470000"></div>
          <div class="important-color-swatch color-pf-red-500" data-toggle="popover" data-container="body" data-content="pf-red-500 #2c0000"></div>
          <!-- Orange -->
          <div class="important-color-swatch color-pf-orange-100" data-toggle="popover" data-container="body" data-content="pf-orange-100 #fbdebf"></div>
          <div class="important-color-swatch color-pf-orange-200" data-toggle="popover" data-container="body" data-content="pf-orange-200 #f7bd7f"></div>
          <div class="important-color-swatch color-pf-orange-300" data-toggle="popover" data-container="body" data-content="pf-orange-300 #f39d3c"></div>
          <div class="important-color-swatch color-pf-orange-400" data-toggle="popover" data-container="body" data-content="pf-orange-400 #ec7a08"></div>
          <div class="important-color-swatch color-pf-orange-500" data-toggle="popover" data-container="body" data-content="pf-orange-500 #b35c00"></div>
          <div class="important-color-swatch color-pf-orange-600" data-toggle="popover" data-container="body" data-content="pf-orange-600 #773d00"></div>
          <div class="important-color-swatch color-pf-orange-700" data-toggle="popover" data-container="body" data-content="pf-orange-700 #3b1f00"></div>
          <!-- Gold -->
          <div class="important-color-swatch color-pf-gold-100" data-toggle="popover" data-container="body" data-content="pf-gold-100 #fbeabc"></div>
          <div class="important-color-swatch color-pf-gold-200" data-toggle="popover" data-container="body" data-content="pf-gold-200 #f9d67a"></div>
          <div class="important-color-swatch color-pf-gold-300" data-toggle="popover" data-container="body" data-content="pf-gold-300 #f5c12e"></div>
          <div class="important-color-swatch color-pf-gold-400" data-toggle="popover" data-container="body" data-content="pf-gold-400 #f0ab00"></div>
          <div class="important-color-swatch color-pf-gold-500" data-toggle="popover" data-container="body" data-content="pf-gold-500 #b58100"></div>
          <div class="important-color-swatch color-pf-gold-600" data-toggle="popover" data-container="body" data-content="pf-gold-600 #795600"></div>
          <div class="important-color-swatch color-pf-gold-700" data-toggle="popover" data-container="body" data-content="pf-gold-700 #3d2c00"></div>
          <!-- Light Green -->
          <div class="important-color-swatch color-pf-light-green-100" data-toggle="popover" data-container="body" data-content="pf-light-green-100 #e4f5bc"></div>
          <div class="important-color-swatch color-pf-light-green-200" data-toggle="popover" data-container="body" data-content="pf-light-green-200 #c8eb79"></div>
          <div class="important-color-swatch color-pf-light-green-300" data-toggle="popover" data-container="body" data-content="pf-light-green-300 #ace12e"></div>
          <div class="important-color-swatch color-pf-light-green-400" data-toggle="popover" data-container="body" data-content="pf-light-green-400 #92d400"></div>
          <div class="important-color-swatch color-pf-light-green-500" data-toggle="popover" data-container="body" data-content="pf-light-green-500 #6ca100"></div>
          <div class="important-color-swatch color-pf-light-green-600" data-toggle="popover" data-container="body" data-content="pf-light-green-600 #486b00"></div>
          <div class="important-color-swatch color-pf-light-green-700" data-toggle="popover" data-container="body" data-content="pf-light-green-700 #253600"></div>
          <!-- Green -->
          <div class="important-color-swatch color-pf-green-100" data-toggle="popover" data-container="body" data-content="pf-green-100 #cfe7cd"></div>
          <div class="important-color-swatch color-pf-green-200" data-toggle="popover" data-container="body" data-content="pf-green-200 #9ecf99"></div>
          <div class="important-color-swatch color-pf-green-300" data-toggle="popover" data-container="body" data-content="pf-green-300 #6ec664"></div>
          <div class="important-color-swatch color-pf-green-400" data-toggle="popover" data-container="body" data-content="pf-green-400 #3f9c35"></div>
          <div class="important-color-swatch color-pf-green-500" data-toggle="popover" data-container="body" data-content="pf-green-500 #2d7623"></div>
          <div class="important-color-swatch color-pf-green-600" data-toggle="popover" data-container="body" data-content="pf-green-600 #1e4f18"></div>
          <div class="important-color-swatch color-pf-green-700" data-toggle="popover" data-container="body" data-content="pf-green-700 #0f280d"></div>
          <!-- Cyan -->
          <div class="important-color-swatch color-pf-cyan-100" data-toggle="popover" data-container="body" data-content="pf-cyan-100 #bedee1"></div>
          <div class="important-color-swatch color-pf-cyan-200" data-toggle="popover" data-container="body" data-content="pf-cyan-200 #7dbdc3"></div>
          <div class="important-color-swatch color-pf-cyan-300" data-toggle="popover" data-container="body" data-content="pf-cyan-300 #3a9ca6"></div>
          <div class="important-color-swatch color-pf-cyan-400" data-toggle="popover" data-container="body" data-content="pf-cyan-400 #007a87"></div>
          <div class="important-color-swatch color-pf-cyan-500" data-toggle="popover" data-container="body" data-content="pf-cyan-500 #005c66"></div>
          <div class="important-color-swatch color-pf-cyan-600" data-toggle="popover" data-container="body" data-content="pf-cyan-600 #003d44"></div>
          <div class="important-color-swatch color-pf-cyan-700" data-toggle="popover" data-container="body" data-content="pf-cyan-700 #001f22"></div>
          <!-- Light Blue -->
          <div class="important-color-swatch color-pf-light-blue-100" data-toggle="popover" data-container="body" data-content="pf-light-blue-100 #beedf9"></div>
          <div class="important-color-swatch color-pf-light-blue-200" data-toggle="popover" data-container="body" data-content="pf-light-blue-200 #7cdbf3"></div>
          <div class="important-color-swatch color-pf-light-blue-300" data-toggle="popover" data-container="body" data-content="pf-light-blue-300 #35caed"></div>
          <div class="important-color-swatch color-pf-light-blue-400" data-toggle="popover" data-container="body" data-content="pf-light-blue-400 #00b9e4"></div>
          <div class="important-color-swatch color-pf-light-blue-500" data-toggle="popover" data-container="body" data-content="pf-light-blue-500 #008bad"></div>
          <div class="important-color-swatch color-pf-light-blue-600" data-toggle="popover" data-container="body" data-content="pf-light-blue-600 #005c73"></div>
          <div class="important-color-swatch color-pf-light-blue-700" data-toggle="popover" data-container="body" data-content="pf-light-blue-700 #002d39"></div>
          <!-- Blue -->
          <div class="important-color-swatch color-pf-blue-50" data-toggle="popover" data-container="body" data-content="pf-blue-50 #def3ff"></div>
          <div class="important-color-swatch color-pf-blue-100" data-toggle="popover" data-container="body" data-content="pf-blue-100 #bee1f4"></div>
          <div class="important-color-swatch color-pf-blue-200" data-toggle="popover" data-container="body" data-content="pf-blue-200 #7dc3e8"></div>
          <div class="important-color-swatch color-pf-blue-300" data-toggle="popover" data-container="body" data-content="pf-blue-300 #39a5dc"></div>
          <div class="important-color-swatch color-pf-blue-400" data-toggle="popover" data-container="body" data-content="pf-blue-400 #0088ce"></div>
          <div class="important-color-swatch color-pf-blue-500" data-toggle="popover" data-container="body" data-content="pf-blue-500 #00659c"></div>
          <div class="important-color-swatch color-pf-blue-600" data-toggle="popover" data-container="body" data-content="pf-blue-600 #004368"></div>
          <div class="important-color-swatch color-pf-blue-700" data-toggle="popover" data-container="body" data-content="pf-blue-700 #002235"></div>
          <!-- Purple -->
          <div class="important-color-swatch color-pf-purple-100" data-toggle="popover" data-container="body" data-content="pf-purple-100 #c7bfff"></div>
          <div class="important-color-swatch color-pf-purple-200" data-toggle="popover" data-container="body" data-content="pf-purple-200 #a18fff"></div>
          <div class="important-color-swatch color-pf-purple-300" data-toggle="popover" data-container="body" data-content="pf-purple-300 #8461f7"></div>
          <div class="important-color-swatch color-pf-purple-400" data-toggle="popover" data-container="body" data-content="pf-purple-400 #703fec"></div>
          <div class="important-color-swatch color-pf-purple-500" data-toggle="popover" data-container="body" data-content="pf-purple-500 #582fc0"></div>
          <div class="important-color-swatch color-pf-purple-600" data-toggle="popover" data-container="body" data-content="pf-purple-600 #40199a"></div>
          <div class="important-color-swatch color-pf-purple-700" data-toggle="popover" data-container="body" data-content="pf-purple-700 #1f0066"></div>
        </div>
        </div>
      </div>
    </div>
    <div class="row  important-box-row">
    <div class="col-md-12 important-hr">
    </div>
    </div>
    <div class="row">
    <div class="col-md-12">
      <div class="panel-group important-box-accordion clearfix" id="accordion-example">
          <div class="important-panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion-example" href="#collapseOne" class="collapsed">
                Install Instructions
              </a>
            </h4>
          </div>
          <div id="collapseOne" class="panel-collapse collapse">
            <div class="panel-body">
              <strong>Install palette for Adobe Photoshop:</strong>
              <ol>
                <li>Download the Adobe Color file for Photoshop.</li>
                <li>In Finder, go to Applications > Adobe Photoshop CC > Presets > Color Swatches</li>
                <li>Place the .aco file into the Color Swatches folder.</li>
              </ol>
              <strong>Install palette for Adobe Illustrator:</strong>
              <ol>
                <li>Download the Adobe Color file for Illustrator.</li>
                <li>In Finder, go to Applications > Adobe Illustrator CC > Presets > en_US > Swatches</li>
                <li>Place the .ase file into the Swatches folder.</li>
              </ol>
              <strong>Install palette for Adobe InDesign:</strong>
              <ol>
                <li>Download the Adobe Color file for InDesign.</li>
                <li>In Finder, go to Applications > Adobe InDesign CC > Presets > Swatch Libraries</li>
                <li>Place the .ase file into the Swatches folder.</li>
              </ol>
              <strong>Install palette for Sketch:</strong>
              <ol>
                <li>Download the Sketch palette file.</li>
                <li>Download the <a href="https://github.com/andrewfiorillo/sketch-palettes" target="top">Sketch-Palettes</a> plugin and follow the installation instructions.</li>
                <li>Open Sketch and your desired file.</li>
                <li>In Sketch, go to Plugins > Sketch Palettes > Document Colors > Load Palette</li>
                <li>Locate the PatternFly_Palette.sketchpalette file that you downloaded.</li>
                <li>Find the palette in the Inspector sidebar > Fills > Document Colors</li>
              </ol>
              <strong>Install palette for Inkscape:</strong>
              <ol>
                <li>Download the Inkscape palette file.</li>
                <li>Open the terminal.</li>
                <li>Create the palette directory: <kbd>mkdir -p ~/.config/inkscape/palettes/</kbd></li>
                <li>Copy the palette file: <kbd>cp -v PatternFly_Palette.gpl ~/.config/inkscape/palettes/</kbd></li>
              </ol>
              <strong>Install palette for GIMP:</strong>
              <ol>
                <li>Download the GIMP palette file.</li>
                <li>Open the terminal.</li>
                <li>Create the palette directory: <kbd>mkdir -p ~/.gimp-2.8/palettes/</kbd></li>
                <li>Copy the palette file: <kbd>cp -v PatternFly_Palette.gpl ~/.gimp-2.8/palettes/</kbd></li>
              </ol>
            </div>
          </div>
      </div>
    </div>
    </div>
  </div>
</div>
<div class="white-row clearfix">
<div class="row">
  <div class="col-md-12 primary-text">
    <h2>Primary Colors</h2>
    <p>The primary colors consist of the following colors and their corresponding shades and tints. When designing and developing, use only the following primary colors for a majority of the product's interface.</p>
  </div>
</div>
<div class="row primary-container">
  <div class="col-lg-3">
    <div class="palette-circle-black">
      <p>pf-black&nbsp;&nbsp;#030303</p>
    </div>
      <p>The majority of a UI will use the grayscale palette for best contrast and visibility
Use for general UI and backgrounds.</p>
      <p><strong>Use for</strong><br>general UI and backgrounds</p>
  </div>
  <div class="col-lg-3">
    <div class="primary-color-swatches">
      <div class="primary-color-swatch color-pf-black-100">
      <p>pf-black-100 <span class="primary-color-swatch-left-spacing-12">#fafafa</span></p></div>
      <div class="primary-color-swatch color-pf-black-150">
      <p>pf-black-150 <span class="primary-color-swatch-left-spacing-12">#f5f5f5</span></p></div>
      <div class="primary-color-swatch color-pf-black-200">
      <p>pf-black-200 <span class="primary-color-swatch-left-spacing-12">#ededed</span></p></div>
      <div class="primary-color-swatch color-pf-black-300">
      <p>pf-black-300 <span class="primary-color-swatch-left-spacing-12">#d1d1d1</span></p></div>
      <div class="primary-color-swatch color-pf-black-400">
      <p>pf-black-400 <span class="primary-color-swatch-left-spacing-12">#bbbbbb</span></p></div>
      <div class="primary-color-swatch color-pf-black-500 white-text">
      <p>pf-black-500 <span class="primary-color-swatch-left-spacing-12">#8b8d8f</span></p></div>
      <div class="primary-color-swatch color-pf-black-600 white-text">
      <p>pf-black-600 <span class="primary-color-swatch-left-spacing-12">#72767b</span></p></div>
      <div class="primary-color-swatch color-pf-black-700 white-text">
      <p>pf-black-700 <span class="primary-color-swatch-left-spacing-12">#4d5258</span></p></div>
      <div class="primary-color-swatch color-pf-black-800 white-text">
      <p>pf-black-800 <span class="primary-color-swatch-left-spacing-12">#393f44</span></p></div>
      <div class="primary-color-swatch color-pf-black-900 white-text">
      <p>pf-black-900 <span class="primary-color-swatch-left-spacing-12">#292e34</span></p></div>
      <div class="primary-color-swatch color-pf-black white-text">
      <p>pf-black <span class="primary-color-swatch-left-spacing-18">#030303</span></p></div>
    </div>
    <div class="primary-color-swatches-margin">
    </div>
  </div>
  <div class="col-lg-3">
    <div class="palette-circle-blue">
      <p>pf-blue&nbsp;&nbsp;#0088ce</p>
    </div>
      <p>Tints and shades of this specific blue are used to guide users to interactive elements and states.</p>
      <p><strong>Use for</strong><br>actions and highlights</p>
  </div>
  <div class="col-lg-3">
    <div class="primary-color-swatches">
      <div class="primary-color-swatch color-pf-blue-50">
      <p>pf-blue-50 <span class="primary-color-swatch-left-spacing-18">#def3ff</span></p></div>
      <div class="primary-color-swatch color-pf-blue-100">
      <p>pf-blue-100 <span class="primary-color-swatch-left-spacing-12">#bee1f4</span></p></div>
      <div class="primary-color-swatch color-pf-blue-200">
      <p>pf-blue-200 <span class="primary-color-swatch-left-spacing-12">#7dc3e8</span></p></div>
      <div class="primary-color-swatch color-pf-blue-300">
      <p>pf-blue-300 <span class="primary-color-swatch-left-spacing-12">#39a5dc</span></p></div>
      <div class="primary-color-swatch color-pf-blue-400 white-text">
      <p>pf-blue-400 <span class="primary-color-swatch-left-spacing-12">#0088ce</span></p></div>
      <div class="primary-color-swatch color-pf-blue-500 white-text">
      <p>pf-blue-500 <span class="primary-color-swatch-left-spacing-12">#00659c</span></p></div>
      <div class="primary-color-swatch color-pf-blue-600 white-text">
      <p>pf-blue-600 <span class="primary-color-swatch-left-spacing-12">#004368</span></p></div>
      <div class="primary-color-swatch color-pf-blue-700 white-text">
      <p>pf-blue-700 <span class="primary-color-swatch-left-spacing-12">#002235</span></p></div>
    </div>
    <div class="primary-color-swatches-margin">
    </div>
  </div>
</div>
</div>
<div class="row row-gray">
  <div class="col-md-12 col-md-offset-12-top-spacer"></div>
</div>
<div class="row row-gray">
<div class="col-md-12">
<h2>Secondary Colors</h2>
  <p>Secondary colors are used as accents, to show emphasis, and to visualize notifications/alerts. Use these sparingly to not distract from the main function of the product.</p>
</div>
</div>
<div class="row row-gray">
<div class="col-lg-3">
  <div class="primary-color-swatches">
    <div class="primary-color-swatch secondary-top-block color-pf-red-200 white-text">
    <p>pf-red</p></div>
    <div class="primary-color-swatch color-pf-red-100 red-palette white-text">
    <p>pf-red-100 <span class="primary-color-swatch-left-spacing-12">#cc0000</span></p></div>
    <div class="primary-color-swatch color-pf-red-200 red-palette white-text">
    <p>pf-red-200 <span class="primary-color-swatch-left-spacing-12">#a30000</span></p></div>
    <div class="primary-color-swatch color-pf-red-300 red-palette white-text">
    <p>pf-red-300 <span class="primary-color-swatch-left-spacing-12">#8b0000</span></p></div>
    <div class="primary-color-swatch color-pf-red-400 red-palette white-text">
    <p>pf-red-400 <span class="primary-color-swatch-left-spacing-12">#470000</span></p></div>
    <div class="primary-color-swatch color-pf-red-500 red-palette white-text">
    <p>pf-red-500 <span class="primary-color-swatch-left-spacing-12">#2c0000</span></p></div>
  </div>
</div>
<div class="col-lg-3">
  <div class="primary-color-swatches">
    <div class="primary-color-swatch secondary-top-block color-pf-orange-400 white-text">
    <p>pf-orange</p></div>
    <div class="primary-color-swatch color-pf-orange-100">
    <p>pf-orange-100 <span class="primary-color-swatch-left-spacing-12">#fbdebf</span></p></div>
    <div class="primary-color-swatch color-pf-orange-200">
    <p>pf-orange-200 <span class="primary-color-swatch-left-spacing-12">#f7bd7f</span></p></div>
    <div class="primary-color-swatch color-pf-orange-300">
    <p>pf-orange-300 <span class="primary-color-swatch-left-spacing-12">#f39d3c</span></p></div>
    <div class="primary-color-swatch color-pf-orange-400 white-text">
    <p>pf-orange-400 <span class="primary-color-swatch-left-spacing-12">#ec7a08</span></p></div>
    <div class="primary-color-swatch color-pf-orange-500 white-text">
    <p>pf-orange-500 <span class="primary-color-swatch-left-spacing-12">#b35c00</span></p></div>
    <div class="primary-color-swatch color-pf-orange-600 white-text">
    <p>pf-orange-600 <span class="primary-color-swatch-left-spacing-12">#773d00</span></p></div>
    <div class="primary-color-swatch color-pf-orange-700 white-text">
    <p>pf-orange-700 <span class="primary-color-swatch-left-spacing-12">#3b1f00</span></p></div>
  </div>
</div>
<div class="col-lg-3">
  <div class="primary-color-swatches">
    <div class="primary-color-swatch secondary-top-block color-pf-gold-400">
    <p>pf-gold</p></div>
    <div class="primary-color-swatch color-pf-gold-100">
    <p>pf-gold-100 <span class="primary-color-swatch-left-spacing-12">#fbeabc</span></p></div>
    <div class="primary-color-swatch color-pf-gold-200">
    <p>pf-gold-200 <span class="primary-color-swatch-left-spacing-12">#f9d67a</span></p></div>
    <div class="primary-color-swatch color-pf-gold-300">
    <p>pf-gold-300 <span class="primary-color-swatch-left-spacing-12">#f5c12e</span></p></div>
    <div class="primary-color-swatch color-pf-gold-400">
    <p>pf-gold-400 <span class="primary-color-swatch-left-spacing-12">#f0ab00</span></p></div>
    <div class="primary-color-swatch color-pf-gold-500 white-text">
    <p>pf-gold-500 <span class="primary-color-swatch-left-spacing-12">#b58100</span></p></div>
    <div class="primary-color-swatch color-pf-gold-600 white-text">
    <p>pf-gold-600 <span class="primary-color-swatch-left-spacing-12">#795600</span></p></div>
    <div class="primary-color-swatch color-pf-gold-700 white-text">
    <p>pf-gold-700 <span class="primary-color-swatch-left-spacing-12">#3d2c00</span></p></div>
  </div>
</div>
<div class="col-lg-3">
  <div class="primary-color-swatches">
    <div class="primary-color-swatch secondary-top-block color-pf-light-green-400">
    <p>pf-light-green</p></div>
    <div class="primary-color-swatch color-pf-light-green-100">
    <p>pf-light-green-100 <span class="primary-color-swatch-left-spacing-12">#e4f5bc</span></p></div>
    <div class="primary-color-swatch color-pf-light-green-200">
    <p>pf-light-green-200 <span class="primary-color-swatch-left-spacing-12">#c8eb79</span></p></div>
    <div class="primary-color-swatch color-pf-light-green-300">
    <p>pf-light-green-300 <span class="primary-color-swatch-left-spacing-12">#ace12e</span></p></div>
    <div class="primary-color-swatch color-pf-light-green-400">
    <p>pf-light-green-400 <span class="primary-color-swatch-left-spacing-12">#92d400</span></p></div>
    <div class="primary-color-swatch color-pf-light-green-500 white-text">
    <p>pf-light-green-500 <span class="primary-color-swatch-left-spacing-12">#6ca100</span></p></div>
    <div class="primary-color-swatch color-pf-light-green-600 white-text">
    <p>pf-light-green-600 <span class="primary-color-swatch-left-spacing-12">#486b00</span></p></div>
    <div class="primary-color-swatch color-pf-light-green-700 white-text">
    <p>pf-light-green-700 <span class="primary-color-swatch-left-spacing-12">#253600</span></p></div>
  </div>
</div>
</div>
<!--SPLIT -->
<div class="row row-gray">
<div class="col-lg-3">
  <div class="primary-color-swatches">
    <div class="primary-color-swatch secondary-top-block color-pf-green-400 white-text">
    <p>pf-green</p></div>
    <div class="primary-color-swatch color-pf-green-100">
    <p>pf-green-100 <span class="primary-color-swatch-left-spacing-12">#cfe7cd</span></p></div>
    <div class="primary-color-swatch color-pf-green-200">
    <p>pf-green-200 <span class="primary-color-swatch-left-spacing-12">#9ecf99</span></p></div>
    <div class="primary-color-swatch color-pf-green-300">
    <p>pf-green-300 <span class="primary-color-swatch-left-spacing-12">#6ec664</span></p></div>
    <div class="primary-color-swatch color-pf-green-400 white-text">
    <p>pf-green-400 <span class="primary-color-swatch-left-spacing-12">#3f9c35</span></p></div>
    <div class="primary-color-swatch color-pf-green-500 white-text">
    <p>pf-green-500 <span class="primary-color-swatch-left-spacing-12">#2d7623</span></p></div>
    <div class="primary-color-swatch color-pf-green-600 white-text">
    <p>pf-green-600 <span class="primary-color-swatch-left-spacing-12">#1e4f18</span></p></div>
    <div class="primary-color-swatch color-pf-green-700 white-text">
    <p>pf-green-700 <span class="primary-color-swatch-left-spacing-12">#0f280d</span></p></div>
  </div>
</div>
<div class="col-lg-3">
  <div class="primary-color-swatches">
    <div class="primary-color-swatch secondary-top-block color-pf-cyan-400 white-text">
    <p>pf-cyan</p></div>
    <div class="primary-color-swatch color-pf-cyan-100">
    <p>pf-cyan-100 <span class="primary-color-swatch-left-spacing-12">#bedee1</span></p></div>
    <div class="primary-color-swatch color-pf-cyan-200">
    <p>pf-cyan-200 <span class="primary-color-swatch-left-spacing-12">#7dbdc3</span></p></div>
    <div class="primary-color-swatch color-pf-cyan-300">
    <p>pf-cyan-300 <span class="primary-color-swatch-left-spacing-12">#3a9ca6</span></p></div>
    <div class="primary-color-swatch color-pf-cyan-400 white-text">
    <p>pf-cyan-400 <span class="primary-color-swatch-left-spacing-12">#007a87</span></p></div>
    <div class="primary-color-swatch color-pf-cyan-500 white-text">
    <p>pf-cyan-500 <span class="primary-color-swatch-left-spacing-12">#005c66</span></p></div>
    <div class="primary-color-swatch color-pf-cyan-600 white-text">
    <p>pf-cyan-600 <span class="primary-color-swatch-left-spacing-12">#003d44</span></p></div>
    <div class="primary-color-swatch color-pf-cyan-700 white-text">
    <p>pf-cyan-700 <span class="primary-color-swatch-left-spacing-12">#001f22</span></p></div>
  </div>
</div>
<div class="col-lg-3">
  <div class="primary-color-swatches">
    <div class="primary-color-swatch secondary-top-block color-pf-light-blue-400 white-text">
    <p>pf-light-blue</p></div>
    <div class="primary-color-swatch color-pf-light-blue-100">
    <p>pf-light-blue-100 <span class="primary-color-swatch-left-spacing-12">#beedf9</span></p></div>
    <div class="primary-color-swatch color-pf-light-blue-200">
    <p>pf-light-blue-200 <span class="primary-color-swatch-left-spacing-12">#7cdbf3</span></p></div>
    <div class="primary-color-swatch color-pf-light-blue-300">
    <p>pf-light-blue-300 <span class="primary-color-swatch-left-spacing-12">#35caed</span></p></div>
    <div class="primary-color-swatch color-pf-light-blue-400 white-text">
    <p>pf-light-blue-400 <span class="primary-color-swatch-left-spacing-12">#00b9e4</span></p></div>
    <div class="primary-color-swatch color-pf-light-blue-500 white-text">
    <p>pf-light-blue-500 <span class="primary-color-swatch-left-spacing-12">#008bad</span></p></div>
    <div class="primary-color-swatch color-pf-light-blue-600 white-text">
    <p>pf-light-blue-600 <span class="primary-color-swatch-left-spacing-12">#005c73</span></p></div>
    <div class="primary-color-swatch color-pf-light-blue-700 white-text">
    <p>pf-light-blue-700 <span class="primary-color-swatch-left-spacing-12">#002d39</span></p></div>
  </div>
</div>
<div class="col-lg-3">
  <div class="primary-color-swatches">
    <div class="primary-color-swatch secondary-top-block color-pf-purple-400 white-text">
    <p>pf-purple</p></div>
    <div class="primary-color-swatch color-pf-purple-100">
    <p>pf-purple-100 <span class="primary-color-swatch-left-spacing-12">#c7bfff</span></p></div>
    <div class="primary-color-swatch color-pf-purple-200">
    <p>pf-purple-200 <span class="primary-color-swatch-left-spacing-12">#a18fff</span></p></div>
    <div class="primary-color-swatch color-pf-purple-300 white-text">
    <p>pf-purple-300 <span class="primary-color-swatch-left-spacing-12">#8461f7</span></p></div>
    <div class="primary-color-swatch color-pf-purple-400 white-text">
    <p>pf-purple-400 <span class="primary-color-swatch-left-spacing-12">#703fec</span></p></div>
    <div class="primary-color-swatch color-pf-purple-500 white-text">
    <p>pf-purple-500 <span class="primary-color-swatch-left-spacing-12">#582fc0</span></p></div>
    <div class="primary-color-swatch color-pf-purple-600 white-text">
    <p>pf-purple-600 <span class="primary-color-swatch-left-spacing-12">#40199a</span></p></div>
    <div class="primary-color-swatch color-pf-purple-700 white-text">
    <p>pf-purple-700 <span class="primary-color-swatch-left-spacing-12">#1f0066</span></p></div>
  </div>
</div>
</div>
<div class="row row-gray">
  <div class="col-md-12 col-md-offset-12-bottom-spacer"></div>
</div>
<!--Section-->
<div class="col-md-offset-12-top-spacer">
</div>
<h2>Color Palettes</h2>
<p>When choosing a palette, select colors that reinforce the brand identity of your product. Be consistent across designs to increase brand recognition with your users. Color palettes limited to a few colors help users make quick associations with forms and elements on the screen, and can make your product more usable. <strong>Click a color to see the HEX value.</strong></p>

<div class="row primary-container">
 <div class="col-md-4">
  <div class="palette-donut">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.05 197.1"><defs><style>.A-cls-1{fill:#ededed;}.A-cls-2{fill:#72767b;}.A-cls-3{fill:#393f44;}.A-cls-4{fill:#292e34;}.A-cls-5{fill:#030303;}.A-cls-6{fill:#fafafa;}.A-cls-7{fill:#39a5dc;}.A-cls-8{fill:#0088ce;}.A-cls-9{fill:#00659c;}.A-cls-10{fill:#004368;}.A-cls-11{fill:#002235;}.A-cls-12{fill:#7dc3e8;}</style></defs><title>Primary-Palette</title>
    <path class="A-cls-1" d="M160.7,62.05l22.7-13.4A98.27,98.27,0,0,0,98.6.05v26.3A72.31,72.31,0,0,1,160.7,62.05Z" transform="translate(0.05 -0.05)" data-toggle="popover" data-container="body" data-content="pf-black-200 #ededed"/>
    <path class="A-cls-2" d="M183.5,48.6L160.7,62.05a72,72,0,0,1,.1,72.7l22.9,13.3A98.37,98.37,0,0,0,197,98.65,97.21,97.21,0,0,0,183.5,48.6Z" transform="translate(0.05 -0.05)" data-toggle="popover" data-container="body" data-content="pf-black-600 #72767b"/>
    <path class="A-cls-3" d="M160.9,134.7a71.94,71.94,0,0,1-62.3,35.9v26.45a98.53,98.53,0,0,0,85.3-49.1Z" transform="translate(0.05 -0.05)" data-toggle="popover" data-container="body" data-content="pf-black-800 #393f44"/>
    <path class="A-cls-4" d="M36.2,134.7l-23,13.35a98.53,98.53,0,0,0,85.3,49.1v-26.5A72,72,0,0,1,36.2,134.7Z" transform="translate(0.05 -0.05)" data-toggle="popover" data-container="body" data-content="pf-black-900 #292e34"/>
    <path class="A-cls-5" d="M26.4,98.5a71.76,71.76,0,0,1,9.85-36.45l-22.7-13.4a98.55,98.55,0,0,0-.3,99.4l22.9-13.3A71.58,71.58,0,0,1,26.4,98.5Z" transform="translate(0.05 -0.05)" data-toggle="popover" data-container="body" data-content="pf-black #030303"/>
    <path class="A-cls-6" d="M98.6,26.4V0.05a98.43,98.43,0,0,0-84.9,48.5L36.4,62A72.17,72.17,0,0,1,98.6,26.4Z" transform="translate(0.05 -0.05)" data-toggle="popover" data-container="body" data-content="pf-black-100 #fafafa"/>
    <path class="A-cls-7" d="M160.7,62.05a71.92,71.92,0,0,0-62.1-35.5v29a43,43,0,0,1,37.1,21.2l8.4-5h0Z" transform="translate(0.05 -0.05)" data-toggle="popover" data-container="body" data-content="pf-blue-300 #39a5dc"/>
    <path class="A-cls-8" d="M170.7,98.6a71,71,0,0,0-10-36.6l-11.5,6.8h0l-13.6,8a43.17,43.17,0,0,1,.1,43.4l11.4,6.6,13.8,8A71.86,71.86,0,0,0,170.7,98.6Z" transform="translate(0.05 -0.05)" data-toggle="popover" data-container="body" data-content="pf-blue-400 #0088ce"/>
    <path class="A-cls-9" d="M149.4,128.1h0l-2.3-1.3-2.9-1.7h0l-8.4-4.9a43,43,0,0,1-37.2,21.4v29.2A72.31,72.31,0,0,0,161,134.9Z" transform="translate(0.05 -0.05)" data-toggle="popover" data-container="body" data-content="pf-blue-500 #00659c"/>
    <path class="A-cls-10" d="M61.4,120.1l-13.7,8h0l-11.5,6.7a72.1,72.1,0,0,0,62.4,35.9V141.5A42.9,42.9,0,0,1,61.4,120.1Z" transform="translate(0.05 -0.05)" data-toggle="popover" data-container="body" data-content="pf-blue-600 #004368"/>
    <path class="A-cls-11" d="M55.5,98.5a43.35,43.35,0,0,1,5.9-21.8l-8.4-5h0l-3.8-2.2-1.3-.8h0L36.4,61.9a72.19,72.19,0,0,0-.3,72.8L52.9,125h0l8.4-4.9A43.55,43.55,0,0,1,55.5,98.5Z" transform="translate(0.05 -0.05)" data-toggle="popover" data-container="body" data-content="pf-blue-700 #002235"/>
    <path class="A-cls-12" d="M36.4,62.05l12.8,7.6,12.2,7.2a42.94,42.94,0,0,1,37.2-21.3v-29A72,72,0,0,0,36.4,62.05Z" transform="translate(0.05 -0.05)" data-toggle="popover" data-container="body" data-content="pf-blue-200 #7dc3e8"/></svg>
  </div>
  <h3>Primary Palette</h3>
  <p>Primary colors make up a majority of the product's interface and are used to define structure. The majority of a UI will use the grayscale palette for best contrast and visibility.</p>
 </div>
 <div class="col-md-4">
  <div class="palette-donut">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.1 197"><defs><style>.B-cls-1{fill:#00659c;}.B-cls-2{fill:#0088ce;}.B-cls-3{fill:#7dc3e8;}.B-cls-4{fill:#582fc0;}.B-cls-5{fill:#703fec;}.B-cls-6{fill:#a18fff;}.B-cls-7{fill:#470000;}.B-cls-8{fill:#8b0000;}.B-cls-9{fill:#a30000;}.B-cls-10{fill:#b35c00;}.B-cls-11{fill:#ec7a08;}.B-cls-12{fill:#f7bd7f;}.B-cls-13{fill:#b58100;}.B-cls-14{fill:#f0ab00;}.B-cls-15{fill:#f9d67a;}.B-cls-16{fill:#6ca100;}.B-cls-17{fill:#92d400;}.B-cls-18{fill:#c8eb79;}.B-cls-19{fill:#2d7623;}.B-cls-20{fill:#3f9c35;}.B-cls-21{fill:#9ecf99;}.B-cls-22{fill:#005c66;}.B-cls-23{fill:#007a87;}.B-cls-24{fill:#7dbdc3;}.B-cls-25{fill:#008bad;}.B-cls-26{fill:#00b9e4;}.B-cls-27{fill:#7cdbf3;}</style></defs><title>Extended-Palette</title>
    <path class="B-cls-1" d="M99.2,12.7a87.94,87.94,0,0,1,37.7,8.5L141.8,11A99.3,99.3,0,0,0,74.2,4.6l2.9,10.9A89.21,89.21,0,0,1,99.2,12.7Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-blue-500 #00659c"/>
    <path class="B-cls-2" d="M77.1,15.5l6.5,24.7a62.49,62.49,0,0,1,42.4,4l11-23a86.51,86.51,0,0,0-37.7-8.5A89.41,89.41,0,0,0,77.1,15.5Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-blue-400 #0088ce"/>
    <path class="B-cls-3" d="M99.2,57.2a41.79,41.79,0,0,1,18.4,4.2l8.2-17.1a61.14,61.14,0,0,0-26.7-6,62.55,62.55,0,0,0-15.7,2l4.8,18.4A41.09,41.09,0,0,1,99.2,57.2Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-blue-200 #7dc3e8"/>
    <path class="B-cls-4" d="M141.8,11l-4.9,10.2a87.55,87.55,0,0,1,41.3,41.7l10.2-4.8A99.1,99.1,0,0,0,141.8,11Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-purple-500 #582fc0"/>
    <path class="B-cls-5" d="M155.1,73.8L178.3,63A87.55,87.55,0,0,0,137,21.3l-11,23A61.75,61.75,0,0,1,155.1,73.8Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-purple-400 #703fec"/>
    <path class="B-cls-6" d="M137.9,81.8l17.2-8.1a61.52,61.52,0,0,0-29.2-29.5l-8.2,17.1A43.66,43.66,0,0,1,137.9,81.8Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-purple-200 #a18fff"/>
    <path class="B-cls-7" d="M186.5,99.9a85.7,85.7,0,0,1-3,22.7l10.9,2.9a98.79,98.79,0,0,0,3.4-25.6,97.66,97.66,0,0,0-9.3-41.8l-10.2,4.8A88.25,88.25,0,0,1,186.5,99.9Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-red-400 #470000"/>
    <path class="B-cls-8" d="M160.9,99.9a60.54,60.54,0,0,1-2.1,16l24.7,6.6a88.82,88.82,0,0,0,3-22.7,86.41,86.41,0,0,0-8.2-37L155.1,73.6A63.17,63.17,0,0,1,160.9,99.9Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-red-300 #8b0000"/>
    <path class="B-cls-9" d="M141.9,99.9a40.74,40.74,0,0,1-1.5,11.1l18.3,4.9a60.54,60.54,0,0,0,2.1-16A61.57,61.57,0,0,0,155,73.8l-17.2,8.1A40.32,40.32,0,0,1,141.9,99.9Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-red-200 #a30000"/>
    <path class="B-cls-10" d="M148.1,172.2l6.3,9.4a99.38,99.38,0,0,0,40-56l-10.9-2.9A87.54,87.54,0,0,1,148.1,172.2Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-orange-500 #b35c00"/>
    <path class="B-cls-11" d="M133.8,151l14.3,21.2a87.45,87.45,0,0,0,35.4-49.6L158.8,116A61.93,61.93,0,0,1,133.8,151Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-orange-400 #ec7a08"/>
    <path class="B-cls-12" d="M123.2,135.3L133.8,151a61.84,61.84,0,0,0,25-35.1L140.5,111A43.36,43.36,0,0,1,123.2,135.3Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-orange-200 #f7bd7f"/>
    <path class="B-cls-13" d="M99.2,187.2c-3.1,0-6.2-.2-9.2-0.5l-1.2,11.2a89.45,89.45,0,0,0,10.4.5,97.62,97.62,0,0,0,55.2-16.9l-6.3-9.4A86.54,86.54,0,0,1,99.2,187.2Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-gold-500 #b58100"/>
    <path class="B-cls-14" d="M99.2,161.6c-2.2,0-4.4-.1-6.5-0.3L90,186.7c3,0.3,6.1.5,9.2,0.5a86.7,86.7,0,0,0,48.9-15L133.8,151A61.51,61.51,0,0,1,99.2,161.6Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-gold-400 #f0ab00"/>
    <path class="B-cls-15" d="M99.2,142.6c-1.5,0-3-.1-4.5-0.2l-2,18.9c2.1,0.2,4.3.3,6.5,0.3A61.51,61.51,0,0,0,133.8,151l-10.6-15.7A43,43,0,0,1,99.2,142.6Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-gold-200 #f9d67a"/>
    <path class="B-cls-16" d="M37.8,161.9l-8,8a98.09,98.09,0,0,0,59,28L90,186.7A86.68,86.68,0,0,1,37.8,161.9Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-light-green-500 #6ca100"/>
    <path class="B-cls-17" d="M55.8,143.7l-18,18.1a87,87,0,0,0,52.3,24.8l2.7-25.4A60.48,60.48,0,0,1,55.8,143.7Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-light-green-400 #92d400"/>
    <path class="B-cls-18" d="M69.2,130.2L55.8,143.7a61.69,61.69,0,0,0,37,17.6l2-18.9A42.61,42.61,0,0,1,69.2,130.2Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-light-green-200 #c8eb79"/>
    <path class="B-cls-19" d="M12.4,108.3L1.2,109.4a98.42,98.42,0,0,0,28.6,60.5l8-8A87,87,0,0,1,12.4,108.3Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-green-500 #2d7623"/>
    <path class="B-cls-20" d="M37.8,105.9l-25.4,2.5a86.51,86.51,0,0,0,25.4,53.5l18-18.1A61.54,61.54,0,0,1,37.8,105.9Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-green-400 #3f9c35"/>
    <path class="B-cls-21" d="M56.7,104l-18.9,1.8a61,61,0,0,0,18,37.8l13.4-13.5A41.87,41.87,0,0,1,56.7,104Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-green-200 #9ecf99"/>
    <path class="B-cls-22" d="M12,99.9a86.17,86.17,0,0,1,15.8-50l-9.2-6.5A97.61,97.61,0,0,0,.7,99.9c0,3.2.2,6.4,0.5,9.5l11.2-1.1A76.28,76.28,0,0,1,12,99.9Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-cyan-500 #005c66"/>
    <path class="B-cls-23" d="M37.5,99.9A60.84,60.84,0,0,1,48.7,64.5l-21-14.6A87,87,0,0,0,12,99.9a77.49,77.49,0,0,0,.4,8.4l25.4-2.5A56.83,56.83,0,0,1,37.5,99.9Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-cyan-400 #007a87"/>
    <path class="B-cls-24" d="M56.5,99.9a43.17,43.17,0,0,1,7.7-24.5L48.7,64.6A61.57,61.57,0,0,0,37.5,100q0,3,.3,6l18.9-1.8C56.6,102.7,56.5,101.3,56.5,99.9Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-cyan-200 #7dbdc3"/>
    <path class="B-cls-25" d="M77.1,15.5L74.2,4.6A98.72,98.72,0,0,0,18.5,43.4l9.2,6.5A87.32,87.32,0,0,1,77.1,15.5Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-light-blue-500 #008bad"/>
    <path class="B-cls-26" d="M83.6,40.2L77.1,15.5A87.09,87.09,0,0,0,27.8,49.9L48.7,64.6A62,62,0,0,1,83.6,40.2Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-light-blue-400 #00b9e4"/>
    <path class="B-cls-27" d="M48.7,64.6L64.3,75.5A42.43,42.43,0,0,1,88.4,58.7L83.6,40.3A61.39,61.39,0,0,0,48.7,64.6Z" transform="translate(-0.7 -1.4)" data-toggle="popover" data-container="body" data-content="pf-light-blue-200 #7cdbf3"/></svg>
  </div>
  <h3>Extended Palette</h3>
  <p>Extended colors are used as accents, to show emphasis, and to visualize notifications/alerts. Use these sparingly to not distract from the main function of the product.</p>
 </div>
 <div class="col-md-4">
  <div class="palette-donut">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.07 197.07"><defs><style>.C-cls-1{fill:#4d5258;}.C-cls-2{fill:#8b0000;}.C-cls-3{fill:#b35c00;}.C-cls-4{fill:#2d7623;}.C-cls-5{fill:#0088ce;}.C-cls-6{fill:#bbb;}.C-cls-7{fill:#72767b;}.C-cls-8{fill:#cc0000;}.C-cls-9{fill:#ec7a08;}.C-cls-10{fill:#3f9c35;}.C-cls-11{fill:#39a5dc;}.C-cls-12{fill:#d1d1d1;}</style></defs><title>Status-Palettes</title>
    <path class="C-cls-1" d="M164.54,66.88l22.74-13.39A98.48,98.48,0,0,0,102.37,5V31.3A72.07,72.07,0,0,1,164.54,66.88Z" transform="translate(-3.83 -4.96)" data-toggle="popover" data-container="body" data-content="pf-black-700 #4d5258"/>
    <path class="C-cls-2" d="M187.28,53.49L164.54,66.88a72.07,72.07,0,0,1,.18,72.76l22.91,13.28A98.61,98.61,0,0,0,187.28,53.49Z" transform="translate(-3.83 -4.96)" data-toggle="popover" data-container="body" data-content="pf-red-300 #8b0000"/>
    <path class="C-cls-3" d="M164.72,139.64a72.07,72.07,0,0,1-62.35,35.89V202a98.49,98.49,0,0,0,85.26-49.11Z" transform="translate(-3.83 -4.96)" data-toggle="popover" data-container="body" data-content="pf-orange-500 #b35c00"/>
    <path class="C-cls-4" d="M40,139.64L17.11,152.92A98.49,98.49,0,0,0,102.37,202v-26.5A72.07,72.07,0,0,1,40,139.64Z" transform="translate(-3.83 -4.96)" data-toggle="popover" data-container="body" data-content="pf-green-500 #2d7623"/>
    <path class="C-cls-5" d="M30.25,103.42a71.76,71.76,0,0,1,9.94-36.53L17.45,53.49a98.61,98.61,0,0,0-.35,99.43L40,139.64A71.76,71.76,0,0,1,30.25,103.42Z" transform="translate(-3.83 -4.96)" data-toggle="popover" data-container="body" data-content="pf-blue-400 #0088ce"/>
    <path class="C-cls-6" d="M102.37,31.3V5A98.48,98.48,0,0,0,17.45,53.49L40.19,66.88A72.07,72.07,0,0,1,102.37,31.3Z" transform="translate(-3.83 -4.96)" data-toggle="popover" data-container="body" data-content="pf-black-400 #bbbbbb"/>
    <path class="C-cls-7" d="M164.51,66.9a72.08,72.08,0,0,0-62.15-35.52V60.43a43,43,0,0,1,37.09,21.23l8.42-5h0Z" transform="translate(-3.83 -4.96)" data-toggle="popover" data-container="body" data-content="pf-black-600 #72767b"/>
    <path class="C-cls-8" d="M174.48,103.5a71.78,71.78,0,0,0-10-36.6L153,73.67h0l-13.56,8a43,43,0,0,1,.11,43.4l11.39,6.6,13.82,8A71.78,71.78,0,0,0,174.48,103.5Z" transform="translate(-3.83 -4.96)" data-toggle="popover" data-container="body" data-content="pf-red-100 #cc0000"/>
    <path class="C-cls-9" d="M153.22,133h0l-2.28-1.32L148,130h0l-8.44-4.89a43,43,0,0,1-37.19,21.41v29.15a72.09,72.09,0,0,0,62.4-35.95Z" transform="translate(-3.83 -4.96)" data-toggle="popover" data-container="body" data-content="pf-orange-400 #ec7a08"/>
    <path class="C-cls-10" d="M65.17,125.06L51.51,133h0L40,139.67a72.09,72.09,0,0,0,62.4,35.95V146.47A43,43,0,0,1,65.17,125.06Z" transform="translate(-3.83 -4.96)" data-toggle="popover" data-container="body" data-content="pf-green-400 #3f9c35"/>
    <path class="C-cls-11" d="M59.35,103.45a42.81,42.81,0,0,1,5.93-21.79l-8.42-5h0L53,74.45l-1.33-.78h0L40.22,66.9A72.17,72.17,0,0,0,40,139.67L56.73,130h0l8.44-4.89A42.8,42.8,0,0,1,59.35,103.45Z" transform="translate(-3.83 -4.96)" data-toggle="popover" data-container="body" data-content="pf-blue-300 #39a5dc"/>
    <path class="C-cls-12" d="M40.22,66.9L53,74.45l12.24,7.21a43,43,0,0,1,37.09-21.23V31.38A72.08,72.08,0,0,0,40.22,66.9Z" transform="translate(-3.83 -4.96)" data-toggle="popover" data-container="body" data-content="pf-black-300 #d1d1d1"/></svg>
  </div>
  <h3>Status Palette</h3>
  <p>Choose colors that correspond with the severity of the message. It should not alarm or threaten users, but instead motivate them to take action. These colors should be used sparingly.</p>
 </div>
</div>

<div class="col-md-offset-12-bottom-spacer"></div>

<div class="row row-gray">
  <div class="col-md-12 col-md-offset-12-top-spacer"></div>
</div>
<div class="row row-gray">
  <div class="col-md-6">
    <h2>Contrast Ratios</h2>
    <p>AAA requires a contrast ratio of 7:1 for normal text and 4.5:1 for large text.  All patternfly fonts must adhere to AAA standards.  More details on contrast ratios are at <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">WCAG 2.0.</a></p>
    <div class="primary-color-swatch color-pf-blue-300">
    <p>pf-blue-300 <span class="primary-color-swatch-left-spacing-12">#39a5dc</span></p></div>
    <div class="primary-color-swatch color-pf-blue-400 white-text">
    <p>pf-blue-400 <span class="primary-color-swatch-left-spacing-12">#0088ce</span></p></div>
    <div class="col-md-offset-12-top-spacer"></div>
    <p>Each color swatch on this page shows you if it’s black text accessible or white text accessible.  High color contrast helps users who are partially or completely color-blind see differences between certain colors. It creates a strong visual hierarchy and improved usability for everyone.</p>
    <h3>Resources</h3>
    <p><a href="https://www.paciellogroup.com/resources/contrastanalyser/">Color Contrast Analyser</a></p>
    <p><a href="http://www.msfw.com/Services/ContrastRatioCalculator">Accessibility Color Guide</a></p>
  </div>
  <div class="col-md-6">
    <h2>Alerts/Notifications</h2>
    <p>Color indicates a status or notification in an obvious way. An alert should be only as prominent as it is critical. It should not alarm or threaten users, but instead motivate them to take action. Choose colors that correspond with the severity of the message. Many patterns and elements suggest appropriate colors in their examples.</p>
    <div class="col-md-offset-12-top-spacer"></div>
    <!-- Toast Notifications Start-->
      <div class="toast-pf alert alert-info">
        <div class="dropdown pull-right dropdown-kebab-pf">
        <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        <span class="fa fa-ellipsis-v"></span>
        </button>
      <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#">Separated link</a></li>
      </ul>
      </div>

      <div class="pull-right toast-pf-action">
        <a href="#">Reload Server</a>
        </div>
        <span class="pficon pficon-info"></span>
        <strong>Great job!</strong> This is really working out.
      </div>

      <div class="toast-pf alert alert-success alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
        <span class="pficon pficon-close"></span>
        </button>
        <span class="pficon pficon-ok"></span>
        The server configuration changed.
      </div>

      <div class="toast-pf alert alert-warning alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
        <span class="pficon pficon-close"></span>
        </button>
      <div class="pull-right toast-pf-action">
        <a href="#">Reload Server</a>
      </div>
        <span class="pficon pficon-warning-triangle-o"></span>
        The server configuration changed.
      </div>

      <div class="toast-pf alert alert-danger">
        <span class="pficon pficon-error-circle-o"></span>
        Failed to add <strong>server_abc</strong>.
      </div>
      <!-- Toast Notifications End-->
</div>
</div>
<div class="row row-gray">
  <div class="col-md-12 col-md-offset-12-top-spacer"></div>
</div>
