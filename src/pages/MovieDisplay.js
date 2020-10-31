import React from 'react'
import MovieResults from './MovieResults'
import MovieDetails from './MovieDetails'
import { Route } from 'react-router-dom'


const MovieDisplay = (props) => {

    return (
        <div>
            <Route exact path="/">
                <MovieResults
                    getPoster={props.getPoster}
                    pageType={props.pageType}
                    getMovie={props.getMovie}
                    searchInput={props.searchInput}
                    handleClick={props.handleClick}
                    handleChange={props.handleChange}
                />
            </Route>
            <Route exact path ="/movie/details/:id" component={match => 
                        <MovieDetails 
                        match={match} 
                        getMovie={props.getMovie}
                        pageType={props.pageType}
                        />}>
            </Route>
        </div>
    )
}

export default MovieDisplay