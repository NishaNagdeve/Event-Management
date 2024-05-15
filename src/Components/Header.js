import React from 'react';
import '../Styles/Header.css';
import { Navbar,Container,Nav, NavbarToggle, NavbarCollapse,NavDropdown } from 'react-bootstrap';
import {Link} from "react-router-dom"
import logo from '../Images/Majestic.png'
import logo1 from '../Images/logo1.PNG';


 function Header() {
  return (
    <Navbar className='navbar' expand="lg" style={{backgroundColor:'white',borderBottom: "2px solid #333"}}>
    <Container>
     <Navbar.Brand as={Link} to="/"><img src={logo1} height={80} width={250} style={{marginTop:'-10px'}}></img></Navbar.Brand>
   <NavbarToggle aria-controls='basic-nabar-nav'/>
   <Navbar.Collapse id="basic-navbar-nav"> 
    <Nav className='link mr-auto'>
         
        <Nav.Link as={Link} to="/" className='nav'style={{fontSize:'24px',color:'black',fontWeight:'bold'}}>HOME</Nav.Link>
        <Nav.Link as={Link} to="/About"className='nav' style={{fontSize:'24px',color:'black',fontWeight:'bold'}}>ABOUT</Nav.Link>
        <Nav.Link as={Link} to="/Portfolio"className='nav' style={{fontSize:'24px',color:'black',fontWeight:'bold'}}>PORTFOLIO</Nav.Link>
        <NavDropdown title="SERVICES"style={{fontSize:'24px',color:'black',fontWeight:'bold',paddingLeft:'40px'}} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/wedding">Wedding</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Corporate">Corporate</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/SocialEvents">Social Events</NavDropdown.Item>
          </NavDropdown>
        {/* <Nav.Link as={Link} to="/Services"className='nav'style={{fontSize:'24px',color:'black',fontWeight:'bold'}}>SERVICES</Nav.Link> */}
        <Nav.Link as={Link} to="/LoginUs"className='nav'style={{fontSize:'24px',color:'black',fontWeight:'bold'}}>LOGIN</Nav.Link>
        
    </Nav>
   </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}
export default Header;
