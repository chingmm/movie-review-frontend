import React, { useState, useEffect } from 'react'
import { getMovie } from './../services/apihelper'
import moment from 'moment'



const MovieDetails = (props) => {

    const selectedMovie = props.movie
    const moviePosterSize = "w400"

    const renderData = () => {

        if (selectedMovie && selectedMovie.title && selectedMovie.release_date) {
            const { overview, tagline, poster_path, genre_ids:genres, title, release_date } = selectedMovie

            return (
                <div>
                    <h1>{title}</h1>
                    <h5>{tagline}</h5>
                    <div>
                        <div>
                            {poster_path ? <img src={`https://image.tmdb.org/t/p/${moviePosterSize}${poster_path}`} alt="" /> : <img src="/ni4x6.png" alt="" />}
                        </div>
                        <div>
                            <div>
                                <h5>Realease Date: {moment(release_date).format('MMMM DD, YYYY')}</h5>
                                <div>{overview}</div>
                                <span>Genres: </span>{genres.map((genre, index) => (
                                    <span>{genre.name} </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
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

export default MovieDetails