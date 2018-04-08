import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import { Link, Route } from "react-router-dom";
import News from './news';
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
                                <Link to="/news">
                                      News
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="ico">
                                  ICO's
                                </Link>
                            </NavItem>
                            <NavDropdown title="Inside Blockchain" id="basic-nav-dropdown">
                             
                                <MenuItem >Dapps</MenuItem>
                                <MenuItem >Heard on the Web</MenuItem>
                                <MenuItem divider />
                                <MenuItem >Get Exclusive Access</MenuItem>
                            </NavDropdown>
                            <NavDropdown title="Guides" id="basic-nav-dropdown">
                             
                                <MenuItem >Video tutorials</MenuItem>
                                <MenuItem >Educational material</MenuItem>
                                <MenuItem divider />
                                <MenuItem >Blogs</MenuItem>
                            </NavDropdown>
                            <NavDropdown title="Exchanges" id="basic-nav-dropdown">
                             
                                <MenuItem >Centralized</MenuItem>
                                <MenuItem >Decentralized</MenuItem>
                                <MenuItem divider />
                                <MenuItem >Current ratings</MenuItem>
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
            <Route path="/news" component={News} />
            <Route path="/ico" component={ICO} />
            <Route path="/education" component={Education} />
            
        </div>
        ) 
    }
}

export default NavBar;