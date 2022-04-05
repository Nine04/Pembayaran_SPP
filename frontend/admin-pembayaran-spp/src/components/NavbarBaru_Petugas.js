import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logout from "./Logout"

class NavbarBaru_Petugas extends React.Component{
    Logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("admin")
        window.location = "/login"
    }
    render(){
        return(
          <div>
            <Navbar bg="dark" variant="dark" expand={false}>
    <Container fluid>
      <Navbar.Brand href="/home_petugas">Pembayaran SPP</Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Pembayaran SPP</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/home_petugas">Home</Nav.Link>
            <Nav.Link href="/pembayaran_petugas">Pembayaran</Nav.Link>
            <Nav.Link href="/laporan_petugas">Laporan</Nav.Link>
            <Logout/>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
          </div>
          )
      }
    }
      export default NavbarBaru_Petugas;