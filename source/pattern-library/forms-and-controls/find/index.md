---
title: Find
author: dlabrecq
layout: page-tabs-no-code
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>The find pattern is used to locate objects in a large dataset by entering a query. Unlike filter, find does not
    remove non-matching objects from view so it can be used to sift through a large dataset without losing the context
    provided by other displayed items. Find is displayed as a component of the Data Toolbar.</p>
    <p><b>Find should NOT be used in the following cases:</b></p>
    <ul>
      <li>Paging is used and find cannot work across all pages.</li>
      <li>Infinite scrolling is used and find cannot work across the entire data set.</li>
    </ul>
    <p>Jump to <a href="#example-overview-1">Find in a List View</a>, <a href="#example-overview-2">Find in a Table View</a> or <a href="#example-overview-3">Find in a Card View</a></p>
    <h2 id="example-overview-1">Find in a List View</h2>
    <div class="row">
      <div class="col-md-9 col-center">
        <div class="example-pf">
          <div class="cards-pf">
            <div class="container-fluid container-cards-pf">
              <div class="row row-cards-pf" style="padding-bottom: 20px;">
                <div class="col-md-12">
                  <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                  <img src="{{site.baseurl}}assets/img/Simple-Find-List_2015-12-01.png" alt="Simple Find List callout"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 id="example-overview-2">Find in a Table View</h2>
    <div class="row">
      <div class="col-md-9 col-center">
        <div class="example-pf">
          <div class="cards-pf">
            <div class="container-fluid container-cards-pf">
              <div class="row row-cards-pf">
                <div class="col-md-12">
                  <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                  <img src="{{site.baseurl}}assets/img/Simple-Find-Table_2015-12-011.png" alt="Simple Find Table callout"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 id="example-overview-3">Find in a Card View</h2>
    <div class="row">
      <div class="col-md-9 col-center">
        <div class="example-pf">
          <div class="cards-pf">
            <div class="container-fluid container-cards-pf">
              <div class="row row-cards-pf">
                <div class="col-md-12">
                  <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                  <img src="{{site.baseurl}}assets/img/Simple-Find-Tile_2015-12-01.png" alt="Simple Find Card callout"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Find Field</h2>
    <div class="row">
      <div class="col-md-5 col-lg-4">
        <img src="{{site.baseurl}}assets/img/simplefind_callout11.png" alt="Find Field callout"/>
      </div>
      <div class="col-md-7 col-lg-8">
        <ol>
          <li><b>Trigger Button:</b> Clicking on the button triggers the entire find tool to drop down.</li>
          <li><b>Text Entry Field:</b> The user’s query is entered here. When possible, results should be updated as the user types, or after they press the enter key.</li>
          <li><b>Position and Results Count:</b> The first number shows the position of the currently focused result. The second number shows the total number of matching objects.</li>
          <li><b>Previous and Next Result:</b> These buttons change focus to the previous or next result.</li>
          <li><b>Close:</b> Dismisses the find drop down and clears all shaded results.</li>
        </ol>
      </div>
    </div>
    <h2>Find Results</h2>
    <div class="row">
      <div class="col-md-5 col-lg-4">
        <img src="{{site.baseurl}}assets/img/simplefind_callout2.png" alt="Find Results callout"/>
      </div>
      <div class="col-md-7 col-lg-8">
        <ol>
          <li><b>Found Objects:</b> All objects that match the user’s query are shaded to differentiate them from non-matching objects.</li>
          <li><b>Focused Object:</b> The first matching object is brought into view by scrolling or paging and highlighted. When the focus is changed via the previous/next buttons, the view should change, if necessary, to display the newly focused object.</li>
        </ol>
      </div>
    </div>
  </div>
</div>
