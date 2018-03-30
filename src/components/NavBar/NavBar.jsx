import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Button } from 'reactstrap';

import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
   super(props);

   this.toggle = this.toggle.bind(this);
   this.state = {
     isOpen: false
   };
 }
 toggle() {
   this.setState({
     isOpen: !this.state.isOpen
   });
 }
  render() {
    return (
      <div>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Test App</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className=" nav-left-items" navbar>
                  <NavItem className="navbar-item">
                    <NavLink href="#">Link</NavLink>
                  </NavItem>
                  <NavItem className="navbar-item">
                    <NavLink href="#">Link</NavLink>
                  </NavItem>
                  <NavItem className="navbar-item">
                    <NavLink href="#"> Link</NavLink>
                  </NavItem>
                  <NavItem className="navbar-item">
                    <NavLink href="#"> Link</NavLink>
                  </NavItem>
                  <NavItem className="navbar-item">
                    <UncontrolledDropdown nav inNavbar >
                      <DropdownToggle nav caret>
                      More
                      </DropdownToggle>
                      <DropdownMenu >
                        <DropdownItem>
                          Option 1
                        </DropdownItem>
                        <DropdownItem>
                          Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem className="navbar-item">
                  <NavLink href="/components/">SIGN IN</NavLink>
                </NavItem>
                <NavItem className="navbar-item">
                  <NavLink href="">LOG IN</NavLink>
                </NavItem>
                <NavItem className="navbar-item">
                  <Button style={{backgroundColor:'#E74C3C',borderColor:'#EC7063'}}>REGISTER AS LOREM</Button>{' '}
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
    );
  }
}

export default NavBar;
