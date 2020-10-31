import React from "react"
import {Link} from "react-router-dom"
import {GlobalCtx} from "../App"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import MovieSearch from "../pages/MovieSearch"




const Header = (props) => {

    const {Movie} = props

    const {gState, setGState} = React.useContext(GlobalCtx);

    const logout = (<Link> <h2 onClick = {()=> {
        window.localStorage.removeItem("token")
        setGState({...gState, token: null})
    }}   >Logout</h2></Link>)

    return ( 
    // <nav>
    //     <Link to="/register"><h2>Signup/Login</h2></Link>
    //     <Link to="/login"><h2> Login</h2></Link>
    //     {gState.token ? logout : null}

    // </nav>

    // )}

    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/lp">Home</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/movcomp">Movie Reviews</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
            {gState.token ? logout : null}
        </Nav>
      
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
        </Form>
  </Navbar>

    
    )}

export default Header 
