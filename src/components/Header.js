import React from "react"
import {Link} from "react-router-dom"
import {GlobalCtx} from "../App"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import MovieSearch from "../pages/MovieSearch"
// import {FiVideo} from 'react-icons/fi'




const Header = (props) => {

    const {Movie} = props

    const {gState, setGState} = React.useContext(GlobalCtx);

    const logout = (<Nav.Link onClick = {()=> {
        window.localStorage.removeItem("token")
        setGState({...gState, token: null})
    }}   >Logout</Nav.Link>)

    return ( 

    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/movcomp">Home</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/lp">My Movie Reviews</Nav.Link>
            <Nav.Link href="/signup" className="signinlogin">Signup</Nav.Link>
            <Nav.Link href="/login" className="signinlogin">Login</Nav.Link>
            {gState.token ? logout : null}
        </Nav>
  </Navbar>

    
    )}

export default Header 
