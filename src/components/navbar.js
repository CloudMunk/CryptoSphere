import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import { Link, Route, NavLink } from "react-router-dom";
import Upcoming from './upcoming';
import Landingpage from './landingpage';
import ICO from './ico';
import Education from './education';


class NavBar extends Component {
    render() {
        return (
        <div>
            <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">
                               Crypto Sphere
                            </Link>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem>
                                <Link to="/upcoming">
                                      Upcoming
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="ico">
                                  ICO's
                                </Link>
                            </NavItem>
                            <NavDropdown title="More" id="basic-nav-dropdown">
                             
                                <MenuItem >Members</MenuItem>
                                <MenuItem >Insider</MenuItem>
                                <MenuItem divider />
                                <MenuItem >Become A Member</MenuItem>
                            </NavDropdown>
                        </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                        Sign Up
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                        Sign In
                        </NavItem>
                    </Nav>
                    </Navbar.Collapse>
            </Navbar>
            <Route path="/" exact component={Landingpage} />
            <Route path="/upcoming" component={Upcoming} />
            <Route path="/ico" component={ICO} />
            <Route path="/education" component={Education} />
            
        </div>
        ) 
    }
}

export default NavBar;