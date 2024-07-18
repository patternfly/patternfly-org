import React from "react";
import {Brand, Grid, GridItem, List, PageSection, Content} from "@patternfly/react-core";
import {Link} from "@patternfly/documentation-framework/components";
import {GithubIcon, TwitterIcon} from "@patternfly/react-icons";
import redhatLogo from "./RHLogo.png";
import logo from "../../layouts/PF-HorizontalLogo-Reverse.svg";

export const Footer = () => (
  <React.Fragment>
    <PageSection key="footer-1" className="ws-org-pfsite-l-footer" component="footer">
      <Grid>
        <GridItem
          sm={12}
          md={6}
          mdOffset={1}
          className="pf-v6-u-mb-lg pf-v6-u-mb-0-on-sm"
        >
          <Grid className="pf-v6-u-py-xl">
            <GridItem
              sm={6}
              md={4}
              className="pf-v6-u-ml-md pf-v6-u-ml-0-on-md pf-v6-u-mb-xl pf-v6-u-mb-0-on-md"
            >
              <p className="pf-v6-c-title ws-org-pfsite-footer-menu-list-title">
                QUICKLINKS
              </p>
              <nav aria-label="Quick Links">
                <List isPlain className="ws-org-pfsite-footer-menu-list">
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to={"/get-started/about-patternfly"}
                      aria-label="Get started with PatternFly"
                     >
                      Get started
                    </Link>
                  </li>
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to="/components/all-components"
                      aria-label="PatternFly components"
                    >
                      Components
                    </Link>
                  </li>
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to="/layouts/about-layouts"
                      aria-label="PatternFly layouts"
                    >
                      Layouts
                    </Link>
                  </li>
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to="/design-foundations/about-design-foundations"
                      aria-label="PatternFly styles"
                    >
                      Styles
                    </Link>
                  </li>
                </List>
              </nav>
            </GridItem>
            <GridItem
              sm={6}
              md={4}
              className="pf-v6-u-mt-lg pf-v6-u-mt-0-on-sm pf-v6-u-ml-md pf-v6-u-ml-0-on-md pf-v6-u-mb-xl pf-v6-u-mb-0-on-md"
            >
              <p className="pf-v6-c-title ws-org-pfsite-footer-menu-list-title">
                CONTRIBUTE
              </p>
              <nav aria-label="Contribute">
                <List isPlain className="ws-org-pfsite-footer-menu-list">
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to="/get-started/design"
                      aria-label="How to contribute as a Designer"
                    >
                      Designers
                    </Link>
                  </li>
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to="/get-started/develop"
                      aria-label="How to contribute as a Developer"
                    >
                      Developers
                    </Link>
                  </li>
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to="https://github.com/patternfly/patternfly/blob/main/CODE_OF_CONDUCT.md"
                      target="top"
                      aria-label="PatternFly Code of Conduct"
                    >
                      Code of Conduct
                    </Link>
                  </li>
                </List>
              </nav>
            </GridItem>
            <GridItem
              sm={6}
              md={4}
              className="pf-v6-u-mt-lg pf-v6-u-mt-0-on-md pf-v6-u-ml-md pf-v6-u-ml-0-on-md"
            >
              <p className="ws-org-pfsite-footer-menu-list-title">
                STAY IN TOUCH
              </p>
              <nav aria-label="Stay in touch">
                <List isPlain className="ws-org-pfsite-footer-menu-list">
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to="//join.slack.com/t/patternfly/shared_invite/zt-1npmqswgk-bF2R1E2rglV8jz5DNTezMQ"
                      target="top"
                      aria-label="Join the PatternFly Slack"
                    >
                      Slack
                    </Link>
                  </li>
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to="//github.com/orgs/patternfly/discussions"
                      target="top"
                      aria-label="Visit the PatternFly discussion forum"
                    >
                      Discussions
                    </Link>
                  </li>
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to="https://www.redhat.com/dynamic-form/instance/934b1674-bc8a-4a13-8c9d-d19abcceb263"
                      target="top"
                      aria-label="Join the PatternFly mailing list"
                    >
                      Mailing list
                    </Link>
                  </li>
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to="//medium.com/patternfly"
                      target="top"
                      aria-label="Read the PatternFly blog"
                    >
                      PatternFly Medium
                    </Link>
                  </li>
                </List>
              </nav>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem sm={12} md={4}>
          <Grid className="pf-v6-u-pt-xl ws-org-pfsite-l-footer-column">
            <GridItem className="pf-v6-u-px-xl">
              <Link
                className="pf-v6-c-page__header-brand-link pf-v6-c-brand ws-org-pfsite-footer-menu-about-logo pf-v6-u-pb-md"
                to="/"
              >
                <Brand
                  src={logo}
                  alt="PatternFly"
                  heights={{default: "32px"}}
                >
                  <source srcSet={logo} />
                </Brand>
              </Link>
              <Content component="p" className="ws-org-pfsite-footer-menu-about-description">
                PatternFly is an open source design system built to drive
                consistency and unify teams. From documentation and components
                to code examples and tutorials, PatternFly is a place where
                design and development can thrive. We’re on a mission to help
                teams build consistent, accessible, and scalable enterprise
                product experiences—the open source way.
              </Content>
            </GridItem>
            <GridItem className="ws-org-pfsite-footer-menu-social-links pf-v6-u-px-xl">
              <Link
                to="//github.com/patternfly"
                target="top"
                aria-label="Link to PatternFly GitHub page"
              >
                <GithubIcon />
              </Link>
              <Link
                to="//x.com/patternfly"
                target="top"
                aria-label="Link to PatternFly X page"
              >
                <TwitterIcon />
              </Link>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </PageSection>
    <PageSection
      key="footer-2"
      className="ws-org-pfsite-l-footer-dark pf-m-no-fill"
    >
      <Grid className="pf-v6-u-py-xl-on-sm pf-v6-u-py-0-on-md pf-v6-u-align-items-center">
        <GridItem md={2} mdOffset={1}>
          <Link
            to="//www.redhat.com"
            target="top"
          >
            <img
              src={redhatLogo}
              alt="Red Hat"
              width="145px"
              height="613px"
            />
          </Link>
        </GridItem>
        <GridItem md={4} lg={3} xl={2}>
          <span className="ws-org-pfsite-site-copyright">
            Copyright &copy; 2014-{new Date().getFullYear()} Red Hat, Inc.
          </span>
        </GridItem>
        <GridItem md={4} lg={5} className="pf-v6-u-ml-xl-on-xl">
          <Link
            to="//www.redhat.com/en/about/privacy-policy"
            target="top"
            aria-label="Privacy statement"
          >
            Privacy statement
          </Link>
          <Link
            to="//www.redhat.com/en/about/terms-use"
            target="top"
            aria-label="Terms of use"
          >
            Terms of use
          </Link>
          <Link
            to="//www.redhat.com/en/about/all-policies-guidelines"
            target="top"
            aria-label="All policies and guidelines"
          >
            All policies and guidelines
          </Link>
        </GridItem>
      </Grid>
    </PageSection>
  </React.Fragment>
);
