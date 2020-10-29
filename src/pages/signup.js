import React from "react"
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
        // <div>
        //     <form onSubmit = {handleSubmit} >
        //         <input type = "text" name = "username" value = {form.username} onChange={handleChange}/>
        //         <input type = "password" name = "password" value = {form.password} onChange={handleChange}/>
        //         <input type = "submit" value = "signup" />

        //     </form>
        // </div>
        <div className="register-container"> 
            <Row>
                <Col>
                    <div className="box-outline">
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
                    </div>
                </Col>
                <div class="circle">
                    <h1>OR</h1>
                </div>
                <Col> 
                    <div className="box-outline">
                        <Form className="register-form" onSubmit = {handleSubmit} >
                            
                            <h2 className="regform-login"> Login</h2>
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

                            <Button className = "login-btn" 
                            variant= "primary" type="submit"> 
                            Login
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>   

        </div>
    )}

    


    // <Form>
    //  <FormGroup>
    //     <Label for="exampleEmail">Input without validation</Label>
    //     <Input />
    //     <FormFeedback>You will not be able to see this</FormFeedback>
    //     <FormText>Example help text that remains unchanged.</FormText>
    //   </FormGroup>
    //   <FormGroup>
    //     <Label for="exampleEmail">Valid input</Label>
    //     <Input valid />
    //     <FormFeedback valid>Sweet! that name is available</FormFeedback>
    //     <FormText>Example help text that remains unchanged.</FormText>
    //   </FormGroup>
    //   <FormGroup>
    //     <Label for="examplePassword">Invalid input</Label>
    //     <Input invalid />
    //     <FormFeedback>Oh noes! that name is already taken</FormFeedback>
    //     <FormText>Example help text that remains unchanged.</FormText>
    //   </FormGroup>
    //   <FormGroup>
    //     <Label for="exampleEmail">Input without validation</Label>
    //     <Input />
    //     <FormFeedback tooltip>You will not be able to see this</FormFeedback>
    //     <FormText>Example help text that remains unchanged.</FormText>
    //   </FormGroup>
    //   <FormGroup>
    //     <Label for="exampleEmail">Valid input</Label>
    //     <Input valid />
    //     <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
    //     <FormText>Example help text that remains unchanged.</FormText>
    //   </FormGroup>
    //   <FormGroup>
    //     <Label for="examplePassword">Invalid input</Label>
    //     <Input invalid />
    //     <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
    //     <FormText>Example help text that remains unchanged.</FormText>
    //   </FormGroup>
    // </Form>


export default Signup 