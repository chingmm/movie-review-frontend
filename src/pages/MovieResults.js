import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Movie from '../components/Movie'
import MovieSearch from './MovieSearch'


const Movies = (props) => {

    console.log(props)

    const posterSize = 'w200'

    console.log(props)

       if (props.pageType.Movies) {
    return (
        <div>
            {props.pageType.Movies.map((movie, index) => (
                <Movie movie={movie} />
            ))}
        </div>
    )
    } else if (props.pageType.Movies === undefined || props.pageType.Movies === 0){
            return (
                <div>
                    <h1>Search A Movie</h1>
                    <MovieSearch 
                        searchInput={props.searchInput}
                        handleClick={props.handleClick}
                        handleChange={props.handleChange}
                    />
                </div>
            )
        }
}

export default Movies