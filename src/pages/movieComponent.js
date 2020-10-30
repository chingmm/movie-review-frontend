import React from "react"
import {GlobalCtx} from "../App"
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import ListGroup from 'react-bootstrap/ListGroup'


const MovieComponent = (props) => {
    return (
        <Row>
            <Col>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col fluid>
                <ListGroup>
                    <ListGroup.Item>
                        <b>Title</b><br/>Parasite
                    </ListGroup.Item>
                    <ListGroup.Item><b>Year Released</b><br/>2019</ListGroup.Item>
                    <ListGroup.Item><b>Rated</b><br/>18</ListGroup.Item>
                    <ListGroup.Item><b>Genre</b><br/>Comedy, Drama, Thriller</ListGroup.Item>
                    <ListGroup.Item><b>Director</b><br/>Bong Joon Ho</ListGroup.Item>
                    <ListGroup.Item><b>Overall Rating</b><br/>5</ListGroup.Item>
                    <ListGroup.Item><b>User Review</b><br/>Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.</ListGroup.Item>
                </ListGroup>          
            </Col>
        </Row>
    )
}

export default MovieComponent