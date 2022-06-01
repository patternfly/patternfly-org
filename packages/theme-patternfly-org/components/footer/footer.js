import React from "react";
import {
    Brand,
    Grid,
    GridItem,
    List,
    PageSection
} from "@patternfly/react-core";
import { Link } from '@breakaway/theme-patternfly-org/components';
import { GithubIcon, TwitterIcon } from "@patternfly/react-icons";
import redhatLogo from "./RHLogo.png";
import "./footer.css";
import logo from '../../layouts/logo.svg';

export const Footer = () => (
  <React.Fragment>
    <PageSection key="footer-1" className="ws-org-pfsite-l-footer">
      <Grid>
        <GridItem
          sm={12}
          md={6}
          mdOffset={1}
          className="pf-u-mb-lg pf-u-mb-0-on-sm"
        >
          <Grid className="pf-u-py-xl">
            <GridItem sm={6} md={4} className="pf-u-ml-md pf-u-ml-0-on-md pf-u-mb-xl pf-u-mb-0-on-md">
              <p
                className="pf-c-title ws-org-pfsite-footer-menu-list-title"
              >
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
                      to="https://www.patternfly.org/v3/"
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
              className="pf-u-mt-lg pf-u-mt-0-on-sm pf-u-ml-md pf-u-ml-0-on-md pf-u-mb-xl pf-u-mb-0-on-md"
            >
              <p
                className="pf-c-title ws-org-pfsite-footer-menu-list-title"
              >
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
              className="pf-u-mt-lg pf-u-mt-0-on-md pf-u-ml-md pf-u-ml-0-on-md"
            >
              <p
                className="ws-org-pfsite-footer-menu-list-title"
              >
                STAY IN TOUCH
              </p>
              <nav aria-label="Stay in touch">
                <List isPlain className="ws-org-pfsite-footer-menu-list">
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to="//slack.patternfly.org"
                      target="top"
                      aria-label="Join the PatternFly 4 Slack"
                    >
                      Slack
                    </Link>
                  </li>
                  <li className="ws-org-pfsite-footer-menu-list-item">
                    <Link
                      className="ws-org-pfsite-footer-menu-link"
                      to="//forum.patternfly.org"
                      target="top"
                      aria-label="Visit the PatternFly 4 forum"
                    >
                      Forum
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
          <Grid className="pf-u-pt-xl ws-org-pfsite-l-footer-column">
            <GridItem className="pf-u-px-xl">
              <Link
                className="pf-c-page__header-brand-link pf-c-brand ws-org-pfsite-footer-menu-about-logo pf-u-pb-md"
                to="/"
              >
                <Brand src={logo} alt="Patternfly Logo" />
              </Link>
              <p className="ws-org-pfsite-footer-menu-about-description">
                PatternFly is an open source design system built to drive consistency and unify teams. From documentation and components to code examples and tutorials, PatternFly is a place where design and development can thrive. We’re on a mission to help teams build consistent, accessible, and scalable enterprise product experiences—the open source way.
              </p>
            </GridItem>
            <GridItem className="ws-org-pfsite-footer-menu-social-links pf-u-px-xl">
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
    <PageSection key="footer-2" className="ws-org-pfsite-l-footer-dark pf-m-no-fill">
      <Grid className="pf-u-py-xl-on-sm pf-u-py-0-on-md pf-u-align-items-center">
        <GridItem md={2} mdOffset={1}>
          <Link
            to="//www.redhat.com"
            target="top"
            aria-label="Visit Red Hat.com"
          >
            <img
              src={redhatLogo}
              alt="Red Hat logo"
              width="145px"
              height="613px"
            />
          </Link>
        </GridItem>
        <GridItem md={4} lg={3} xl={2}>
          <span className="ws-org-pfsite-site-copyright">
            Copyright &copy; 2021 Red Hat, Inc.
          </span>
        </GridItem>
        <GridItem md={4} lg={5} className="pf-u-ml-xl-on-xl">
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
