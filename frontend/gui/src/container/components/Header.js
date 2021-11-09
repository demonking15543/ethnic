import React, { useState }  from 'react'
import  Navbar  from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useHistory  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../redux/actions/UserActions';



const Header = (props) => {


  const history = useHistory()
  const dispatch = useDispatch()

  const Logout = () => {

    localStorage.clear();
    props.setisLogin(false);
    dispatch(setLogout(true))
    history.push("/login")
  
  
    }   
  
    const CategoryList = props.categories.map((category)=>{


      return (
          <Link to={`/${category}`} data-rr-ui-dropdown-item="" class="dropdown-item" role="button" tabindex="0" key={category}>   

          {category}
          </Link> 

      )
    })

    
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
        {CategoryList}
        
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets" className="Text-White">Discounts</Nav.Link>
      {
       props.isLogin ?
      <>
      <Link to="#" onClick={Logout} data-rr-ui-event-key="2" className="Text-White nav-link">Logout</Link>
      </>
      :
      <>
      <Link to="/signup" data-rr-ui-event-key="2" className="Text-White nav-link">Signup</Link>
      
       <Link to="/login" data-rr-ui-event-key="3"  className="Text-White nav-link">Sign In</Link>
      </> 
      }


    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    )
}
export default Header;