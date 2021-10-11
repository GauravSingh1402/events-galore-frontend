import React from "react";
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

function Navbar() {
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

	return (
		<AppBar>
			<Toolbar className="bar">
				<div>
					<Typography variant="h6" className="root">
						EVENTS GALORE
					</Typography>
				</div>
				<div className="searchb">
					<SearchIcon />
					<TextField className="text" placeholder="Search here" />
				</div>
				<div className="container">
					<Button onClick={create_event} variant="outlined">
						CREATE EVENT
					</Button>
					<Button variant="outlined" onClick={myprofile}>
						My Profile{" "}
					</Button>
					<div className="hamburger-menu">
						<ul>
							<li>EDIT PROFILE</li>
							<li>CREATE EVENT</li>
							<li>ATTENDING EVENTS</li>
							<li>LOGOUT</li>
						</ul>
					</div>
					<Button variant="outlined" onClick={history.push("/login")}>Login</Button>
					<Button variant="outlined">Logout</Button>
				</div>
				<div className="hamburger">
					<IconButton onClick={handleClick}>
						<MenuIcon />
					</IconButton>
					<Menu
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
					</Menu>
				</div>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
