import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./Navbar.css";
import { useHistory, Link } from "react-router-dom";
import { userContext } from "../App";
import logo from "../logo.png";
function Navbar() {
	const { state, dispatch } = useContext(userContext);
	const RenderMenu = () => {
		if (state) {
			return (
				<>
					<AppBar>
						<Toolbar className="bar">
							<div>
								<img src={logo} className="logoClass" alt="Events-Galore" />
							</div>
								<h1 class="logotitle">EVENTS GALORE</h1>
							{/* <div className="searchb">
					<SearchIcon />
					<TextField className="text" placeholder="Search here" />
				</div> */}
							<div className="container">
								<Button
									onClick={create_event}
									variant="contained"
									color="{primary.dark}"
								>
									CREATE EVENT
								</Button>
								{/* <Button variant="contained" onClick={myprofile}>
						My Profile{" "}
					</Button> */}
								{/* <div className="hamburger-menu">
						<ul>
							<li>EDIT PROFILE</li>
							<li>CREATE EVENT</li>
							<li>ATTENDING EVENTS</li>
							<li>LOGOUT</li>
						</ul>
					</div> */}
								<Button
									variant="contained"
									onClick={logoutredirect}
									color="primary"
								>
									Logout
								</Button>
							</div>
							{/* <div className="hamburger">
								<IconButton onClick={handleClick}>
									<MenuIcon />
								</IconButton> */}
							{/* <Menu
						id="demo-positioned-menu"
						aria-labelledby="demo-positioned-button"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						anchorOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
					>
						<MenuItem onClick={handleClose}>Edit Profile</MenuItem>
						<MenuItem onClick={handleClose}>Create Event</MenuItem>
						<MenuItem onclick={handleClose}>Attending Events</MenuItem>
						<MenuItem onClick={handleClose}>Logout</MenuItem>
					</Menu> */}
							{/* </div> */}
						</Toolbar>
					</AppBar>
				</>
			);
		} else {
			return (
				<>
					<AppBar>
						<Toolbar className="bar">
							<div>
								<img src={logo} className="logoClass" alt="Events-Galore" />
							</div>
								<h1 class="logotitle">EVENTS GALORE</h1>	
							{/* <div className="searchb">
					<SearchIcon />
					<TextField className="text" placeholder="Search here" />
				</div> */}
							<div className="container">
								<Button
									onClick={create_event}
									variant="contained"
									color="primary"
								>
									CREATE EVENT
								</Button>
								{/* <Button  color="primary" onClick={myprofile}>
						My Profile{" "}
					</Button> */}
								{/* <div className="hamburger-menu">
						<ul>
							<li>EDIT PROFILE</li>
							<li>CREATE EVENT</li>
							<li>ATTENDING EVENTS</li>
							<li>LOGOUT</li>
						</ul>
					</div> */}
								<Button
									variant="contained"
									onClick={loginredirect}
									color="primary"
								>
									Login
								</Button>
							</div>
							{/* <div className="hamburger">
								<IconButton onClick={handleClick}>
									<MenuIcon />
								</IconButton> */}
							{/* <Menu
						id="demo-positioned-menu"
						aria-labelledby="demo-positioned-button"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						anchorOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
					>
						<MenuItem onClick={handleClose}>Edit Profile</MenuItem>
						<MenuItem onClick={handleClose}>Create Event</MenuItem>
						<MenuItem onclick={handleClose}>Attending Events</MenuItem>
						<MenuItem onClick={handleClose}>Logout</MenuItem>
					</Menu> */}
							{/* </div> */}
						</Toolbar>
					</AppBar>
				</>
			);
		}
	};

	const history = useHistory();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	function create_event() {
		history.push("/createv");
	}
	function myprofile() {
		history.push("/profile");
	}
	function loginredirect() {
		history.push("/login");
	}
	function logoutredirect() {
		history.push("/logout");
	}

	return <RenderMenu />;
}

export default Navbar;
