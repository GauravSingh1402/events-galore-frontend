import React, { useState, useEffect } from "react";
import "./Profile.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import axios from "axios";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

export default function Profile() {
	const history = useHistory();
	const [data, setData] = useState("");
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
	var usern = userInfo.username;
	console.log(usern);
	const Userevent = async () => {
		console.log(usern);
		console.log("sending");
		try {
			await fetch("/userevent", {
				method: "POST",
				body: JSON.stringify({ usern }),
				headers: { "Content-Type": "application/json" },
				limit: "50mb",
			});
		} catch (error) {
			console.log(error);
		}

		console.log("sent");
	};
	Userevent();

	useEffect(() => {
		callProfilePage();
	}, []);
	useEffect(() => {
		Userevent();
	}, []);
/*To comment*/
	const PostData = async (e) => {
		console.log("submitted");
		// e.preventDefault();

		const { firstname, lastname, username, email, password } = userInfo;
		const res = await fetch("/profile", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
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
			alert("User Update Failed");
			console.log("User Update Failed");
		}
		if (data.status === 200 || data.status === 201) {
			toast.success("Uesr updated", {
				position: "top-center",
				autoClose: 3000,
			});

			console.log("ZA WARUDOO!!!!");
		} else {
			window.alert("User updation failed");
		}
	};
/*To comment*/
/*Remove update button, remove onChange attr, make value as placeholder and/or textfield disabled*/
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
						onChange={(e) =>
							setUserInfo({ ...userInfo, firstname: e.target.value })
						}
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
						onChange={(e) =>
							setUserInfo({ ...userInfo, lastname: e.target.value })
						}
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
						onChange={(e) =>
							setUserInfo({ ...userInfo, email: e.target.value })
						}
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
						onClick={PostData}
					>
						UPDATE DETAILS
					</Button>
				</div>
			</Box>
		</div>
	);
}
