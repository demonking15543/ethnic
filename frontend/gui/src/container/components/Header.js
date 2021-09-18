import React from 'react'
import  Navbar  from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

const Header = () => {
    return (
        <div>
    <Navbar collapseOnSelect expand="lg"  style={{background:"#4169e1"}}>
  <Container>
  <Navbar.Brand href="#home">ehnic</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav"  style={{textTransform:"uppercase"}}>
    <Nav className="me-auto" >
      <Nav.Link href="#features">Brands</Nav.Link>
      <Nav.Link href="#pricing">Special Deals</Nav.Link>
      <NavDropdown title="Categories" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1" >New</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Most Buy</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Special Collection</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Offer of the day</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets" className="Text-White">Discounts</Nav.Link>
      <Nav.Link eventKey={2} href="#memes" className="Text-White">
         Log In
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    )
}
export default Header;