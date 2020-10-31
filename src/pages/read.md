<h1> PAGES ReadMD </h1>

<h3> Codes I may need again </h3> 
<h4> From ... AuthLP </h4>

    <p>
        <Container      
        className="images-carousel" >
         <Row >
        <Col xs={6} md={4}>
            <Image src="https://images-na.ssl-images-amazon.com/images/I/81lJ%2BkZrUqL.png" thumbnail />
            <div><HoverRating />
            </div>
        </Col>

    <Col xs={6} md={4}>
        <Image src="https://www.reviewsphere.org/wp-content/uploads/2020/02/The-Gentlemen-2019.jpg" thumbnail />
        <div><HoverRating /></div>
    </Col>

    <Col xs={6} md={4}>
    <Image src="https://nowplayingpodcast.com/images/posters/Godfather3.jpg" thumbnail />
    <div><HoverRating /></div>
    </Col>

                        
    <Col xs={6} md={4}>
    <Image src="https://upload.wikimedia.org/wikipedia/en/e/e6/Enola_Holmes_poster.jpeg" thumbnail />
    <div><HoverRating /></div>
    </Col>

    <Col xs={6} md={4}>
    <Image src="https://i.pinimg.com/originals/92/c8/e0/92c8e00b34fcfdeaf605a0647c21adb3.jpg" thumbnail />
    <div><HoverRating /></div>
    </Col>
                    
    </Row>
    </Container> 

    </p>


            {/* MAKE PAGE LOOK LIKE THE ONE IN FIGMA */}
{/* ----------------THIS IS THE "LIST OF MOVIES TO REVIEW SECTION"---------*/}
                    <Form>
                    <input type="text" placeholder="Look up a movie"></input>
                    <input type="submit" value="Find"></input>
                    </Form>

                   
                    <Container className="images-carousel" >
                    <h3 className="authlp-h3"> List of Movies to Review </h3>
                    <Row >
                    {/* <div > */}
                        {/* <Col className = "col-md-4-col-6" xs={6} md={4}>
                        <Image src= {`https://image.tmdb.org/t/p/${posterSize}${movie.poster_path}`} thumbnail />
                        <div className="carousel-bottom">
                            <h4>movie name</h4>
                            <button className="watch">Watch Trailer</button>
                            <HoverRating />
                            <button className="review">Review this movie </button>

                        </div>
                        </Col> */}
                       



                        <Col className = "col-md-4-col-6" xs={6} md={4}>
                        <Image src="https://www.reviewsphere.org/wp-content/uploads/2020/02/The-Gentlemen-2019.jpg" thumbnail />
                        <div>
                            <h4>movie name</h4>
                            <button className="watch">Watch Trailer</button>
                            <HoverRating />
                            <button className="review">Review this movie </button>
                        </div>
                        </Col>

                        <Col className = "col-md-4-col-6" xs={6} md={4}>
                        <Image src="https://nowplayingpodcast.com/images/posters/Godfather3.jpg" thumbnail />
                        <div>
                            <h4>movie name</h4>
                            <button className="watch">Watch Trailer</button>
                            <HoverRating />
                            <button className="review">Review this movie </button>
                        </div>
                        </Col>


                        <Col className = "col-md-4-col-6" xs={6} md={4}>
                        <Image src="https://upload.wikimedia.org/wikipedia/en/e/e6/Enola_Holmes_poster.jpeg" thumbnail />
                        <div>
                            <h4>movie name</h4>
                            <button className="watch">Watch Trailer</button>
                            <HoverRating />
                            <button className="review">Review this movie </button>
                        </div>
                        </Col>

                        <Col className = "col-md-4-col-6" xs={6} md={4}>
                        <Image src="https://i.pinimg.com/originals/92/c8/e0/92c8e00b34fcfdeaf605a0647c21adb3.jpg" thumbnail />
                        <div>
                            <h4>movie name</h4>
                            <button className="watch">Watch Trailer</button>
                            <HoverRating />
                            <button className="review">Review this movie </button>
                        </div>
                        </Col>
                    {/* </div> */}
                    </Row>
                    </Container>
                    
                    <br></br>
                    <br></br>