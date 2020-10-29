import React from 'react';
import logo from './logo.svg';
import Header from "./components/Header"
import Signup from "./pages/signup"
import Login from "./pages/login"
import Home from "./pages/LandingPage"
import AuthLP from "./pages/AuthLP"

import Container from "react-bootstrap/Container"
import {Route, Link, Switch} from "react-router-dom"
import './App.css';
import Movie_component from './pages/movie_component';
import User_reviews from './pages/user_reviews';
import AuthMC from './pages/AuthMC';
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
          <Route exact path = "/" render = {(rp) => gState.token ? <AuthLP /> : <Home/>}/>

          <Route path = "/signup" render = {(rp) => <Signup {...rp} />}/>

          <Route path = "/login" render = {(rp) =>
          <Login {...rp} />}
          />
          
          <Route path = "/authlp" render = {(rp) => <h1>dashboard</h1>}/>

          <Route path = "/movcomp" render = {(rp) => <Movie_component {...rp} /> }
          />

          <Route path = "/userreviews" render = {(rp) => <User_reviews {...rp} /> }
          />

          <Route path = "/userreviews/:id" render = {(rp) => <AuthMC {...rp} /> }
          />

        </Switch>
      </main>
    </div>
    </GlobalCtx.Provider>

  );
}

export default App;
