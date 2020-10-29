import React from "react"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import {GlobalCtx} from "../App"
import { makeStyles } from '@material-ui/core/styles';
// import { classes } from '@material-ui/core/styles';
import BasicTextFields from "../components/textfield"
import TextField from '@material-ui/core/TextField';
import HoverRating from "../components/starRating"
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const AuthLP = (props) => {

    const {gState, setGState} = React.useContext(GlobalCtx)
    const {url, token} = gState;
    const [movies, setMovies] = React.useState(null)
    const [updateID, setUpdateID] = React.useState(null)


        const getMovies = async () => {
            const response = await fetch (url + "/movie/", {
            method: "get",
            headers: {
                Authorization: `bearer ` + token
            }
        })
        const json = await response.json()
        setMovies(json)
    }
     
    React.useEffect(()=> {
        getMovies()}, [])

        const titleinput = React.useRef(null)
        const yearreleasedinput = React.useRef(null)
        const ratedinput = React.useRef(null)
        const genreinput = React.useRef(null)
        const directorinput = React.useRef(null)
        const overallratinginput = React.useRef(null)
        const posterinput = React.useRef(null)
        const userreviewinput = React.useRef(null)

        const titleupdate = React.useRef(null)
        const yearreleasedupdate = React.useRef(null)
        const ratedupdate = React.useRef(null)
        const genreupdate = React.useRef(null)
        const directorupdate = React.useRef(null)
        const overallratingupdate = React.useRef(null)
        const posterupdate = React.useRef(null)
        const userreviewupdate = React.useRef(null)

        const handleClick = (event) => {
            const title = titleinput.current.value
            const yearreleased = yearreleasedinput.current.value
            const rated = ratedinput.current.value
            const genre = genreinput.current.value
            const director = directorinput.current.value
            const overallrating = overallratinginput.current.value
            const poster = posterinput.current.value
            const userreview = userreviewinput.current.value 

            // console.log(movie)

            fetch(url + "/movie/", {
                method: "post",
                headers: {
                    "Content-Type": "application/json", 
                    Authorization: `bearer ` + token
                },
                body: JSON.stringify({title, yearreleased, rated, genre, director, overallrating, poster, userreview})

            })
            .then(response =>response.json())
            .then(data=>{
                titleinput.current.value = ""
                yearreleasedinput.current.value = ""
                ratedinput.current.value = ""
                genreinput.current.value = ""
                directorinput.current.value = ""
                overallratinginput.current.value = ""
                posterinput.current.value = ""
                userreviewinput.current.value = ""

                getMovies()
            })

        }

        const handleUpdate =  () => {
            const title = titleupdate.current.value
            const yearreleased = yearreleasedupdate.current.value
            const rated = ratedupdate.current.value
            const genre = genreupdate.current.value
            const director = directorupdate.current.value
            const overallrating = overallratingupdate.current.value
            const poster = posterupdate.current.value
            const userreview = userreviewupdate.current.value

        fetch(url + "/movie/" + updateID, {
            method: "put",
            headers: {
                "Content-Type": "application/json", 
                Authorization: `bearer ` + token
            },
            body: JSON.stringify({title, yearreleased, rated, genre, director, overallrating, poster, userreview})
        })
        .then(response =>response.json())
        .then(data=>{
            titleupdate.current.value = ""
            yearreleasedupdate.current.value = ""
            ratedupdate.current.value = ""
            genreupdate.current.value = ""
            directorupdate.current.value = ""
            overallratingupdate.current.value = ""
            posterupdate.current.value = ""
            userreviewupdate.current.value = ""
            setUpdateID(null)
            getMovies()
        })

        }
        const handleDelete = (id) => {

        fetch(url + "/movie/" + id, {
            method: "delete",
            headers: {
                Authorization: `bearer ` + token
            },
        })
        .then(response =>response.json())
        .then(data=>{
            getMovies()
        })
    }
    return (
        <div>

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
                        <Col xs={6} md={4}>
                        <Image src="https://images-na.ssl-images-amazon.com/images/I/81lJ%2BkZrUqL.png" thumbnail />
                        <div><HoverRating /></div>
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
                    {/* </div> */}
                    </Row>
                    </Container>
                    
                    <br></br>
                    <br></br>

{/*--------------------- THIS IS THE "MY REVIEW LIST" SECTION-------------- */}

                    <h3 className="authlp-h3"> My Reviewed Movies List </h3>
                    <Container className="images-carousel" >
                    <Row >
                    {/* <div > */}
                        <Col xs={6} md={4}>
                        <Image src="https://images-na.ssl-images-amazon.com/images/I/81lJ%2BkZrUqL.png" thumbnail />
                        <div><HoverRating /></div>
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

                    {/* </div> */}
                    </Row>
                    </Container>
                    <br></br>
                    <br></br>

                    {/* THIS IS THE "LIST OF MOVIES TO REVIEW SECTION" */}

            {/* MAKE PAGE LOOK LIKE THE ONE IN FIGMA */}

{/* -------------------------ADD SECTION----------------------------- */}

            {/* CAN WE HAVE THIS SECTION BE DISPLAYED ON HERE UNDER A TITLE OF "ADD A MOVIE TO REVIEW LIST"? 
                    what if we have the update display on this page as well, but only after clicking on a button? */}
       <div  className="add-movie">
         <div>
            <form > 
                <TextField id="outlined-basic" type = "text" placeholder = "title" name = "title" ref = {titleinput}/> 
                {/* <br></br> */}
                <TextField type = "text" placeholder = "yearreleased" name = "yearreleased" ref = {yearreleasedinput}/>
                <br></br>
                 <TextField type = "text" placeholder = "rated" name = "rated" ref = {ratedinput}/>
                 <br></br>
                <TextField type = "text" placeholder = "genre" name = "genre" ref = {genreinput}/>
                <br></br>
                <TextField type = "text" placeholder = "director" name = "director" ref = {directorinput}/>
                <br></br>
                <TextField type = "text" placeholder = "overallrating" name = "overallrating" ref = {overallratinginput}/>
                <br></br>
                <TextField type = "text" placeholder = "poster" name = "poster" ref = {posterinput}/>
                <br></br>
                <div className="add-movie">
                <TextareaAutosize  id="textarea" type = "text" placeholder = "userreview" name = "userreview" ref = {userreviewinput}/>
                </div>
            </form>
            </div>
            </div>
            <button onClick = {handleClick}>ADD!</button>

            {/* TURN THIS INTO A BUTTON that onClick displays the information below! */}
                <h2>Update Info Here!</h2>
\

{/* -------------------------UPDATE SECTION----------------------------- */}

 {/* CAN WE HIDE THIS INFORMATION UNTIL WE CLICK A BUTTON?
                    what if we have the update display on this page as well, but only after clicking on a button? */}
    <div>
            <form>
            <TextField type = "text" placeholder = "title" name = "title" ref = {titleupdate}/>
            <TextField type = "text" placeholder = "yearreleased" name = "yearreleased" ref = {yearreleasedupdate}/>
            <TextField type = "text" placeholder = "rated" name = "rated" ref = {ratedupdate}/>
            <TextField type = "text" placeholder = "genre" name = "genre" ref = {genreupdate}/>
            <TextField type = "text" placeholder = "director" name = "director" ref = {directorupdate}/>
            <TextField type = "text" placeholder = "overallrating" name = "overallrating" ref = {overallratingupdate}/>
            <TextField type = "text" placeholder = "poster" name = "poster" ref = {posterupdate}/>
            <TextField type = "text" placeholder = "userreview" name = "userreview" ref = {userreviewupdate}/>
            </form>
    </div>
            <button onClick = {handleUpdate}>Update</button>
            <ul>
               {movies ? movies.map((movie)=> (
               <div className = "outputtxt">
                   <li key = {movie._id} >{movie.title}</li>
                   <li key = {movie._id} >{movie.yearreleased}</li>
                   <li key = {movie._id} >{movie.rated}</li>
                   <li key = {movie._id} >{movie.genre}</li>
                   <li key = {movie._id} >{movie.director}</li>
                   <li key = {movie._id} >{movie.overallrating}</li>
                   <li key = {movie._id} >{movie.poster}</li>
                   <li key = {movie._id} >{movie.userreview}</li>


                   {/* <li key = {movie._id} >{movie.rated}</li> */}

                   <button onClick={()=> handleDelete(movie._id)}>Delete</button><button onClick={()=>{
                   setUpdateID(movie._id)
                   titleupdate.current.value = movie.title
                   yearreleasedupdate.current.value = movie.yearreleased
                   ratedupdate.current.value = movie.rated
                   genreupdate.current.value = movie.genre
                   directorupdate.current.value = movie.director
                   overallratingupdate.current.value = movie.overallrating
                   posterupdate.current.value = movie.poster
                   userreviewupdate.current.value = movie.userreview
                
                
                }
                   
                   
                   
                   
                   
                   }>Edit</button></div>)) : null} 
               
            </ul>
        </div>
    );
    }

export default AuthLP 