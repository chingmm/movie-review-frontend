// import React from "react"
// import {GlobalCtx} from "../App"
// import Signup from "../components/Signup"
// import Login from "../components/Login"
import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

// const SignupLogin = (props) => {

//     return ( 
//         <>
//          <h1>
//             Welcome to Zen Movie Reviews
//         </h1>
//         <p> Let's get you started!</p>
//         <div className="or">
//             <h2>OR</h2>
//         </div>
//         <Row>
//             <Col md={{ span: 5, offset: 1}}>
//                 <Signup props={props}/>
//             </Col>
//             <Col md={{ span: 5, offset: -1}}>
//                 <Login props={props}/>
//             </Col>
//         </Row>
//         </>
//     )}


// export default SignupLogin

import React from "react"
import {GlobalCtx} from "../App"
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
        fetch(`${url}/auth/signup`, {
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
            props.history.push('/login')
        })
    }
    return ( 
        <>
        <h1>
        Welcome to Zen Movie Reviews
    </h1>
    <p> Let's get you started!</p>
        <Col md={{ span:6, offset: 3}}>
            <Form className="register-form" onSubmit = {handleSubmit} >    
                <h2 className="regform-signup"> Signup</h2>
                <Form.Group controlId="formSignup">
                <Form.Control className="input" type = "text" 
                    placeholder="Enter username"
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
        </Col>
        </>
    )}
export default Signup 



