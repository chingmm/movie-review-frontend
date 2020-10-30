import React from "react"
import {Link} from "react-router-dom"
import {GlobalCtx} from "../App"
import Container from "react-bootstrap/Container"
import Image from 'react-bootstrap/Image'

const Title = (props) => {
    return (
        <Container fluid>
            <div className="title">
            <h1 id="title">ZEN MOVIE REVIEW</h1>
            <br/>
            </div>
        </Container>
    )
}


export default Title