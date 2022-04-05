import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logout from "./Logout"
class NavbarBaru_Siswa extends React.Component{
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
      <Navbar.Brand href="/home_siswa">Pembayaran SPP</Navbar.Brand>
        <Logout/>
    </Container>
  </Navbar>
          </div>
          )
      }
    }
      export default NavbarBaru_Siswa;