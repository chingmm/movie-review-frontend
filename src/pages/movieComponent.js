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


const MovieComponent = (props) => {
    // const {movie} = props.pageType.Movies
    const selectedMovie = props.movie
    const moviePosterSize = 'w400'
    console.log(props)

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
                        className="d-block w-100"
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
                    
                    {/* <ListGroup.Item><b>Vote Count</b><br/>{vote_count}</ListGroup.Item> */}
        <ListGroup.Item><b>Voter Average</b><br/>{vote_average}</ListGroup.Item>
                    {/* <ListGroup.Item><b>User Review</b><br/>Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.</ListGroup.Item> */}
                </ListGroup>    
                <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>    
                </Form>      
            </Col>
        </Row>
        </>
    )}
    else {
        return (
            <div>Loading...</div>
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