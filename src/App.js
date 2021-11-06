import React, { Component, createContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Createv from "./components/Createv";
import Tabs from "./components/Tabs";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { initialState, reducer } from "./reducer/useReducer";
 
export const userContext = createContext();
function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<userContext.Provider value={{ state, dispatch }}>
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
					<Route exact path="/logout">
						<Logout />
					</Route>
					<Route exact path="/">
						<Navbar />
						<Banner />
						<Tabs />
					</Route>
				</Switch>
			</Router>
		</userContext.Provider>
	);
}
export default App;
