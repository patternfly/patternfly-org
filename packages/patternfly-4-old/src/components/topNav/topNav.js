import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button, 
  ButtonGroup } from 'reactstrap';
import Link from 'gatsby-link';
import { push } from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './topNav.scss';

export const toggleEnums = {
  HTML: 1,
  REACT: 2
};

export default class TopNav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      active: 0,
      rSelected: toggleEnums.HTML
    };

    if (this.props.location.indexOf('/react/') > -1) {
      this.state.rSelected = toggleEnums.REACT;
    } 

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onNavClick(active) {
    this.setState({ active });
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
    console.log(this.props.location);
    this.props.onToggleChange(rSelected);
    // Programmatic navigation
    if (this.props.location.indexOf('/docs/') > -1) {
      push('/docs/');
    } else {
      push(this.props.location);
    }
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md" className="ws-c-navbar">
          <NavbarBrand tag="div">
            <Link to="/">
              <div className="brand">PatternFly</div>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem active={this.state.active === 1}>
                <Link className="nav-link" to="/get-started/" onClick={() => this.onNavClick(1)}>Get Started</Link>
              </NavItem>
              <NavItem active={this.state.active === 2}>
                <Link className="nav-link" to="/docs/" onClick={() => this.onNavClick(2)}>Documentation</Link>
              </NavItem>
              <NavItem active={this.state.active === 3}>
                <Link className="nav-link" to="/demos/" onClick={() => this.onNavClick(3)}>Prototypes</Link>
              </NavItem>
              <NavItem active={this.state.active === 4}>
                <Link className="nav-link" to="/contribute/" onClick={() => this.onNavClick(4)}>Contribute</Link>
              </NavItem>
              <NavItem active={this.state.active === 5}>
                <Link className="nav-link" to="/blog/" onClick={() => this.onNavClick(5)}>Blog</Link>
              </NavItem>

              <FontAwesomeIcon icon={faSearch} size="lg" inverse className="search-icon" />
              
              <div className="toggle-container">
                <ButtonGroup>
                  <Button onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>HTML</Button>
                  <Button onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>REACT</Button>
                </ButtonGroup>
              </div>

              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  PatternFly 4
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="https://jschuler.github.io/pf-org/">
                    PatternFly 3
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

TopNav.defaultProps = {
  toggleValue: PropTypes.oneOf([toggleEnums.HTML, toggleEnums.REACT])
};