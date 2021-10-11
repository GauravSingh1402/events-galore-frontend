import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Createv from "./components/Createv";
import Tabs from "./components/Tabs";
import NoteCard from "./components/NoteCard";
import Signup from "./components/Signup";
import Login from "./components/Login";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/createv">
						<Createv />
					</Route>
					<Route exact path="/signup">
						<Signup />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/">
						<Navbar />
						<Banner />
						<Tabs />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
