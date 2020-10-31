import React from "react"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Header from "../components/Header"
const Home = (props) => {

  // <Header />
  import TextField from '@material-ui/core/TextField';
  import HoverRating from "../components/starRating"
        return ( 
      <div className="images-carousel container">
            <Header />
    {/* <InputGroup className="mb-3">
        <FormControl
      placeholder="Recipient's username"
    />
        <InputGroup.Append>
      <Button variant="outline-secondary">Button</Button>
        </InputGroup.Append>
    </InputGroup> */}

<Form>
<input type="text" placeholder="Look up a movie"></input>
<input type="submit" value="Find"></input>
</Form>


<Container className="images-carousel" >
<h3 className="authlp-h3"> Top Movies </h3>
<p className="authlp-h3-p"> Login to rate and create a watchlist of personalised Top picks recommendations</p>
<a href="/login" className="authlp-login">Login</a>
  <Row >
{/* <div > */}
    <Col className = "col-md-4-col-6" xs={6} md={4}>
      <Image src="https://images-na.ssl-images-amazon.com/images/I/81lJ%2BkZrUqL.png" thumbnail />
      <div>
          <h4>movie name</h4>
            <button className="watch">Watch Trailer</button>
            <HoverRating />
            <button className="review">Login to review movie </button>
            </div>
    </Col>

    <Col className = "col-md-4-col-6" xs={6} md={4}>
      <Image src="https://www.reviewsphere.org/wp-content/uploads/2020/02/The-Gentlemen-2019.jpg" thumbnail />
      <div>
          <h4>movie name</h4>
            <button className="watch">Watch Trailer</button>
            <HoverRating />
            <button className="review">Login to review movie </button>
        </div>
    </Col>
    <Col className = "col-md-4-col-6" xs={6} md={4}>
      <Image src="https://nowplayingpodcast.com/images/posters/Godfather3.jpg" thumbnail />
      <div>
          <h4>movie name</h4>
            <button className="watch">Watch Trailer</button>
            <HoverRating />
            <button className="review">Login to review movie </button>
        </div>
    </Col>
    <Col className = "col-md-4-col-6" xs={6} md={4}>
      <Image src="https://upload.wikimedia.org/wikipedia/en/e/e6/Enola_Holmes_poster.jpeg" thumbnail />
      <div>
          <h4>movie name</h4>
            <button className="watch">Watch Trailer</button>
            <HoverRating />
            <button className="review">Login to review movie </button>
        </div>
    </Col>
    <Col className = "col-md-4-col-6" xs={6} md={4}>
      <Image src="https://i.pinimg.com/originals/92/c8/e0/92c8e00b34fcfdeaf605a0647c21adb3.jpg" thumbnail />
      <div>
          <h4>movie name</h4>
            <button className="watch">Watch Trailer</button>
            <HoverRating />
            <button className="review">Login to review movie </button>
        </div>
    </Col>
{/* </div> */}
  </Row>
</Container>

<br>
</br>


        </div>

    )
}

export default Home 