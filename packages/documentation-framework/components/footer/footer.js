import React from "react";
import {Brand, Grid, GridItem, List, PageSection, Text} from "@patternfly/react-core";
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
          className="pf-v5-u-mb-lg pf-v5-u-mb-0-on-sm"
        >
          <Grid className="pf-v5-u-py-xl">
            <GridItem
              sm={6}
              md={4}
              className="pf-v5-u-ml-md pf-v5-u-ml-0-on-md pf-v5-u-mb-xl pf-v5-u-mb-0-on-md"
            >
              <p className="pf-v5-c-title ws-org-pfsite-footer-menu-list-title">
                QUICKLINKS
              </p>
              <nav aria-label="Quick Links">
                <List isPlain className="ws-org-pfsite-footer-menu-list">
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to={"/get-started/about"}
                      aria-label="Get started with PatternFly 4"
                    >
                      Get started
                    </Link>
                  </li>
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to="/components/about-modal"
                      aria-label="PatternFly 4 components"
                    >
                      Components
                    </Link>
                  </li>
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to="/layouts/bullseye"
                      aria-label="PatternFly 4 layouts"
                    >
                      Layouts
                    </Link>
                  </li>
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to="/guidelines/colors"
                      aria-label="PatternFly 4 styles"
                    >
                      Styles
                    </Link>
                  </li>
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to="https://pf3.patternfly.org/"
                      target="top"
                      aria-label="View the PatternFly 3 website"
                    >
                      PatternFly 3
                    </Link>
                  </li>
                </List>
              </nav>
            </GridItem>
            <GridItem
              sm={6}
              md={4}
              className="pf-v5-u-mt-lg pf-v5-u-mt-0-on-sm pf-v5-u-ml-md pf-v5-u-ml-0-on-md pf-v5-u-mb-xl pf-v5-u-mb-0-on-md"
            >
              <p className="pf-v5-c-title ws-org-pfsite-footer-menu-list-title">
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
                      aria-label="PatternFly 4 Code of Conduct"
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
              className="pf-v5-u-mt-lg pf-v5-u-mt-0-on-md pf-v5-u-ml-md pf-v5-u-ml-0-on-md"
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
                      aria-label="Join the PatternFly 4 Slack"
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
                      to="//redhat.com/mailman/listinfo/patternfly"
                      target="top"
                      aria-label="Join the PatternFly 4 mailing list"
                    >
                      Mailing list
                    </Link>
                  </li>
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to="//medium.com/patternfly"
                      target="top"
                      aria-label="Read the PatternFly 4 blog"
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
          <Grid className="pf-v5-u-pt-xl ws-org-pfsite-l-footer-column">
            <GridItem className="pf-v5-u-px-xl">
              <Link
                className="pf-v5-c-page__header-brand-link pf-v5-c-brand ws-org-pfsite-footer-menu-about-logo pf-v5-u-pb-md"
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
              <Text className="ws-org-pfsite-footer-menu-about-description">
                PatternFly is an open source design system built to drive
                consistency and unify teams. From documentation and components
                to code examples and tutorials, PatternFly is a place where
                design and development can thrive. We’re on a mission to help
                teams build consistent, accessible, and scalable enterprise
                product experiences—the open source way.
              </Text>
            </GridItem>
            <GridItem className="ws-org-pfsite-footer-menu-social-links pf-v5-u-px-xl">
              <Link
                to="//github.com/patternfly"
                target="top"
                aria-label="Link to PatternFly GitHub page"
              >
                <GithubIcon />
              </Link>
              <Link
                to="//twitter.com/patternfly"
                target="top"
                aria-label="Link to PatternFly Twitter page"
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
      <Grid className="pf-v5-u-py-xl-on-sm pf-v5-u-py-0-on-md pf-v5-u-align-items-center">
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
            Copyright &copy; 2022 Red Hat, Inc.
          </span>
        </GridItem>
        <GridItem md={4} lg={5} className="pf-v5-u-ml-xl-on-xl">
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
