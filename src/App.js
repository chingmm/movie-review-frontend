import React from 'react';
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

import Container from "react-bootstrap/Container"
import {Route, Link, Switch} from "react-router-dom"
import './App.css';
import SignupLogin from './pages/signup';




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
      <Title/>
      {/* <h1 className="app-title">ZEN MOVIE <span>REVIEWS </span></h1>  */}
      </Link>
      </row>
      </Container>

      <Header/>

      <main>
        <Switch>
          <Route exact path = "/lp" render = {(rp) => gState.token ? <AuthLP /> : <Home/>}/>

          <Route path = "/register" render = {(rp) => <SignupLogin {...rp} />}/>
          
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
