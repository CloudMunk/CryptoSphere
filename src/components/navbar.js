import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import { Link, Route } from "react-router-dom";
import Listings from '../components/Pages/listings';
import Landingpage from '../components/Pages/landingpage';
import ICO from '../components/Pages/ico';
import Dapps from '../components/Pages/dapps';
import Exclusive from '../components/Pages/exclusive';
import Web from '../components/Pages/web';



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
                                    <Link to="/listings">
                                        Live Crypto
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/ico">
                                    ICO's
                                    </Link>
                                </NavItem>
                                <NavDropdown title="Inside Blockchain" id="basic-nav-dropdown">
                                
                                    <MenuItem>
                                        <Link to='/dapps'>
                                            Dapps
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to='/web'>
                                            Heard on the Web
                                        </Link>
                                    </MenuItem>
                                    <MenuItem divider />

                                    <MenuItem >
                                        <Link to='/exclusive'>
                                             Get Exclusive Access
                                        </Link>
                                    </MenuItem>
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
                <Route path="/listings" component={Listings} />
                <Route path="/ico" component={ICO} />
                <Route path="/dapps" component={Dapps} />
                <Route path="/web" component={Web} />
                <Route path="/exclusive" component={Exclusive} /> 
            
        </div>
        ) 
    }
}

export default NavBar;