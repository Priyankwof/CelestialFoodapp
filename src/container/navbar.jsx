import React from 'react';
import {Component} from 'react';
import {Nav,NavDropdown, Navbar} from 'react-bootstrap';

class NavBar extends Component{
    State(){};
    render(){
        return(
          <div className='container'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed ="top">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav>
      <Nav.Link href="/login"> Home </Nav.Link>
    </Nav>
    <NavDropdown title="About us" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Volunteers</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Staff</NavDropdown.Item>
     </NavDropdown>
     <NavDropdown title="Events" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Our Events</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Community Outreach</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Special Groups</NavDropdown.Item>
     </NavDropdown>
     <NavDropdown title="Gallery" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Our Galleries</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Uploads</NavDropdown.Item>
     </NavDropdown>
      <NavDropdown title="Donations" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Donate to Car</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Projects</NavDropdown.Item>
     </NavDropdown>

     <NavDropdown title="Contact us" id="collasible-nav-dropdown">
        <NavDropdown.Item  href="/loaddata">Pickup Report</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Distro Report</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Volunteer Info Report </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Waiver form</NavDropdown.Item>
     </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
  </div>
        )
    }
  }
  export default NavBar;