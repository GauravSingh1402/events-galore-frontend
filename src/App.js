<<<<<<< HEAD
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Createv from './components/Createv'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class App extends Component {
    render() {
        return (
        <Router>
            <Switch>
            <Route exact path="/createv">
              <Createv />
            </Route>
            <Route exact path="/">
              <Navbar />
              <Banner />
            </Route>
          </Switch>
      </Router>
        )
    }
}

export default App;
=======
import CreateEvent from "./components/CreatEvent";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SectionHeading from "./components/Tabs";
import Banner from "./components/Banner";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#f44336',
    }
  },
});
function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <Banner />
            <SectionHeading />
          </Route>
          <Route path="/create">
            <CreateEvent />
          </Route>
		  <Route path="/login">
            <Login />
          </Route>
		  <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;

>>>>>>> 175f17623386ffc88490da54a02e1b48c1797f72
