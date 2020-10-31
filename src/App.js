import React, { useState } from 'react';
import logo from './logo.svg';
import Header from "./components/Header"
import Signup from "./pages/signup"
import Login from "./pages/login"
import Home from "./pages/LandingPage"
import AuthLP from "./pages/AuthLP"
import MovieComponent from "./pages/movieComponent"
import UserReview from "./pages/userReview"
import AuthMC from './pages/AuthMC'
import Title from './components/Title'
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieResults from "./pages/MovieResults"
import MovieSearch from "./pages/MovieSearch"
import {getPoster, getSearchedInfo, getMovie } from './services/apihelper'

import Container from "react-bootstrap/Container"
import {Route, Link, Switch} from "react-router-dom"
import './App.css';
import Movie_component from './pages/movie_component';
import User_reviews from './pages/user_reviews';
import starRating from "./components/starRating"

export const GlobalCtx = React.createContext(null)


function App() {

  const [gState, setGState] = React.useState({url: "https://zen-unit3-movies-review.herokuapp.com", token: null, })


  //Seeing if already logged in
  React.useEffect(()=> {
    const token = JSON.parse(window.localStorage.getItem('token'))
    console.log(token)
    if (token) {
      setGState({...gState, token: token.token})
    }

  }, [])

  // Movie Search
  const [searchInput, setSearchInput] = useState("")


  const [pageType, setPageType] = useState({
    viewType: "movie",
    Movies: []
  })


  const handleChange = (e) => {
    let value = e.target.value;
    setSearchInput(value)
  }


  const handleClick = async (e) => {
    e.preventDefault();


    let newPage = await getSearchedInfo(pageType.viewType, searchInput);
    setPageType(prev => ({
      viewType: prev.viewType,
      Movies: newPage.results
    }))
  }
  

  return (
    <GlobalCtx.Provider value = {{gState, setGState}} >
    <div className="App">
    <Container fluid className="header-container">
      <row >
      <Link to = "/"> 
      <Title/>
      </Link>
      </row>
      </Container>
      <Header/>
      <main>
      <Route path = "/" render = {(rp) => <MovieSearch {...rp} 
            searchInput={searchInput}
            handleClick={handleClick}
            handleChange={handleChange}
            getPoster={getPoster}
            pageType={pageType}
            getMovie={getMovie}
            setPageType={setPageType}
          />}/>
          <Route path = "/" render = {(rp) =>
            <MovieResults {...rp} 
            searchInput={searchInput}
            handleClick={handleClick}
            handleChange={handleChange}
            getPoster={getPoster}
            pageType={pageType}
            setPageType={setPageType}
            />}
          />
        <Switch>
          <Route exact path = "/lp" render = {(rp) => gState.token ? <AuthLP /> : <Home/>}/>
          <Route path = "/signup" render = {(rp) => <Signup {...rp} />}/>
          <Route path = "/login" render = {(rp) => <Login {...rp} />}/>
          <Route path = "/movcomp" render = {(rp) => <MovieComponent {...rp} />}/>
          <Route path = "/userreviews" render = {(rp) => <UserReview {...rp} />}/>
          <Route path = "/userreviews/:id" render = {(rp) => <AuthMC {...rp} />}/>
        </Switch>
      </main>
    </div>
    </GlobalCtx.Provider>
  );
}

export default App;
