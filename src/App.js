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

