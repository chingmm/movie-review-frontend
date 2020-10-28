import React from "react"
import {GlobalCtx} from "../App"

const Dashboard = (props) => {

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
        // const rated = React.useRef(null)
        const input = React.useRef(null)
        const update = React.useRef(null)

        const handleClick = (event) => {
            const movie = input.current.value
            // const rated = input.current.value

        fetch(url + "/movie/", {
            method: "post",
            headers: {
                "Content-Type": "application/json", 
                Authorization: "bearer " + token
            },
            body: JSON.stringify({title: movie}, {rated: movie})
        })
        .then(response =>response.json())
        .then(data=>{
            input.current.value = ""
            getMovies()
        })

        }

        const handleUpdate =  () => {
            const movie = update.current.value

        fetch(url + "/movie/" + updateID, {
            method: "put",
            headers: {
                "Content-Type": "application/json", 
                Authorization: `bearer ` + token
            },
            body: JSON.stringify({title: movie})
        })
        .then(response =>response.json())
        .then(data=>{
            update.current.value = ""
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
            <form> 
            <input type = "text" placeholder = "title" name = "movie" ref = {input}/>
        
            </form>
            <button onClick = {handleClick}>ADD!</button>
            
            <h2>Update Info Here!</h2>
\
            <form>
            <input type = "text" name = "movie" ref = {update}/>
            </form>
            <button onClick = {handleUpdate}>Update</button>
            <ul>
               {movies ? movies.map((movie)=> (
               <div className = "outputtxt">
                   <li key = {movie._id} >{movie.title}</li>
                  

                   <button onClick={()=> handleDelete(movie._id)}>Delete</button><button onClick={()=>{
                   setUpdateID(movie._id)
                   update.current.value = movie.title}}>Edit</button></div>)) : null} 
               
            </ul>

           
        </div>
    );
    }

    

export default Dashboard 