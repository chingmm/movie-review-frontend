import React from "react"
import {GlobalCtx} from "../App"
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import ListGroup from 'react-bootstrap/ListGroup'
import MovieSearch from './MovieSearch'
import Movie from '../components/Movie'
import MovieResults from './MovieResults'
import MovieDetails from './MovieDetails'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"


const MovieComponent = (props) => {
    // const {movie} = props.pageType.Movies
    const selectedMovie = props.movie
    const moviePosterSize = 'w400'
    console.log(props)

    const handleSubmit = () => {

    }

    const renderData = () => {

        if (selectedMovie && selectedMovie.title && selectedMovie.release_date) {
            const { vote_average, vote_count, popularity, overview, tagline, poster_path, genre_ids:genres, title, release_date } = selectedMovie
  
        return (
      
        <>
        <Row>
            <Col>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100" className="image"
                        src={`https://image.tmdb.org/t/p/${moviePosterSize}${poster_path}`}
                        alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col fluid>
                <ListGroup>
                    <ListGroup.Item>
                        <b>Title</b><br/>{title}
                    </ListGroup.Item>
                    <ListGroup.Item><b>Year Released</b><br/>{selectedMovie.release_date}</ListGroup.Item>
                    {/* <ListGroup.Item><b>Popularity</b><br/>{selectedMovie.popularity}</ListGroup.Item> */}
                    {/* <ListGroup.Item><b>Genre</b><br/>{genre_ids:genres}</ListGroup.Item> */}
                    
        <ListGroup.Item><b>Voter Average</b><br/>{vote_average}</ListGroup.Item>
                    <ListGroup.Item>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                Overview
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>{overview}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </ListGroup.Item>
                    {/* <ListGroup.Item><b>User Review</b><br/>Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.</ListGroup.Item> */}
                </ListGroup>    
                {/* <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment/Review</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>  
                <Button variant="primary" type="submit">
                    Submit
                </Button>  
                </Form>       */}
            </Col>
        </Row>
        </>
    )}
    else {
        return (
            <div> </div>
        )
    }
}


return (
    <div>
        <h1>{renderData()}</h1>
    </div>
)

}

export default MovieComponent