import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbarr() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#"> <img src="./logo2.png" style={{width: "70px" , height: "50px"}}></img></Navbar.Brand>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About </Nav.Link>
            <Nav.Link href="#pricing"> Contact</Nav.Link>
            <Nav.Link href="#home">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Navbarr;