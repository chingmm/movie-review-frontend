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
import HeaderLogout from "../components/HeaderLogout"
import { makeStyles } from '@material-ui/core/styles';
// import { classes } from '@material-ui/core/styles';
import BasicTextFields from "../components/textfield"
import TextField from '@material-ui/core/TextField';
import HoverRating from "../components/starRating"
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import  Modal  from "react-bootstrap/Modal"
import ModalDialog from "react-bootstrap/esm/ModalDialog"
import UpdateModal from "../components/update_modal"
import Movies from "../components/Movie"

 

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

 <h3 className="authlp-h3"> My Reviewed Movies List </h3> 
<div className="input-output"> 
    
       <div  className="add-movie">
         
            <form > 
                
                <input type = "text" placeholder = "Movie Title" name = "title" ref = {titleinput}/> 
                
                <input type = "text" placeholder = "Year Released" name = "yearreleased" ref = {yearreleasedinput}/>
              
                 <input type = "text" placeholder = "Rated" name = "rated" ref = {ratedinput}/>
                
                <input type = "text" placeholder = "Genre" name = "genre" ref = {genreinput}/>
               
                <input type = "text" placeholder = "Director Name" name = "director" ref = {directorinput}/>
                
                <input type = "text" placeholder = "Your rating out of 10" name = "overallrating" ref = {overallratinginput}/>
               
                <input type = "url" placeholder = "http://..." name = "poster" ref = {posterinput}/>
              
                <div  className="add-movie">
                <TextareaAutosize  id="textarea" type = "text" placeholder = "Make a note of what you thought of the movie." name = "userreview" ref = {userreviewinput}/>
                </div>  
            </form>
            <button onClick = {handleClick} className="add">ADD!</button>
            </div>
            
    <div className="output">
            <ul>
               {movies ? movies.map((movie)=> (
               <div className = "outputtxt">
                    <div className="display-img">
                   <li key = {movie._id} ><img src= {`${movie.poster}`} /> </li>
                   </div>

                   <div className="display-info">
                   <li key = {movie._id} >{movie.title}</li>
                   <li key = {movie._id} >{movie.yearreleased}</li>
                   <li key = {movie._id} >{movie.rated}</li>
                   <li key = {movie._id} >{movie.genre}</li>
                   <li key = {movie._id} >{movie.director}</li>
                   <li key = {movie._id} >{movie.overallrating}</li>
                   </div>

                   <div className="display-review">
                   <li key = {movie._id} >{movie.userreview}</li>
                   </div>

                    <div> 
                   <button className="delete-btn" onClick={()=> handleDelete(movie._id)}>Delete</button>
                   <UpdateModal/>
                   </div>
                   
                   </div>)) : null} 
            </ul>
     </div>

    
     </div>

    <div className="hide">
             <form>
            <input type = "text" placeholder = "title" name = "title" ref = {titleupdate}/>
            <input type = "text" placeholder = "yearreleased" name = "yearreleased" ref = {yearreleasedupdate}/>
            <input type = "text" placeholder = "rated" name = "rated" ref = {ratedupdate}/>
            <input type = "text" placeholder = "genre" name = "genre" ref = {genreupdate}/>
            <input type = "text" placeholder = "director" name = "director" ref = {directorupdate}/>
            <input type = "text" placeholder = "overallrating" name = "overallrating" ref = {overallratingupdate}/>
           <input type = "url" placeholder = "poster" name = "poster" ref = {posterupdate} />
            <input type = "text" placeholder = "userreview" name = "userreview" ref = {userreviewupdate}/>

            </form> 

            </div>
            <button onClick = {handleUpdate} className="hide"> Save Changes </button>
    
        </div>
       
        
        
    );
    } 

export default AuthLP 