---
title: Pattern Library Overview
author: dlabrecq
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

<table class="table table-striped pf-design-table">
{% for family in site.data.pattern-status %}
  <tbody class='pf-design-table__files'>
    <tr><th colspan='8'><h2>{{ family.name }}</h2></th></tr>
    <tr class='pf-design-table__row__header-files'>
      <th>Pattern</th><th>jQuery</th><th>Angular 1</th><th>Angular 2+ (ng)</th><th>React</th><th>Web component</th><th>CSS.Next</th>
    </tr>
    {% for pattern in family.patterns %}
      <tr>
        <td>{{ pattern.name }}</td>
        <td class="pf-design-table__cell pf-design-table__cell__impl">
          {% if pattern.files.site.frontmatter.impl_jquery %}
            <a href="{{pattern.files.site.frontmatter.impl_jquery}}" target="_new">
              <span class='fa fa-check pf-design-table__icon pf-design-table__icon--present'></span>
            </a>
          {% else %}
            <span class='pficon pficon-close pf-design-table__icon pf-design-table__icon--missing'></span>
          {% endif %}
        </td>
        <td class="pf-design-table__cell pf-design-table__cell__impl">
          {% if pattern.files.site.frontmatter.impl_angular %}
            <a href="{{pattern.files.site.frontmatter.impl_angular}}" target="_new">
              <span class='fa fa-check pf-design-table__icon pf-design-table__icon--present'></span>
            </a>
          {% else %}
            <span class='pficon pficon-close pf-design-table__icon pf-design-table__icon--missing'></span>
          {% endif %}
        </td>
        <td class="pf-design-table__cell pf-design-table__cell__impl">
          {% if pattern.files.site.frontmatter.impl_ng %}
            <a href="{{pattern.files.site.frontmatter.impl_ng}}" target="_new">
              <span class='fa fa-check pf-design-table__icon pf-design-table__icon--present'></span>
            </a>
          {% else %}
            <span class='pficon pficon-close pf-design-table__icon pf-design-table__icon--missing'></span>
          {% endif %}
        </td>
        <td class="pf-design-table__cell pf-design-table__cell__impl">
          {% if pattern.files.site.frontmatter.impl_react %}
            <a href="{{pattern.files.site.frontmatter.impl_react}}" target="_new">
              <span class='fa fa-check pf-design-table__icon pf-design-table__icon--present'></span>
            </a>
          {% else %}
            <span class='pficon pficon-close pf-design-table__icon pf-design-table__icon--missing'></span>
          {% endif %}
        </td>
        <td class="pf-design-table__cell pf-design-table__cell__impl">
          {% if pattern.files.site.frontmatter.impl_webcomponent %}
            <a href="{{pattern.files.site.frontmatter.impl_webcomponent}}" target="_new">
              <span class='fa fa-check pf-design-table__icon pf-design-table__icon--present'></span>
            </a>
          {% else %}
            <span class='pficon pficon-close pf-design-table__icon pf-design-table__icon--missing'></span>
          {% endif %}
        </td>
        <td class="pf-design-table__cell pf-design-table__cell__impl">
          {% if pattern.files.site.frontmatter.impl_css %}
            <a href="{{pattern.files.site.frontmatter.impl_css}}" target="_new">
              <span class='fa fa-check pf-design-table__icon pf-design-table__icon--present'></span>
            </a>
          {% else %}
            <span class='pficon pficon-close pf-design-table__icon pf-design-table__icon--missing'></span>
          {% endif %}
        </td>
      </tr>
    {% endfor %}
  </tbody>
{% endfor %}
</table>
