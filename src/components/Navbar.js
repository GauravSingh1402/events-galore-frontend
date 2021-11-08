import React, { useContext } from "react";
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
function Navbar() {
	const { state, dispatch } = useContext(userContext);
	const RenderMenu = () => {
		if (state) {
			return (
				<>
					<AppBar elevation={20}>
						<Toolbar className="bar">
							<div>
								<img src={logo} className="logoClass" alt="Events-Galore" />
							</div>
							<h1 class="logotitle">Events Galore</h1>
							<div className="search-bar">
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
							</div>
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
									variant="contained"
									onClick={logoutredirect}
									color="primary"
									startIcon={<LoginIcon />}
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
								<img src={logo} className="logoClass" alt="Events-Galore" />
							</div>
							<h1 class="logotitle">Events Galore</h1>
							{/* <div className="searchb">
					<SearchIcon />
					<TextField className="text" placeholder="Search here" />
				</div> */}
							<div className="search-bar">
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
							</div>
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
									startIcon={<PersonIcon/>}
								>
									<span className="textBesideIcon">Profile</span>
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
