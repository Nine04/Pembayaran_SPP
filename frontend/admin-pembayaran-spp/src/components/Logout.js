import React from "react"
import {Link} from "react-router-dom"
import Button from "react-bootstrap/esm/Button"
export default class Logout extends React.Component{
    Logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("admin")
        localStorage.removeItem("petugas")
        localStorage.removeItem("siswa")
        window.location = "/login"
    }
    render(){
        return(
        <Button variant="info" onClick={() => this.Logout()}>Logout</Button>
            
    );

    }
}
