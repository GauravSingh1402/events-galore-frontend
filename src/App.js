import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Createv from './components/Createv'
import SectionHeading from './components/Tabs'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import EventPage from './components/EventPage'

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
              <SectionHeading />
            </Route>
            <Route exact path="/eventpage">
              <EventPage/>
            </Route>
          </Switch>
      </Router>
        )
    }
}

export default App;
