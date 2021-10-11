import React,{useState} from "react";
import { Navbar,Nav } from 'react-bootstrap';
//import styled from "styled-components";
import { Link } from "react-router-dom";
//import Logo from  '../image/logo.jpg';

const NavBar=()=>{
  const [expanded, setExpanded] = useState(false);
    return(

      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        bg="dark"
        variant="dark"
        animation="false"
        expanded={expanded}
      >
        <Navbar.Brand href="/">
         
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav" animation="false">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
            All Details
            </Nav.Link>
          </Nav>
       
        </Navbar.Collapse>
      </Navbar>
    

    )
  }

 



export default NavBar;