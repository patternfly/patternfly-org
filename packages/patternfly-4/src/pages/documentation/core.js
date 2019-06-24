import React from 'react'
import Layout from '../../components/layout';
import SideNav from '../../components/_core/Documentation/SideNav';
import SEO from '../../components/seo';
import { Title, PageSection, PageSectionVariants } from '@patternfly/react-core';
import { StyleSheet, css } from '@patternfly/react-styles';
import packageJsonCore from '@patternfly/patternfly/package.json';
import {
  global_Color_light_100 as heroTextColor
} from '@patternfly/react-tokens';

const styles = StyleSheet.create({
  heroText: {
    color: heroTextColor.var
  }
});

const DocsCorePage = () => (
  <Layout sideNav={<SideNav />}>
    <SEO title="HTML" />
    <PageSection variant={PageSectionVariants.dark}>
      <Title size="2xl" className={css(styles.heroText)}>
        @patternfly/patternfly
      </Title>
      <Title size="md" className={css(styles.heroText)}>
        Version: {packageJsonCore.version}
      </Title>
    </PageSection>
  </Layout>
)

export default DocsCorePage;
