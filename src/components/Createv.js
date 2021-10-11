import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Container,
	Typography,
	Box,
	TextField,
	Button,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
const Input = styled("input")({
	display: "none",
});
const useStyles = makeStyles({
	main: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		["@media(max-width: 900px)"]: {
			flexDirection: "column",
		},
	},
	formInput: {
		marginLeft: "25%",
	},
	container: {
		marginTop: "2%",
	},
	box: {
		display: "flex",
		flexDirection: "column",
		width: "50%",
		["@media(max-width: 900px)"]: {
			width: "100%",
		},
	},
	tfwidth: {
		width: "100%",
	},
	uploadImage: {
		width: "50%",
		["@media(max-width: 900px)"]: {
			width: "100%",
			marginBottom: "5%",
		},
	},
	image: {
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
		width: "50%",
	},
	submitImg: {
		marginTop: "10%",
		marginLeft: "10%",
		marginRight: "10%",
	},
	btn: {
		marginTop: "10%",
		marginLeft: "30%",
		marginRight: "10%",
	},
	submitbtn: {
		marginTop: 20,
		marginBottom: 20,
		fontsize: 20,
		backgroundColor: "#c62828",
		color: "white",
		"&:hover": {
			color: "white",
			backgroundColor: "#ef5350",
		},
	},
	align: {
		display: "flex",
		flexDirection: "row",
	},
});
function Createv() {
	const history = useHistory();
	const callEventPage = async () => {
		try {
			const res = await fetch("/createv", {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				credentials: "include",
			});
			const data = await res.json();
			console.log(data);
			const usernameval = data.username;
			setEvent({ ...event, username: usernameval });
			if (!res.status === 200) {
				throw "invalid attempt";
			}
		} catch (err) {
			console.log(err);
			history.push("/login");
		}
	};

	useEffect(() => {
		callEventPage();
	}, []);

	const [data, setData] = useState("");
	const [loaded, setLoaded] = useState(false);
	const [previewSource, setPreviewSource] = useState(
		"https://cdn.pixabay.com/photo/2017/01/18/17/39/cloud-computing-1990405_960_720.png"
	);

	const handlePhotoInputs = (e) => {
		const file = e.target.files[0];
		previewFile(file);
	};
	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};
	const handleSubmitFile = (e) => {
		e.preventDefault();
		if (!previewSource) return;
		UploadImage(previewSource);
	};
	const UploadImage = async (base64EncodedImage) => {
		try {
			await fetch("/image", {
				method: "POST",
				body: JSON.stringify({ data: base64EncodedImage }),
				headers: { "Content-Type": "application/json" },
			});
		} catch (error) {
			console.log(error);
		}
		getImage();
	};
	const getImage = () => {
		axios("/image")
			.then((response) => {
				console.log(response.data["imageurl"]);
				setEvent({ ...event, image: response.data["imageurl"] });

				setLoaded(true);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	};
	const [event, setEvent] = useState({
		title: "",
		description: "",
		image: "",
		isoffline: "online",
		venue: "",
		link: "",
		date: "",
		time: "",
		eventspeaker: "",
		contact: "",
		ispaid: "free",
		cost: "",
		isfeatured: "no",
		tags: "",
		no_of_users: 0,
		username: "username",
	});
	let name, value;
	const handleInputs = (e) => {
		name = e.target.name;
		value = e.target.value;
		setEvent({ ...event, [name]: value });
	};
	const classes = useStyles();
	const [showVenue, setshowVenue] = useState(false);
	const [showFee, setshowFee] = useState(false);
	const PostData = async (e) => {
		console.log("submitted");
		e.preventDefault();

		const {
			title,
			description,
			image,
			cost,
			venue,
			eventspeaker,
			contact,
			tags,
			ispaid,
			isoffline,
			link,
			isfeatured,
			date,
			time,
			no_of_users,
			username,
		} = event;
		console.log(event);
		const res = await fetch("/createv", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				title,
				description,
				image,
				cost,
				venue,
				eventspeaker,
				contact,
				tags,
				ispaid,
				isoffline,
				link,
				isfeatured,
				date,
				time,
				no_of_users,
				username,
			}),
		});
		const data = await res.json();
		if (res.status === 422 || !data) {
			alert("EVENT CREATION FAILED");
			console.log("EVENT CREATION FAILED");
		}
		if (data.status === 200 || data.status === 201) {
			console.log("ZA WARUDOO!!!!");
			history.push("/");
		} else {
			window.alert("something went wrong");
		}
	};
	return (
		<Container className={classes.container}>
			<form className="form">
				<Typography variant="h3" component="h2" align="center" marginBottom={2}>
					Create Event
				</Typography>
				<Box className={classes.main}>
					<Box className={classes.box}>
						<TextField
							className={classes.tfwidth}
							name="title"
							value={event.title}
							label="Event Title"
							variant="outlined"
							color="secondary"
							margin="normal"
							onChange={handleInputs}
							required
						/>
						<TextField
							className={classes.tfwidth}
							name="description"
							value={event.description}
							label="Description"
							variant="outlined"
							color="secondary"
							multiline
							margin="normal"
							rows="8"
							onChange={handleInputs}
							required
						/>
					</Box>
					<Box className={classes.uploadImage}>
						<br />
						<Typography
							variant="h6"
							component="h2"
							align="center"
							margin="normal"
							mt={2}
						>
							Upload Banner Image
						</Typography>
						<br />
						{previewSource && (
							<img src={previewSource} alt="chosen" className={classes.image} />
						)}
						<label htmlFor="contained-button-file">
							<Input
								accept="image/*"
								id="contained-button-file"
								multiple
								type="file"
								onChange={handlePhotoInputs}
							/>
							<Button
								variant="contained"
								component="span"
								className={classes.btn}
							>
								Upload
							</Button>
						</label>
						<Button
							type="submit"
							className={classes.submitImg}
							color="secondary"
							onClick={handleSubmitFile}
						>
							Submit
						</Button>
					</Box>
				</Box>
				<FormControl component="fieldset">
					<FormLabel component="legend">Mode Of Event Conduction</FormLabel>
					<RadioGroup
						className={classes.align}
						value={event.isoffline}
						name="isoffline"
						onChange={handleInputs}
					>
						<FormControlLabel
							value="online"
							control={<Radio />}
							label="Online"
							onClick={() => setshowVenue(false)}
						/>
						<FormControlLabel
							value="offline"
							control={<Radio />}
							label="Offline"
							onClick={() => setshowVenue(true)}
						/>
					</RadioGroup>
				</FormControl>
				{showVenue ? (
					<TextField
						className={classes.tfwidth}
						name="venue"
						value={event.venue}
						label="Venue"
						variant="outlined"
						color="secondary"
						multiline
						margin="normal"
						rows="6"
						onChange={handleInputs}
						required
					/>
				) : (
					<TextField
						name="link"
						className={classes.tfwidth}
						value={event.link}
						label="Zoom App or Google Meet Link"
						variant="outlined"
						color="secondary"
						margin="normal"
						onChange={handleInputs}
						required
					/>
				)}
				<br />
				<br />
				<TextField
					label="Event Date"
					value={event.date}
					variant="outlined"
					color="secondary"
					name="date"
					type="date"
					onChange={handleInputs}
					required
					focused
				/>
				<br />
				<br />
				<TextField
					label="Event Time"
					value={event.time}
					variant="outlined"
					color="secondary"
					name="time"
					type="time"
					onChange={handleInputs}
					required
					focused
				/>
				<br />
				<br />
				<TextField
					className={classes.tfwidth}
					name="eventspeaker"
					value={event.eventspeaker}
					label="Event Speaker"
					variant="outlined"
					color="secondary"
					margin="normal"
					onChange={handleInputs}
					required
				/>
				<TextField
					type="email"
					name="contact"
					className={classes.tfwidth}
					value={event.contact}
					label="Contact email for requiry"
					variant="outlined"
					color="secondary"
					margin="normal"
					onChange={handleInputs}
					required
				/>
				<FormControl component="fieldset">
					<FormLabel component="legend">Event Type</FormLabel>
					<RadioGroup
						className={classes.align}
						value={event.ispaid}
						name="ispaid"
						onChange={handleInputs}
					>
						<FormControlLabel
							value="free"
							control={<Radio />}
							label="Free"
							onClick={() => setshowFee(false)}
						/>
						<FormControlLabel
							value="paid"
							control={<Radio />}
							label="Paid"
							onClick={() => setshowFee(true)}
						/>
					</RadioGroup>
				</FormControl>
				<br />
				{showFee ? (
					<TextField
						label="Enter Registration Fee"
						name="cost"
						value={event.cost}
						variant="outlined"
						color="secondary"
						margin="normal"
						InputProps={{
							startAdornment: (
								<InputAdornment>
									{" "}
									<IconButton>
										{" "}
										<AttachMoneyIcon />
									</IconButton>
								</InputAdornment>
							),
						}}
						onChange={handleInputs}
						required
					/>
				) : null}
				<br />
				<FormControl component="fieldset">
					<FormLabel component="legend">Featured Event</FormLabel>
					<RadioGroup
						className={classes.align}
						value={event.isfeatured}
						name="isfeatured"
						onChange={handleInputs}
					>
						<FormControlLabel value="yes" control={<Radio />} label="Yes" />
						<FormControlLabel value="no" control={<Radio />} label="No" />
					</RadioGroup>
				</FormControl>
				<TextField
					name="tags"
					value={event.tags}
					className={classes.tfwidth}
					label="Tags"
					variant="outlined"
					color="secondary"
					multiline
					margin="normal"
					rows="6"
					onChange={handleInputs}
					required
				/>
				<Button
					className={classes.submitbtn}
					type="submit"
					variant="contained"
					color="secondary"
					endIcon={<KeyboardArrowRightIcon />}
					onClick={PostData}
				>
					Submit
				</Button>
				<h1>{data.id}</h1>
			</form>
		</Container>
	);
}

export default Createv;
