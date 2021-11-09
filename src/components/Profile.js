import React, { useState, useEffect } from "react";
import "./Profile.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useHistory } from "react-router";

export default function Profile() {
	const history = useHistory();
	const [userInfo, setUserInfo] = useState({});
	const callProfilePage = async () => {
		try {
			const res = await fetch("/profile", {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				credentials: "include",
			});
			const data = await res.json();
			console.log(data);
			setUserInfo(data);

			if (!res.status === 200) {
				throw "invalid attempt";
			}
		} catch (err) {
			console.log(err);
			history.push("/login");
		}
	};
	useEffect(() => {
		callProfilePage();
	}, []);
	return (
		<div>
			<Box className="form">
				<div className="title">
					<AccountCircleIcon
						style={{ fontSize: 55, marginRight: 10 }}
						className="icon"
					/>
					<Typography style={{ fontSize: 40 }} className="text" variant="h2">
						{" "}
						Welcome Back, {userInfo.username}!
					</Typography>
				</div>

				<div className="detail">
					<Typography
						style={{ marginRight: 80 }}
						className="label"
						variant="h5"
					>
						First Name:
					</Typography>
					<TextField
						value={userInfo.firstname}
						style={{ width: 750, backgroundColor: "white" }}
						variant="outlined"
					></TextField>
				</div>
				<div className="detail">
					<Typography
						style={{ marginRight: 80 }}
						className="label"
						variant="h5"
					>
						Last Name:
					</Typography>
					<TextField
						value={userInfo.lastname}
						style={{ width: 750, backgroundColor: "white" }}
						variant="outlined"
					></TextField>
				</div>
				<div className="detail">
					<Typography
						style={{ marginRight: 140 }}
						className="label"
						variant="h5"
					>
						Email:
					</Typography>
					<TextField
						value={userInfo.email}
						style={{ width: 750, backgroundColor: "white" }}
						variant="outlined"
					></TextField>
				</div>
				<div className="detail">
					<Typography
						style={{ marginRight: 90 }}
						className="label"
						variant="h5"
					>
						Password:
					</Typography>
					<TextField
						placeholder="Type a new password and submit this form to change"
						style={{ width: 750, backgroundColor: "white" }}
						variant="outlined"
					></TextField>
				</div>
				<div className="submit">
					<Button
						variant="contained"
						style={{ fontSize: 15 }}
						color="primary"
						endIcon={<ArrowRightAltIcon />}
						size="large"
					>
						UPDATE DETAILS
					</Button>
				</div>
			</Box>
		</div>
	);
}
