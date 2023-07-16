import React, { useState } from "react";
import { Container, TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { IconButton } from "@material-ui/core";
import { useHistory, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
export default function Signup() {
	const history = useHistory();
	const linkk = "https://events-galore-backend.onrender.com/";
	const [showPassword, setShowPassword] = useState(false);
	const [state, setState] = useState({
		firstname: "",
		lastname: "",
		username: "",
		email: "",
		password: "",
	});
	function handleChange(e) {
		e.preventDefault();
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
	}
	async function handleSubmit(e) {
		e.preventDefault();
		const { firstname, lastname, username, email, password } = state;
		if (!firstname || !lastname || !username || !email || !password) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Please enter all fields!",
			});
		} else {
			const res = await fetch(`${linkk}register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					firstname,
					lastname,
					username,
					email,
					password,
				}),
			});
			const data = await res.json();
			if (res.status === 422 || !data) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Invalid Email or Password!",
				});
			} else {
				Swal.fire({
					icon: "success",
					title: "Success...",
					text: "Registered Successfully!",
				});
				setTimeout(() => {
					history.push("/login");
				}, 3000);
			}
		}
	}
	return (
		<div>
			<Container maxWidth="xs">
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						mt: 8,
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
						<LockIcon />
					</Avatar>
					<Typography variant="h5">Sign Up</Typography>
					<Box component="form" mt={3} autoComplete="off">
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									variant="outlined"
									label="First Name"
									value={state.firstname}
									name="firstname"
									onChange={handleChange}
									fullWidth
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									variant="outlined"
									label="Last Name"
									value={state.lastname}
									name="lastname"
									onChange={handleChange}
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									variant="outlined"
									label="Username"
									value={state.username}
									name="username"
									onChange={handleChange}
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									type="email"
									variant="outlined"
									label="Email Address"
									value={state.email}
									name="email"
									onChange={handleChange}
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									type={showPassword ? "text" : "password"}
									variant="outlined"
									label="Password"
									value={state.password}
									name="password"
									onChange={handleChange}
									fullWidth
									InputProps={{
										endAdornment: (
											<IconButton
												onClick={() => {
													setShowPassword(!showPassword);
												}}
											>
												<VisibilityIcon />
											</IconButton>
										),
									}}
								/>
							</Grid>
							<Grid item xs={12}>
								<Button
									variant="contained"
									color="primary"
									onClick={handleSubmit}
									fullWidth
								>
									Sign up
								</Button>
							</Grid>
							<Grid item xs={12} textAlign="center">
								<NavLink variant="body2" to="/login">
									<p align="center">Already have an account? Sign in</p>
								</NavLink>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</div>
	);
}
