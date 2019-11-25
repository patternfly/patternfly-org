import React from "react";
import "./footer.css";
import {
  Grid,
  GridItem,
  Nav,
  NavItem,
  NavList,
  PageSection,
  Text,
  TextVariants,
  Title
} from "@patternfly/react-core";
import { Link } from "gatsby";
import { GithubIcon, TwitterIcon } from "@patternfly/react-icons";
import patternflyLogo from "../images/l_pf-reverse-164x11.png";
import redhatLogo from "../images/RHLogo.png";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PageSection className="ws-org-pfsite-l-footer">
          <Grid>
            <GridItem
              sm={12}
              md={6}
              mdOffset={1}
              className="pf-u-mb-lg pf-u-mb-0-on-sm"
            >
              <Grid className="pf-u-py-xl">
                <GridItem sm={6} md={4} className="pf-u-ml-md pf-u-ml-0-on-md">
                  <Title
                    size="md"
                    className="ws-org-pfsite-footer-menu-list-title"
                  >
                    QUICKLINKS
                  </Title>
                  <Nav aria-label="Quick Links" className="pf-m-white">
                    <NavList className="pf-c-nav__list-footer">
                      <li className="pf-c-nav__item">
                        <Link
                          className="pf-c-nav__link"
                          to={"/get-started/about"}
                          aria-label="Get started with PatternFly 4"
                        >
                          Get started
                        </Link>
                      </li>
                      <li className="pf-c-nav__item">
                        <Link
                          className="pf-c-nav__link"
                          to={"/documentation/react/components/aboutmodal"}
                          aria-label="PatternFly 4 components"
                        >
                          Components
                        </Link>
                      </li>
                      <li className="pf-c-nav__item">
                        <Link
                          className="pf-c-nav__link"
                          to={"/documentation/react/layouts/bullseye"}
                          aria-label="PatternFly 4 layouts"
                        >
                          Layouts
                        </Link>
                      </li>
                      <li className="pf-c-nav__item">
                        <Link
                          className="pf-c-nav__link"
                          to={"/design-guidelines/styles/colors"}
                          aria-label="PatternFly 4 styles"
                        >
                          Styles
                        </Link>
                      </li>
                      <NavItem
                        to="https://www.patternfly.org/v3/"
                        target="top"
                        aria-label="View the PatternFly 3 website"
                      >
                        PatternFly 3
                      </NavItem>
                    </NavList>
                  </Nav>
                </GridItem>
                <GridItem
                  sm={6}
                  md={4}
                  className="pf-u-mt-lg pf-u-mt-0-on-sm pf-u-ml-md pf-u-ml-0-on-md"
                >
                  <Title
                    size="md"
                    className="ws-org-pfsite-footer-menu-list-title"
                  >
                    CONTRIBUTE
                  </Title>
                  <Nav aria-label="Contribute">
                    <NavList className="pf-c-nav__list-footer">
                      <li className="pf-c-nav__item">
                        <Link
                          className="pf-c-nav__link"
                          to={"/get-started/designers"}
                          aria-label="How to contribute as a Designer"
                        >
                          Designers
                        </Link>
                      </li>
                      <li className="pf-c-nav__item">
                        <Link
                          className="pf-c-nav__link"
                          to={"/get-started/developers"}
                          aria-label="How to contribute as a Developer"
                        >
                          Developers
                        </Link>
                      </li>
                      <NavItem
                        to="https://github.com/patternfly/patternfly/blob/master/CODE_OF_CONDUCT.md"
                        target="top"
                        aria-label="PatternFly 4 Code of Conduct"
                      >
                        Code of Conduct
                      </NavItem>
                    </NavList>
                  </Nav>
                </GridItem>
                <GridItem
                  sm={6}
                  md={4}
                  className="pf-u-mt-lg pf-u-mt-0-on-md pf-u-ml-md pf-u-ml-0-on-md"
                >
                  <Title
                    size="md"
                    className="ws-org-pfsite-footer-menu-list-title"
                  >
                    STAY IN TOUCH
                  </Title>
                  <Nav aria-label="Stay in touch" className="pf-m-white">
                    <NavList className="pf-c-nav__list-footer">
                      <NavItem
                        to="https://forum.patternfly.org"
                        target="top"
                        aria-label="Visit the PatternFly 4 forum"
                      >
                        Forum
                      </NavItem>
                      <NavItem
                        to="https://www.redhat.com/mailman/listinfo/patternfly"
                        target="top"
                        aria-label="Join the PatternFly 4 mailing list"
                      >
                        Mailing list
                      </NavItem>
                      <NavItem
                        to="https://blog.patternfly.org/"
                        target="top"
                        aria-label="View the Patternfly Blog"
                      >
                        Blog
                      </NavItem>
                    </NavList>
                  </Nav>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem sm={12} md={4}>
              <Grid className="pf-u-pt-xl ws-org-pfsite-l-footer-column">
                <GridItem className="pf-u-px-xl">
                  <img
                    src={patternflyLogo}
                    alt="PatternFly logo"
                    className="ws-org-pfsite-footer-menu-about-logo pf-u-pb-md"
                  />
                  <p className="ws-org-pfsite-footer-menu-about-description">
                    PatternFly is an open source design system built to drive
                    consistency and unify teams. We provide tools like design
                    documentation, components, and code examples to make it
                    possible for anyone to design and build responsive,
                    accessible web applications.
                  </p>
                </GridItem>
                <GridItem className="ws-org-pfsite-footer-menu-social-links pf-u-px-xl">
                  <Text
                    component={TextVariants.a}
                    href="https://github.com/patternfly/patternfly"
                    target="top"
                    aria-label="Link to PatternFly GitHub page"
                  >
                    <GithubIcon />
                  </Text>
                  <Text
                    component={TextVariants.a}
                    href="https://twitter.com/patternfly_des"
                    target="top"
                    aria-label="Link to PatternFly Twitter page"
                  >
                    <TwitterIcon />
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </PageSection>
        <PageSection className="ws-org-pfsite-l-footer-dark">
          <Grid className="pf-u-py-xl-on-sm pf-u-py-0-on-md pf-u-align-items-center">
            <GridItem md={2} mdOffset={1}>
              <Text
                component={TextVariants.a}
                href="https://www.redhat.com"
                target="top"
                aria-label="Visit Red Hat.com"
              >
                <img
                  src={redhatLogo}
                  alt="Red Hat logo"
                  width="145px"
                  height="613px"
                />
              </Text>
            </GridItem>
            <GridItem md={4} lg={3} xl={2}>
              <span className="ws-org-pfsite-site-copyright">
                Copyright &copy; 2019 Red Hat, Inc.
              </span>
            </GridItem>
            <GridItem md={4} lg={5} className="pf-u-ml-xl-on-xl">
              <Text
                component={TextVariants.a}
                href="https://www.redhat.com/en/about/privacy-policy"
                target="top"
                aria-label="Privacy statement"
              >
                Privacy statement
              </Text>
              <Text
                component={TextVariants.a}
                href="https://www.redhat.com/en/about/terms-use"
                target="top"
                aria-label="Terms of use"
              >
                Terms of use
              </Text>
              <Text
                component={TextVariants.a}
                href="https://www.redhat.com/en/about/all-policies-guidelines"
                target="top"
                aria-label="All policies and guidelines"
              >
                All policies and guidelines
              </Text>
            </GridItem>
          </Grid>
        </PageSection>
      </React.Fragment>
    );
  }
}

export default Footer;
