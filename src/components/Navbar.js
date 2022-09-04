import React, { useContext, useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@mui/icons-material/Person";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./Navbar.css";
import { useHistory, Link } from "react-router-dom";
import { userContext } from "../App";
import logo from "../logo.png";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LoginIcon from "@mui/icons-material/Login";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
function Navbar() {
	const history = useHistory();
	const linkk="https://event191407.herokuapp.com/"
	const { state, dispatch } = useContext(userContext);
	const [contextState, setContextState] = useState(() => {
		if (state !== null) {
			window.localStorage.setItem("state", state);
			return state;
		}
	});
	useEffect(() => {
		if (state !== null) {
			setContextState(state);
			window.localStorage.setItem("state", contextState);
		}
	}, [state]);
	const RenderMenu = () => {
		if (JSON.parse(window.localStorage.getItem("state"))) {
			return (
				<>
					<AppBar elevation={2}>
						<Toolbar className="bar">
							<div>
								<img
									onClick={() => {
										history.push("/");
									}}
									src={logo}
									className="logoClass"
									alt="Events-Galore"
								/>
							</div>
							<h1
								onClick={() => {
									history.push("/");
								}}
								class="logotitle"
							>
								Events Galore
							</h1>
							{/* <div className="search-bar">
								<TextField
									fullWidth
									id="filled-basic"
									placeholder="Search..."
									variant="filled"
									hiddenLabel
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<SearchOutlinedIcon  className="searchIcon" />
											</InputAdornment>
										),
									}}
								/>
							</div> */}
							<div className="container">
								<Button
									onClick={create_event}
									variant="contained"
									color="primary"
									startIcon={<AddCircleOutlineIcon />}
								>
									<span className="textBesideIcon">CREATE EVENT</span>
								</Button>
								<Button
									onClick={myprofile}
									variant="contained"
									color="primary"
									startIcon={<PersonIcon />}
								>
									<span className="textBesideIcon">Profile</span>
								</Button>
								<Button
									variant="contained"
									onClick={logoutredirect}
									color="primary"
									startIcon={<ExitToAppOutlinedIcon />}
								>
									Logout
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
								<img
									onClick={() => {
										history.push("/");
									}}
									src={logo}
									className="logoClass"
									alt="Events-Galore"
								/>
							</div>
							<h1
								onClick={() => {
									history.push("/");
								}}
								class="logotitle"
							>
								Events Galore
							</h1>
							{/* <div className="searchb">
					<SearchIcon />
					<TextField className="text" placeholder="Search here" />
				</div> */}
							{/* <div className="search-bar">
								<TextField
									fullWidth
									id="filled-basic"
									placeholder="Search..."
									variant="filled"
									hiddenLabel
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<SearchOutlinedIcon className="searchIcon" />
											</InputAdornment>
										),
									}}
								/>
							</div> */}
							<div className="container">
								<Button
									onClick={create_event}
									variant="contained"
									color="primary"
									startIcon={<AddCircleOutlineIcon />}
								>
									<span className="textBesideIcon">CREATE EVENT</span>
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
									onClick={signupredirect}
									color="primary"
									startIcon={<LockOpenOutlinedIcon />}
								>
									SignUp
								</Button>
								<Button
									variant="contained"
									onClick={loginredirect}
									color="primary"
									startIcon={<LoginIcon />}
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
	function signupredirect() {
		history.push("/signup");
	}
	function logoutredirect() {
		history.push("/logout");
	}

	return <RenderMenu />;
}

export default Navbar;
