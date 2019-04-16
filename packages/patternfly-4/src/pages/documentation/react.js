import React from 'react'
import Layout from '../../components/layout';
import SideNav from '../../components/_react/Documentation/SideNav';
import SEO from '../../components/seo';
import { Title, PageSection, PageSectionVariants } from '@patternfly/react-core';
import { StyleSheet, css } from '@patternfly/react-styles';
import packageJsonReactCore from '@patternfly/src-patternfly-react/packages/patternfly-4/react-core/package.json';
import packageJsonReactCharts from '@patternfly/src-patternfly-react/packages/patternfly-4/react-charts/package.json';
import packageJsonReactTable from '@patternfly/src-patternfly-react/packages/patternfly-4/react-table/package.json';
import {
  global_Color_light_100 as heroTextColor
} from '@patternfly/react-tokens';

const styles = StyleSheet.create({
  heroText: {
    color: heroTextColor.var
  }
});

const DocsReactPage = () => (
  <Layout sideNav={<SideNav />}>
    <SEO title="React" />
    <PageSection variant={PageSectionVariants.dark}>
      <Title size="2xl" className={css(styles.heroText)}>
        @patternfly/react-core
      </Title>
      <Title size="md" className={css(styles.heroText)}>
        Version: {packageJsonReactCore.version}
      </Title>
    </PageSection>
    <PageSection variant={PageSectionVariants.dark}>
      <Title size="2xl" className={css(styles.heroText)}>
        @patternfly/react-charts
      </Title>
      <Title size="md" className={css(styles.heroText)}>
        Version: {packageJsonReactCharts.version}
      </Title>
    </PageSection>
    <PageSection variant={PageSectionVariants.dark}>
      <Title size="2xl" className={css(styles.heroText)}>
        @patternfly/react-table
      </Title>
      <Title size="md" className={css(styles.heroText)}>
        Version: {packageJsonReactTable.version}
      </Title>
    </PageSection>
  </Layout>
)

export default DocsReactPage;
