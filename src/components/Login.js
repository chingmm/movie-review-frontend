import React from "react"
import {GlobalCtx} from "../App"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const Login = (props) => {

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
        
        fetch(`${url}/auth/login`, {
             method: "post",
            headers: {
                "Content-Type": "application/json"
           },
             body: JSON.stringify({username, password})
        })
        .then((response) =>response.json())
        .then((data)=> { 
            console.log(data);
            window.localStorage.setItem("token", JSON.stringify(data))
            setGState({...gState, token: data.token})
            setForm(blank)
            props.history.push('/')
        
        })
        
    }
    return ( 
    <div>
            <div className="register-container">    
            <Form className="register-form" onSubmit = {handleSubmit} >
            
                <h2 className="regform-signup"> Login</h2>
                <Form.Group controlId="formBasicEmail">
                <Form.Control className="input" type = "text" 
                placeholder="Enter email"
                name = "username" 
                value = {form.username} onChange={handleChange}/>
            </Form.Group>

            <Form.Group             controlId="formBasicPassword">
                <Form.Control 
                type = "password"
                placeholder="Enter password" 
                name = "password" 
                value = {form.password} onChange={handleChange}/>
            </Form.Group>

                <Button className = "login-btn" 
                variant= "primary" type="submit"> 
                Login
                </Button>
            </Form>

        </div>
        </div>
    )}

export default Login 