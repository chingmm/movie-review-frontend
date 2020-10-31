import React from "react"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import {Button, Card} from "react-bootstrap/"
import Form from "react-bootstrap/Form"
import Header from "../components/Header"
import TextField from '@material-ui/core/TextField';
import HoverRating from "../components/starRating"
import MovieSearch from "../pages/MovieSearch"





const Home = (props) => {

    return ( 
  <>
 <div classname="blank"/>
<div className="images-carousel"> 
  <h3 className="authlp-h3"> Top Movies </h3>
  <p className="authlp-h3-p"> <a href="/login" className="authlp-login"> Login </a> to rate and create a watchlist of personalised Top picks recommendations</p>
<div className="row">
    <Col className = "col-md-4-col-6" xs={6} md={4}>
      <Image src="https://cdn2-www.comingsoon.net/assets/uploads/gallery/the-war-with-grandpa/wwg_poster.jpg" thumbnail />
      <div>
          <h5 className="mov-name">The War with Grandpa</h5>
            <button className="watch">Watch Trailer</button>
            <HoverRating />
            <button className="review">Login to review movie </button>
            </div>
    </Col>
    <Col className = "col-md-4-col-6" xs={6} md={4}>
      <Image src="https://images-na.ssl-images-amazon.com/images/I/81lJ%2BkZrUqL.png" thumbnail />
      <div>
      <h5 className="mov-name">Alien</h5>
            <button className="watch">Watch Trailer</button>
            <HoverRating />
            <button className="review">Login to review movie </button>
            </div>
    </Col>
    <Col className = "col-md-4-col-6" xs={6} md={4}>
      <Image src="https://img.promipool.com/www-promipool-de/image/upload/c_crop,h_2963,w_1671,x_174,y_0/c_fill,h_1600,w_900/q_auto:eco/f_jpg/parasite_bong_joon_ho_movie_poster_200120_gb3jsmdsxk" thumbnail />
      <div>
      <h5 className="mov-name">Parasite</h5>
            <button className="watch">Watch Trailer</button>
            <HoverRating />
            <button className="review">Login to review movie </button>
        </div>
    </Col>
    <Col className = "col-md-4-col-6" xs={6} md={4}>
      <Image src="https://nowplayingpodcast.com/images/posters/Godfather3.jpg" thumbnail />
      <div>
      <h5 className="mov-name">The Godfather Part III</h5>
            <button className="watch">Watch Trailer</button>
            <HoverRating />
            <button className="review">Login to review movie </button>
        </div>
    </Col>
    <Col className = "col-md-4-col-6" xs={6} md={4}>
      <Image src="https://upload.wikimedia.org/wikipedia/en/e/e6/Enola_Holmes_poster.jpeg" thumbnail />
      <div>
      <h5 className="mov-name">Enola Holmes</h5>
            <button className="watch">Watch Trailer</button>
            <HoverRating />
            <button className="review">Login to review movie </button>
        </div>
    </Col>
    <Col className = "col-md-4-col-6" xs={6} md={4}>
      <Image src="https://i.pinimg.com/originals/92/c8/e0/92c8e00b34fcfdeaf605a0647c21adb3.jpg" thumbnail />
      <div>
      <h5 className="mov-name">Avengers</h5>
            <button className="watch">Watch Trailer</button>
            <HoverRating />
            <button className="review">Login to review movie </button>
        </div>
    </Col>
</div>
</div>
<br>
</br>
        </>
    )
}

export default Home 