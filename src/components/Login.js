import React, { useState, useContext } from "react";
import { Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userContext } from "../App";
export default function Signup() {
	const { state, dispatch } = useContext(userContext);
	const history = useHistory();
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const linkk="https://event191407.herokuapp.com/"
	const handleLogin = async (e) => {
		e.preventDefault();
		if (!email || !password) {
			toast.warn("Please fill all the credentials");
		} else {
			const res = await fetch(`${linkk}login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});
			const data = await res.json();
			if (res.status === 400 || !data) {
				toast.error("Invalid Login");
			} else {
				dispatch({ type: "USER", payload: true });
				toast.success("Login successful", {
					position: "top-center",
					autoClose: 3000,
				});
				setTimeout(() => {
					history.push("/");
				}, 3000);
			}
		}
	};
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
					<Typography variant="h5">Log In</Typography>
					<Box component="form" mt={3}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									required
									type="email"
									variant="outlined"
									label="Email Address"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									type={showPassword ? "text" : "password"}
									variant="outlined"
									label="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
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
							{/* <Grid item xs={12}>
								<FormControlLabel
									control={<Checkbox />}
									label="Remember me"
								></FormControlLabel>
							</Grid> */}
							<Grid item xs={12}>
								<Button
									variant="contained"
									color="primary"
									onClick={handleLogin}
									fullWidth
								>
									Log In
								</Button>
							</Grid>
							<Grid item xs={12} textAlign="center">
								<NavLink variant="body2" to="/signup">
									New Here? Sign Up
								</NavLink>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
			<ToastContainer></ToastContainer>
		</div>
	);
}
