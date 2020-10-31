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
            {details ? <MovieDetails movie = {props.movie}/> : null}
        </div>
    )
}

export default Movie