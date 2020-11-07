import React from "react"
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';

class NavBar extends React.Component {
    
    render() {
        return(
            <Navbar bg="light" expand="lg">
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
            </Navbar>
            // <p>MIMNIMIMIMIMI</p>
        )
    }
}

export default NavBar;