---
title: Pattern Library Overview
author: amieelo
layout: page
---
<p>The PatternFly library is a collection of UI design patterns. Design patterns are recurring solutions that solve
common design problems and provide a common language for people who create user interfaces. In general, patterns do not
specify requirements, but rather, present recommended solutions to design problems. PatternFly patterns build on that
approach by additionally considering the needs of complex enterprise IT software, and the habits and motivations of its
users, in their recommendations.</p>
<p>Each pattern within this library contains suggested usages and examples that are annotated with interaction and
visual design specifications. Patterns that have gone through usability testing include a link to the PatternFly blog
where relevant findings are described in more detail. Many patterns also include the code you can use to build the
example. The library is continually being updated with new patterns or code samples for existing patterns. Stay current
with these updates by checking out “What’s New” on the <a href="https://blog.patternfly.org" target="_blank">PatternFly blog</a></p>

<!-- Textbox Filter -->
<div class="pattern-status-wrapper">
  <div class="pattern-status-search">
    <div style="width: 300px;">
      <div class="filter-pf">
        <div class="filter-pf-fields">
          <div class="input-group form-group">
            <div class="input-group-btn">
              <div class="dropdown btn-group">
                <button type="button" class="dropdown-toggle btn btn-default" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Name
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li class="selected"><a href="#">Name</a></li>
                </ul>
              </div>
            </div>
            <input id="inputText" type="text" class="form-control">
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Table HTML -->
  <table class="table table-striped table-bordered pattern-status-table" id="patternTable">
    <thead>
      <tr>
        <th>Pattern</th>
        <th>Pattern Category</th>
        <th>Patternfly Core</th>
        <th>Angular Patternfly</th>
        <th>Patternfly NG</th>
        <th>Patternfly React</th>
      </tr>
    </thead>
  </table>
</div>

<script>
$(document).ready(function() {

  var patternData = [];

  $.getJSON('https://www.patternfly.org/patternfly-design/status/pattern-status.json', function (data) {

    data.forEach(function (parentValue, index) {

        var designPatterns = parentValue.patterns.map(function(childVal, i) {

          var patternLinks;
          var patternflyCoreLink;
          var angularPatternflyLink;
          var patternflyNgLink;
          var patternflyReactLink;
      
          try {
              patternLinks = childVal.files.site.frontmatter;
              
              patternflyCoreLink = patternLinks.impl_jquery ? `<a href="${patternLinks.impl_jquery}">view</a>` : "n/a";

              angularPatternflyLink = patternLinks.impl_angular ? `<a href="${patternLinks.impl_angular}">view</a>` : "n/a";

              patternflyNgLink = patternLinks.impl_ng ? `<a href="${patternLinks.impl_ng}">view</a>` : "n/a";

              patternflyReactLink = patternLinks.impl_react ? `<a href="${patternLinks.impl_react}">view</a>` : "n/a";                   
          
          } catch (err) {
            patternflyCoreLink = "n/a";
            angularPatternflyLink = "n/a";
            patternflyNgLink = "n/a";
            patternflyReactLink = "n/a";
          }
        
          return {
            patternName: childVal.name,
            patternCategory: parentValue.name,
            patternflyCore: patternflyCoreLink,
            angularPatternfly: angularPatternflyLink,
            patternflyNg: patternflyNgLink,
            patternflyReact: patternflyReactLink
          };
        });

        patternData = patternData.concat(designPatterns);
    });

    loadDataTable(patternData);
});

// Load DataTable
function loadDataTable(designStatusData) {
    var table = $("#patternTable").DataTable({
      "paging": false,
      "searching": true,
      columns: [
        { data: "patternName" },
        { data: "patternCategory"},
        { data: "patternflyCore"},
        { data: "angularPatternfly"},
        { data: "patternflyNg"},
        { data: "patternflyReact"}
      ],
      data: designStatusData,
      dom: "t",
      language: {
      zeroRecords: "No patterns found"
       },
    });
    $('#inputText').keyup( function (){
      table.search($(this).val()).draw() 
    });
  }
});
</script>