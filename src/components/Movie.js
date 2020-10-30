import React from "react"
import { Link } from "react-router-dom"
import moment from 'moment'
import MovieDetails from "../pages/MovieDetails"

const Movie = (props)=> {

    const {movie} = props

    const posterSize = 'w200'

    const [details, setDetails] = React.useState(false)

    return (
        <div onClick={() => {setDetails(!details)}}>
            <h5>{movie.title || movie.original_name} {movie.release_date ? moment(movie.release_date).format('(YYYY)') : ""}</h5>
            {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/${posterSize}${movie.poster_path}`} alt="" /> : <img src="/ni2x3.png" alt=""/>}
            {details ? <MovieDetails movie = {props.movie}/> : null}
        </div>
    )
}

export default Movie