import React from "react";
import {
    Grid,
    GridItem,
    Nav,
    NavItem,
    NavList,
    PageSection,
    Text,
    TextVariants
} from "@patternfly/react-core";
import { Link } from "gatsby";
import { GithubIcon, TwitterIcon } from "@patternfly/react-icons";
import redhatLogo from "./RHLogo.png";
import "./footer.css";

export class Footer extends React.Component {
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
                  <p
                    className="pf-c-title ws-org-pfsite-footer-menu-list-title"
                  >
                    QUICKLINKS
                  </p>
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
                  <p
                    className="pf-c-title ws-org-pfsite-footer-menu-list-title"
                  >
                    CONTRIBUTE
                  </p>
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
                  <p
                    className="ws-org-pfsite-footer-menu-list-title"
                  >
                    STAY IN TOUCH
                  </p>
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
                    </NavList>
                  </Nav>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem sm={12} md={4}>
              <Grid className="pf-u-pt-xl ws-org-pfsite-l-footer-column">
                <GridItem className="pf-u-px-xl">
                  <a class="pf-c-page__header-brand-link" href="/"><img class="pf-c-brand ws-org-pfsite-footer-menu-about-logo pf-u-pb-md" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTc1cHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDE3NSAzMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTMuMiAoNzI2NDMpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPlBhdHRlcm5GbHkgTG9nbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAuMDAwNDc2OSUiIHkxPSIzLjAyNDc1NTA5JSIgeDI9IjUwLjAwMDQ3NjklIiB5Mj0iOTUuMzYyMDA4NiUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzYwRUZGRiIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMUY4OUM3IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJOYXYtYmFyLShkZXNrdG9wKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1MC4wMDAwMDAsIC0xNi4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iUGF0dGVybkZseS1Mb2dvIj4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1MC4wMDAwMDAsIDE2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDQuNzQ4ODU4LCAxMS4yMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuMzAyMDU0Nzk1LDkuMzQ4OCBMMC4zMDIwNTQ3OTUsMC4zMjY0IEw0LjE2ODgzNTYyLDAuMzI2NCBDNC43Mzg1ODQ0NywwLjMyNjQgNS4yMTcyMzc0NCwwLjQwOTYgNS42MDcxOTE3OCwwLjU3NDQgQzUuOTk3MTQ2MTIsMC43NDA4IDYuMzEzNTg0NDcsMC45NTc2IDYuNTU2NTA2ODUsMS4yMjk2IEM2Ljc5OTQyOTIyLDEuNTAwOCA2Ljk3NDQyOTIyLDEuODA0OCA3LjA4MTUwNjg1LDIuMTQ1NiBDNy4xODc3ODUzOSwyLjQ4NTYgNy4yNDIxMjMyOSwyLjgyODggNy4yNDIxMjMyOSwzLjE3NjggQzcuMjQyMTIzMjksMy4zOTM2IDcuMjE3MzUxNiwzLjYxNiA3LjE2NTQxMDk2LDMuODQwOCBDNy4xMTUwNjg0OSw0LjA2NCA3LjAzODM1NjE2LDQuMjg0IDYuOTMzNjc1OCw0LjQ5NiBDNi44MjgxOTYzNSw0LjcwOCA2LjY5NDc0ODg2LDQuOTA0OCA2LjUzMDkzNjA3LDUuMDkxMiBDNi4zNjcxMjMyOSw1LjI3NTIgNi4xNzA1NDc5NSw1LjQzODQgNS45NDI4MDgyMiw1LjU3ODQgQzUuNzE0MjY5NDEsNS43MTg0IDUuNDUzNzY3MTIsNS44MjggNS4xNTgxMDUwMiw1LjkwOCBDNC44NjE2NDM4NCw1Ljk4OCA0LjUzMjQyMDA5LDYuMDI3MiA0LjE2ODAzNjUzLDYuMDI3MiBMMi4wNDI0NjU3NSw2LjAyNzIgTDIuMDQyNDY1NzUsOS4zNDcyIEwwLjMwMjA1NDc5NSw5LjM0ODggTDAuMzAyMDU0Nzk1LDkuMzQ4OCBaIE00LjI0MzE1MDY4LDQuMzcyIEM0LjQ2NTI5NjgsNC4zNzIgNC42NTMwODIxOSw0LjMzNjggNC44MDMzMTA1LDQuMjY2NCBDNC45NTM1Mzg4MSw0LjE5MzYgNS4wNzU3OTkwOSw0LjEwMjQgNS4xNzA4OTA0MSwzLjk4OCBDNS4yNjU5ODE3NCwzLjg3NDQgNS4zMzMxMDUwMiwzLjc0NjQgNS4zNzQ2NTc1MywzLjYwNDggQzUuNDE3MDA5MTMsMy40NjE2IDUuNDM5MzgzNTYsMy4zMiA1LjQzOTM4MzU2LDMuMTc2IEM1LjQzOTM4MzU2LDMuMDQ2NCA1LjQyMTAwNDU3LDIuOTExMiA1LjM4NDI0NjU4LDIuNzY4OCBDNS4zNDkwODY3NiwyLjYzMDQgNS4yODU5NTg5LDIuNTAyNCA1LjE5NjQ2MTE5LDIuMzgzMiBDNS4xMDYxNjQzOCwyLjI2NjQgNC45ODIzMDU5NCwyLjE2OTYgNC44Mjg4ODEyOCwyLjA5NTIgQzQuNjczMDU5MzYsMi4wMTkyIDQuNDc4ODgxMjgsMS45ODA4IDQuMjQzOTQ5NzcsMS45ODA4IEwyLjA0NDA2MzkzLDEuOTgwOCBMMi4wNDQwNjM5Myw0LjM3MTIgTDQuMjQzMTUwNjgsNC4zNzIgTDQuMjQzMTUwNjgsNC4zNzIgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS4yNTU1OTM2LDkuMzQ4OCBMMTguNTU3MTkxOCw3LjQ4MTYgTDE1LjA4MDM2NTMsNy40ODE2IEwxNC4zODk5NTQzLDkuMzQ4OCBMMTIuNTIxNjg5NSw5LjM0ODggTDE1Ljk3Mzc0NDMsMC4zMjY0IEwxNy42Njk0MDY0LDAuMzI2NCBMMjEuMTIxNDYxMiw5LjM0ODggTDE5LjI1NTU5MzYsOS4zNDg4IFogTTE3LjEwNTI1MTEsMy41NDggQzE3LjA1ODkwNDEsMy40NCAxNy4wMDkzNjA3LDMuMzA4OCAxNi45NTY2MjEsMy4xNTg0IEMxNi45MDYyNzg1LDMuMDA1NiAxNi44NTk5MzE1LDIuODY2NCAxNi44MjIzNzQ0LDIuNzM1MiBDMTYuNzg4MDEzNywyLjg2NzIgMTYuNzQ0MDYzOSwzLjAwNTYgMTYuNjg5NzI2LDMuMTU4NCBDMTYuNjM2MTg3MiwzLjMwODggMTYuNTg1ODQ0NywzLjQ0IDE2LjUzODY5ODYsMy41NDggTDE1LjY0NjExODcsNS44OTUyIEwxNy45OTIyMzc0LDUuODk1MiBMMTcuMTA1MjUxMSwzLjU0OCBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMzAuOTAzODgxMyAyLjAwNjQgMzAuOTAzODgxMyA5LjM0ODggMjkuMTY5ODYzIDkuMzQ4OCAyOS4xNjk4NjMgMi4wMDY0IDI2LjU5MjAwOTEgMi4wMDY0IDI2LjU5MjAwOTEgMC4zMjY0IDMzLjQ4MDkzNjEgMC4zMjY0IDMzLjQ4MDkzNjEgMi4wMDY0Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjQ0LjM5MzI2NDggMi4wMDY0IDQ0LjM5MzI2NDggOS4zNDg4IDQyLjY1ODQ0NzUgOS4zNDg4IDQyLjY1ODQ0NzUgMi4wMDY0IDQwLjA4MDU5MzYgMi4wMDY0IDQwLjA4MDU5MzYgMC4zMjY0IDQ2Ljk2OTUyMDUgMC4zMjY0IDQ2Ljk2OTUyMDUgMi4wMDY0Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjU0LjE1MDkxMzIgOS4zNDg4IDU0LjE1MDkxMzIgMC4zMjY0IDYwLjMwMjI4MzEgMC4zMjY0IDYwLjMwMjI4MzEgMS45ODE2IDU1Ljg5MDUyNTEgMS45ODE2IDU1Ljg5MDUyNTEgMy44NzUyIDU4LjQ4NTk1ODkgMy44NzUyIDU4LjQ4NTk1ODkgNS41MjMyIDU1Ljg5MDUyNTEgNS41MjMyIDU1Ljg5MDUyNTEgNy43MDE2IDYwLjU3MTU3NTMgNy43MDE2IDYwLjU3MTU3NTMgOS4zNTEyIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02Ny44ODQ4MTc0LDkuMzQ4OCBMNjcuODg0ODE3NCwwLjMyNjQgTDcyLjA3MDQzMzgsMC4zMjY0IEM3Mi42NDAxODI2LDAuMzI2NCA3My4xMTcyMzc0LDAuNDAzMiA3My41LDAuNTYyNCBDNzMuODgyNzYyNiwwLjcxOTIgNzQuMTkyODA4MiwwLjkyOCA3NC40MjY5NDA2LDEuMTg4IEM3NC42NTk0NzQ5LDEuNDQ4OCA3NC44Mjk2ODA0LDEuNzQ4OCA3NC45Mjk1NjYyLDIuMDg4IEM3NS4wMjc4NTM5LDIuNDI4IDc1LjA4MDU5MzYsMi43ODMyIDc1LjA4MDU5MzYsMy4xNTIgQzc1LjA4MDU5MzYsMy40MDcyIDc1LjA0MjIzNzQsMy42NjY0IDc0Ljk2NzkyMjQsMy45MjggQzc0Ljg5MjgwODIsNC4xOTA0IDc0Ljc4NDkzMTUsNC40MzkyIDc0LjYzOTQ5NzcsNC42NzQ0IEM3NC40OTAwNjg1LDQuOTA5NiA3NC4zMTAyNzQsNS4xMjE2IDc0LjA5MDUyNTEsNS4zMTI4IEM3My44NzM5NzI2LDUuNTA0IDczLjYxOTA2MzksNS42NTM2IDczLjMzMDU5MzYsNS43NTYgTDc1LjA3ODk5NTQsOS4zNDg4IEw3My4xMjIwMzIsOS4zNDg4IEw3MS40Mzc1NTcxLDUuOTg0IEw2OS42MjI4MzExLDUuOTg0IEw2OS42MjI4MzExLDkuMzQ4OCBMNjcuODg0ODE3NCw5LjM0ODggTDY3Ljg4NDgxNzQsOS4zNDg4IFogTTcyLjA5NjAwNDYsNC4zMzQ0IEM3Mi4zMTY1NTI1LDQuMzM0NCA3Mi41MDY3MzUyLDQuMzAxNiA3Mi42NTQ1NjYyLDQuMjM2IEM3Mi44MDQ3OTQ1LDQuMTcwNCA3Mi45Mjc4NTM5LDQuMDg0IDczLjAxODE1MDcsMy45NzUyIEM3My4xMTA4NDQ3LDMuODY1NiA3My4xNzg3NjcxLDMuNzQgNzMuMjE3OTIyNCwzLjU5NiBDNzMuMjU4Njc1OCwzLjQ1MzYgNzMuMjc1NDU2NiwzLjMwNTYgNzMuMjc1NDU2NiwzLjE1MDQgQzczLjI3NTQ1NjYsMy4wMDggNzMuMjU4Njc1OCwyLjg2NDggNzMuMjI0MzE1MSwyLjcyNCBDNzMuMTg2NzU4LDIuNTgzMiA3My4xMjYwMjc0LDIuNDU4NCA3My4wNDEzMjQyLDIuMzQ1NiBDNzIuOTU0MjIzNywyLjIzNiA3Mi44Mjk1NjYyLDIuMTQ2NCA3Mi42NzkzMzc5LDIuMDc5MiBDNzIuNTI5MTA5NiwyLjAxMiA3Mi4zMzE3MzUyLDEuOTc5MiA3Mi4wOTY4MDM3LDEuOTc5MiBMNjkuNjI2MDI3NCwxLjk3OTIgTDY5LjYyNjAyNzQsNC4zMzI4IEw3Mi4wOTY4MDM3LDQuMzMyOCBMNzIuMDk2ODAzNyw0LjMzNDQgTDcyLjA5NjAwNDYsNC4zMzQ0IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNODguMTU1MjUxMSw5LjM0ODggTDg0LjU3OTMzNzksNC4wODg4IEM4NC41MjAyMDU1LDQuMDAxNiA4NC40NTc4NzY3LDMuODkyIDg0LjM4NzU1NzEsMy43NjQ4IEM4NC4zMTcyMzc0LDMuNjM3NiA4NC4yNTk3MDMyLDMuNTE5MiA4NC4yMDYxNjQ0LDMuNDEwNCBDODQuMjIyMTQ2MSwzLjUwNTYgODQuMjI3NzM5NywzLjYxODQgODQuMjM0MTMyNCwzLjc0OTYgQzg0LjI0MTMyNDIsMy44NzkyIDg0LjI0NjkxNzgsMy45OTM2IDg0LjI0NjkxNzgsNC4wODg4IEw4NC4yNDY5MTc4LDkuMzQ4OCBMODIuNTE3Njk0MSw5LjM0ODggTDgyLjUxNzY5NDEsMC4zMjY0IEw4NC4xNTAyMjgzLDAuMzI2NCBMODcuNjM5MDQxMSw1LjUyMTYgQzg3LjY5MzM3OSw1LjYwNTYgODcuNzU2NTA2OCw1LjcxMzYgODcuODI1MjI4Myw1LjgzODQgQzg3Ljg5Nzk0NTIsNS45NjMyIDg3Ljk2MTA3MzEsNi4wODU2IDg4LjAxMjIxNDYsNi4yMDI0IEM4OC4wMDAyMjgzLDYuMDgyNCA4Ny45OTM4MzU2LDUuOTU2OCA4Ny45ODU4NDQ3LDUuODM1MiBDODcuOTc3ODUzOSw1LjcxMTIgODcuOTc0NjU3NSw1LjYwNTYgODcuOTc0NjU3NSw1LjUyIEw4Ny45NzQ2NTc1LDAuMzI0OCBMODkuNjk1ODkwNCwwLjMyNDggTDg5LjY5NTg5MDQsOS4zNDcyIEw4OC4xNTUyNTExLDkuMzQ4OCBMODguMTU1MjUxMSw5LjM0ODggWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iOTcuNDU5MDE4MyA5LjM0ODggOTcuNDU5MDE4MyAwLjMyNjQgMTAzLjUwMTcxMiAwLjMyNjQgMTAzLjUwMTcxMiAxLjk4MTYgOTkuMjAwMjI4MyAxLjk4MTYgOTkuMjAwMjI4MyAzLjg3NTIgMTAxLjkyNjcxMiAzLjg3NTIgMTAxLjkyNjcxMiA1LjUyMzIgOTkuMjAwMjI4MyA1LjUyMzIgOTkuMjAwMjI4MyA5LjM0OTYiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMTEwLjU1NTI1MSA5LjM0ODggMTEwLjU1NTI1MSAwLjMyNjQgMTEyLjI5ODA1OSAwLjMyNjQgMTEyLjI5ODA1OSA3LjY3NTIgMTE2LjY0NjY4OSA3LjY3NTIgMTE2LjY0NjY4OSA5LjM0ODgiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMTI0Ljk3Mzk3MyA5LjM0ODggMTI0Ljk3Mzk3MyA1LjgzMiAxMjEuNjM0NTg5IDAuMzI2NCAxMjMuNjA4MzMzIDAuMzI2NCAxMjUuODM1Mzg4IDQuMDE0NCAxMjguMDU4NDQ3IDAuMzI2NCAxMzAuMDMzNzkgMC4zMjY0IDEyNi42OTUyMDUgNS44MzIgMTI2LjY5NTIwNSA5LjM0ODgiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMzLjUxNDQ5NzcsMTYuNTYwOCBMMTYuNzU4NDQ3NSwwLjE1MzYgTDAsMTYuNTYwOCBMNi42ODAzNjUzLDI2LjAzNiBMMTEuNzc2OTQwNiwyNC44NjQgTDE2Ljc5MDQxMSwzMS45MjA4IEwyMS43OTQyOTIyLDI0Ljg3NjggTDI2LjgzNDEzMjQsMjYuMDM1MiBMMzMuNTE0NDk3NywxNi41NjA4IFogTTE2LjA2MjQ0MjksMy4xOTYgTDEzLjg5MjEyMzMsMjMuMjc2OCBMOS43NDgwNTkzNiwxNy42MTc2IEwxNi4wNjI0NDI5LDMuMTk2IFogTTkuMjkzMzc5LDE2Ljk5NjggTDYuNzEyMzI4NzcsMTMuNDcyIEwxNS41ODc3ODU0LDIuNjggTDkuMjkzMzc5LDE2Ljk5NjggWiBNMTMuMjA0MTA5NiwyMy40NjQgTDEzLjIwNDEwOTYsMjMuNDY0IEwxMy40NDU0MzM4LDIzLjc5NjggTDEyLjA2MTQxNTUsMjQuMTE0NCBMOC44NjY2NjY2NywxOS42MTg0IEw5LjQzNzIxNDYxLDE4LjMyMDggTDEzLjIwNDEwOTYsMjMuNDY0IFogTTE2Ljc1NzY0ODQsMi45Mjk2IEwxOC45MzkxNTUzLDI0LjIxODQgTDE2Ljc1Mjg1MzksMjcuMjE3NiBMMTQuNTc0NTQzNCwyNC4yMTg0IEwxNi43NTc2NDg0LDIuOTI5NiBaIE0yMC4zMDk1ODksMjMuNDY0OCBMMjQuMTE4MDM2NSwxOC4yNjQ4IEwyNC43MTQxNTUzLDE5LjYxODQgTDIxLjUxMDYxNjQsMjQuMTI4IEwyMC4wNzE0NjEyLDIzLjc5NjggTDIwLjMxMTk4NjMsMjMuNDY2NCBMMjAuMzA5NTg5LDIzLjQ2NDggWiBNMTkuNjIyMzc0NCwyMy4yNzY4IEwxNy40ODAwMjI4LDMuMTc5MiBMMjMuODA3OTkwOSwxNy41NjA4IEwxOS42MjIzNzQ0LDIzLjI3NjggWiBNMTcuOTg1MDQ1NywyLjY3NjggTDI2LjgwMjE2ODksMTMuNDcyIEwyNC4yNjI2NzEyLDE2Ljk0IEwxNy45ODUwNDU3LDIuNjc2OCBaIE02Ljk2NjQzODM2LDI1LjI4NTYgTDAuODcwMjA1NDc5LDE2LjY0MDggTDEyLjc5ODk3MjYsNC45NjcyIEw1Ljg3MDg5MDQxLDEzLjQ1MDQgTDguOTg0MTMyNDIsMTcuNzAwOCBMOC4xMDU5MzYwNywxOS42OTYgTDExLjM1OTgxNzQsMjQuMjc2OCBMNi45NjY0MzgzNiwyNS4yODU2IFogTTE2Ljc5MDQxMSwzMC43NzEyIEwxMi40Nzg1Mzg4LDI0LjcwMzIgTDEzLjg3MDU0NzksMjQuMzgyNCBMMTYuNzUxMjU1NywyOC4zNDk2IEwxOS42NDE1NTI1LDI0LjM4MjQgTDIxLjA5MTA5NTksMjQuNzE2OCBMMTYuNzkwNDExLDMwLjc3MTIgWiBNMjIuMjExNDE1NSwyNC4yODk2IEwyNS40NzQwODY4LDE5LjY5NiBMMjQuNTcxOTE3OCwxNy42NDQ4IEwyNy42NDM2MDczLDEzLjQ1MDQgTDIwLjcxNTUyNTEsNC45NjcyIEwzMi42NDM0OTMyLDE2LjY0MDggTDI2LjU0ODA1OTQsMjUuMjg2NCBMMjIuMjExNDE1NSwyNC4yODk2IFoiIGlkPSJTaGFwZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="Patternfly Logo" /></a>
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
