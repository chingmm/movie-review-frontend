import React from 'react';
import logo from './logo.svg';
import Header from "./components/Header"
import Signup from "./pages/signup"
import Login from "./pages/login"
import Home from "./pages/LandingPage"
import Dashboard from "./pages/AuthLP"

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
          <Route exact path = "/" render = {(rp) => gState.token ? <Dashboard /> : <Home/>}/>

          <Route path = "/signup" render = {(rp) => <Signup {...rp} />}/>

          <Route path = "/login" render = {(rp) =>
          <Login {...rp} />}
          />
          
          <Route path = "/dashboard" render = {(rp) => <h1>dashboard</h1>}/>

        </Switch>
      </main>
    </div>
    </GlobalCtx.Provider>

  );
}

export default App;
