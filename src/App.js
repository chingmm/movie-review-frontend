import React, { useState } from 'react';
import logo from './logo.svg';
import Header from "./components/Header"
import Signup from "./pages/signup"
import Login from "./pages/login"
import Home from "./pages/LandingPage"
import Dashboard from "./pages/AuthLP"
import MovieDisplay from "./pages/MovieDisplay"
import MovieDetails from "./pages/MovieDetails"
import MovieResults from "./pages/MovieResults"
import MovieSearch from "./pages/MovieSearch"
import {getPoster, getSearchedInfo, getMovie } from './services/apihelper'
import { NavLink } from 'react-router-dom'

import Container from "react-bootstrap/Container"
import {Route, Link, Switch} from "react-router-dom"
import './App.css';



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
      <h1 className="app-title">ZEN MOVIE <span>REVIEWS </span></h1> </Link>
      </row>
      </Container>

      <Header/>

      <main>
        <Switch>
          <Route exact path = "/register" render = {(rp) => gState.token ? <Dashboard /> : <Home/>}/>

          <Route path = "/signup" render = {(rp) => <Signup {...rp} />}/>

          <Route path = "/login" render = {(rp) =>
            <Login {...rp} />}
          />
          
          <Route path = "/dashboard" render = {(rp) => <h1>dashboard</h1>}/>

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
