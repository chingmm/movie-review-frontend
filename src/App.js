import React, { useState } from 'react';
import logo from './logo.svg';
import Header from "./components/Header"
import Signup from "./pages/signup"
import Login from "./pages/login"
import Home from "./pages/LandingPage"
import AuthLP from "./pages/AuthLP"
<<<<<<< HEAD
import MovieComponent from "./pages/movieComponent"
import UserReview from "./pages/userReview"
import AuthMC from './pages/AuthMC'
import Title from './components/Title'
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieResults from "./pages/MovieResults"
import MovieSearch from "./pages/MovieSearch"
import {getPoster, getSearchedInfo, getMovie } from './services/apihelper'
=======
>>>>>>> idaEdits

import Container from "react-bootstrap/Container"
import {Route, Link, Switch} from "react-router-dom"
import './App.css';
<<<<<<< HEAD
import SignupLogin from './pages/signup';



=======
import Movie_component from './pages/movie_component';
import User_reviews from './pages/user_reviews';
import AuthMC from './pages/AuthMC';
import starRating from "./components/starRating"
>>>>>>> idaEdits

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
      {/* <h1 className="app-title">ZEN MOVIE <span>REVIEWS </span></h1>  */}
      </Link>
      </row>
      </Container>

      <Header/>

      <main>
        <Switch>
<<<<<<< HEAD
          <Route exact path = "/lp" render = {(rp) => gState.token ? <AuthLP /> : <Home/>}/>
=======
          <Route exact path = "/" render = {(rp) => gState.token ? <AuthLP /> : <Home/>}/>
>>>>>>> idaEdits

          <Route path = "/signup" render = {(rp) => <Signup {...rp} />}/>

          <Route path = "/login" render = {(rp) => <Login {...rp} />}/>
          
<<<<<<< HEAD
          <Route path = "/movcomp" render = {(rp) => <MovieComponent {...rp} />}/>

          <Route path = "/userreviews" render = {(rp) => <UserReview {...rp} />}/>

          <Route path = "/userreviews/:id" render = {(rp) => <AuthMC {...rp} />}/>
=======
          <Route path = "/authlp" render = {(rp) => <h1>dashboard</h1>}/>

          <Route path = "/movcomp" render = {(rp) => <Movie_component {...rp} /> }
          />

          <Route path = "/userreviews" render = {(rp) => <User_reviews {...rp} /> }
          />

          <Route path = "/userreviews/:id" render = {(rp) => <AuthMC {...rp} /> }
          />
>>>>>>> idaEdits

        </Switch>

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
          
      </main>

    </div>
    </GlobalCtx.Provider>

  );
}

export default App;
