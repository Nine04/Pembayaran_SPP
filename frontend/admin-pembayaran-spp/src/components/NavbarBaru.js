import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from "react-bootstrap/esm/Button";
import Logout from "./Logout"

class NavbarBaru extends React.Component{
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
    <Navbar.Brand href="/">Pembayaran SPP</Navbar.Brand>
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
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Management" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="/petugas">Petugas</NavDropdown.Item>
            <NavDropdown.Item href="/siswa">Siswa</NavDropdown.Item>
            <NavDropdown.Item href="/kelas">Kelas</NavDropdown.Item>
            <NavDropdown.Item href="/spp">SPP</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/pembayaran">
              Pembayaran
            </NavDropdown.Item>
            <NavDropdown.Item href="/laporan">
              Laporan
            </NavDropdown.Item>
          </NavDropdown>
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
    export default NavbarBaru;