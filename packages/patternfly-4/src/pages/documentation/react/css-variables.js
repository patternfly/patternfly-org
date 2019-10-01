import React from 'react'
import SideNav from '../../../components/_react/Documentation/SideNav';
import Tokens from '../../../components/css-variables';
import Layout from '../../../components/layout';
import SEO from '../../../components/seo';
import Section from '../../../components/section';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';
import '../../../templates/template.scss';

const ReactTokens = ({ location }) => (
  <Layout sideNav={<SideNav />}>
    <SEO title="Global CSS Variables" />
    <PageSection className="markdown-body" variant={PageSectionVariants.light}>
         <div className="pf-c-content">
            <h1>About CSS variables</h1>
            <p>The CSS variable system is a two-layer theming system where global variables inform component variables.</p>

            <h3>Global variables</h3>
            <p>Global variables define and enforce global style elements (like values for color, spacing, and font size) across the entire system.</p>

            <p>Global variables follow this formula:</p>
            <code>--pf-global--concept--PropertyCamelCase--modifier--state</code>

            <p>Where...</p>
            <ul>
              <li>A <code>concept</code> is something like a <code>spacer</code> or <code>main-title</code>.</li>
              <li>A <code>PropertyCamelCase</code> is something like <code>BackgroundColor</code> or <code>FontSize</code>.</li>
              <li>A <code>modifier</code> is something like <code>sm</code> or <code>lg</code>.</li>
              <li>A <code>state</code> is something like <code>hover</code> or <code>expanded</code>.</li>
            </ul>

            <h3>Component variables</h3>
            <p>Component variables are used to define custom properties at the component-level. Component variables are always defined by global variables.</p>

            <p>Component variables follow this formula:</p>
            <code>--pf-c-block__element--modifier--state--breakpoint--pseudo-element--PropertyCamelCase</code>

            <p>Where...</p>
            <ul>
              <li><code>pf-c-block</code> refers to the block, usually the component or layout name, like <code>pf-c-alert</code>.</li>
              <li><code>__element</code> refers to the element inside of the block, like <code>__title</code>.</li>
              <li><code>modifier</code> is prefixed with <code>-m</code> and refers to a modifier class such as <code>.pf-m-danger</code>.</li>
              <li><code>state</code> is something like <code>hover</code> or <code>active</code>.</li>
              <li><code>breakpoint</code> is a media query breakpoint such as <code>sm</code> for <code>$pf-global--breakpoint--xs</code>.</li>
              <li><code>pseudo-element</code> is either <code>before</code> or <code>after</code>.</li>
            </ul>

            <h3>Using the variable system</h3>
            <p>PatternFly 4 styles provide a default starting point. You can use the variable system to make adjustments to that default styling. When you change one or more elements, you should package those values into a new SCSS stylesheet to replace the default styling.</p>
          </div>
     </PageSection>
    <PageSection variant={PageSectionVariants.light}>
      <Section title="Global CSS variables" size="3xl" headingLevel="h1">
        <Tokens
          sideNav={<SideNav />}
          variables="pf-global"
          exact={location && location.state && location.state.exact}
          filter={location && location.state && location.state.filter} />
      </Section>
    </PageSection>
  </Layout>
)

export default ReactTokens;
