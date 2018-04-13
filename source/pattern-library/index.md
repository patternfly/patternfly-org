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


<!-- Toolbar -->
<div class="pattern-status-wrapper">
  <div class="row toolbar-pf table-view-pf-toolbar">
    <div class="col-sm-12">
      <form class="toolbar-pf-actions">
        <div class="form-group toolbar-pf-filter">
          <label class="sr-only" for="filter">Name</label>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Name <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <li><a href="#" id="nameFilter">Name</a></li>
                <li><a href="#" id="categoryFilter">Category</a></li>
              </ul>
            </div>
            <input type="text" class="form-control" placeholder="Filter By Pattern Name..." autocomplete="off" id="inputText">
          </div>
        </div>
      </form>
      <div class="row toolbar-pf-results">
        <div class="col-sm-9">
          <div class="hidden">
            <h5>0 Results</h5>
            <p>Active filters:</p>
            <ul class="list-inline"></ul>
            <p><a href="#">Clear All Filters</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Table HTML -->
  <table class="table table-striped table-bordered" id="patternTable">
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

            var patternOverview;
            var patternLinks;
            var patternflyCoreLink;
            var angularPatternflyLink;
            var patternflyNgLink;
            var patternflyReactLink;
        
            try {

                patternOverview = childVal ? `<a href="${parentValue.name}/${childVal.name}/">${childVal.name}</a>` : childVal.name || "pattern unavailable"; 

                patternLinks = childVal.files.site.frontmatter;
                
                patternflyCoreLink = patternLinks.impl_jquery ? `<a href="${patternLinks.impl_jquery}">view</a>` : "n/a";

                angularPatternflyLink = patternLinks.impl_angular ? `<a href="${patternLinks.impl_angular}">view</a>` : "n/a";

                patternflyNgLink = patternLinks.impl_ng ? `<a href="${patternLinks.impl_ng}">view</a>` : "n/a";

                patternflyReactLink = patternLinks.impl_react ? `<a href="${patternLinks.impl_react}">view</a>` : "n/a";                   
            
            } catch (err) {
              patternOverview = childVal.name || "pattern unavailable";
              patternflyCoreLink = "n/a";
              angularPatternflyLink = "n/a";
              patternflyNgLink = "n/a";
              patternflyReactLink = "n/a";
            }
          
            return {
              patternName: patternOverview,
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

  function loadDataTable(designStatusData) {
    var table = $("#patternTable").DataTable({

      columns: [
        { data: "patternName" },
        { data: "patternCategory"},
        { data: "patternflyCore"},
        { data: "angularPatternfly"},
        { data: "patternflyNg"},
        { data: "patternflyReact"}
      ],
      "paging": false,
      data: designStatusData,
      dom: "t",
      language: {
        zeroRecords: "No records found"
      },
      pfConfig: {
        filterCaseInsensitive: true,
        filterCols: [
          {
            default: true,
            optionSelector: "#nameFilter",
            placeholder: "Filter By Pattern..."
          }, {
            optionSelector: "#categoryFilter",
            placeholder: "Filter By Category..."
          }
        ]
      }
    });
  }
});
</script>