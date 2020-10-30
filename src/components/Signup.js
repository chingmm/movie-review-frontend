import React from "react"
import {Link} from "react-router-dom"
import {GlobalCtx} from "../App"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Signup = (props) => {
    const {gState, setGState} = React.useContext(GlobalCtx)
    const {url} = gState;

    const blank = {
        username: "",
        password: ""
    }

    const [form, setForm] = React.useState (blank)

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        const {username, password} = form;

        fetch(`${url}/auth/register`, {
             method: "post",
            headers: {
                "Content-Type": "application/json"
           },
             body: JSON.stringify({username, password})
        })
        .then(response =>response.json())
        .then(data=> { 
            console.log(data);
            setForm(blank)
            props.history.push('/register')
        
        })
        
    }
    return(
        <Form className="register-form" onSubmit = {handleSubmit} >
                        
                            <h2 className="regform-signup"> Signup</h2>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Control className="input" type = "text" 
                            placeholder="Enter email"
                            name = "username" 
                            value = {form.username} onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control 
                            type = "password"
                            placeholder="Enter password" 
                            name = "password" 
                            value = {form.password} onChange={handleChange}/>
                        </Form.Group>

                            <Button className = "signup-btn" 
                            variant= "primary" type="submit"> 
                            Signup
                            </Button>
                        </Form>
    )
}

export default Signup