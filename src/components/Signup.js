import React, { useState } from "react";
import { Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";
export default function Signup() {
	const [showPassword, setShowPassword] = useState(false);
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
									fullWidth
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									variant="outlined"
									label="Last Name"
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									variant="outlined"
									label="Username"
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									type="email"
									variant="outlined"
									label="Email Address"
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									type={showPassword ? "text" : "password"}
									variant="outlined"
									label="Password"
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
								<Button variant="contained" color="primary" fullWidth>
									Sign up
								</Button>
							</Grid>
							<Grid item xs={12} textAlign="center">
								<Link variant="body2" href="#">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</div>
	);
}
