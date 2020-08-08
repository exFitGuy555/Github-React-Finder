import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Alert from "./Components/Layout/Alert";
import About from "./Components/Pages/About";
import User from "./Components/Users/User";
import Home from "./Components/Pages/Home"
import GithubState from './Context/Github/GithubState'
import AlertState from './Context/Alert/AlertState'
import NotFound from './Components/Pages/NotFound'

const App = () => {
    return (
      <GithubState>
        < AlertState>
      <Router>
        <div className="App">
          <Navbar icon="fab fa-github" title="Github Finder" />
          <div className="container">
            <Alert  />
            <Switch>
              <Route
                exact
                path="/"
                component={Home}
              /> 
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                component={User}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
      </GithubState>
    );
}

export default App;
