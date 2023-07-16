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
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import GooglePayButton from "@google-pay/button-react";
import Razorpay from "razorpay";
import Swal from "sweetalert2";
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
	color: {
		color: "red",
		fontSize: "20px",
	},
	container: {
		marginTop: "2%",
		backgroundColor: "white",
		marginBottom: "2%",
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
		backgroundColor: "white",
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
		marginRight: 20,
		width: 100,
	},
	buttonContainer: {
		display: "flex",
	},
	align: {
		display: "flex",
		flexDirection: "row",
	},
	wrapper: {
		width: "496px",
		background: "#fff",
		borderRadius: "10px",
		padding: "18px 25px 20px",
		boxShadow: "0 0 30px rgba(0,0,0,0.06)",
		"&::where(.title, li, li i, .details)": {
			display: "flex",
			alignItems: "center",
		},
	},
	title: {
		"& img": {
			maxWidth: "21px",
		},
		"& h2": {
			fontSize: "21px",
			fontWeight: "600",
			marginLeft: "8px",
		},
	},
	content: {
		"& p": {
			fontSize: "15px",
		},
		"& ul": {
			display: "flex",
			flexWrap: "wrap",
			padding: "7px",
			margin: "12px 0",
			borderRadius: "5px",
			border: "1px solid #a6a6a6",
			"& li": {
				color: "#333",
				margin: "4px 3px",
				listStyle: "none",
				borderRadius: "5px",
				background: "#F2F2F2",
				padding: "5px 8px 5px 10px",
				border: "1px solid #e3e1e1",
				"& i": {
					height: "20px",
					width: "20px",
					color: "#808080",
					marginLeft: "8px",
					fontSize: "12px",
					cursor: "pointer",
					borderRadius: "50%",
					background: "#dfdfdf",
					justifyContent: "center",
				},
			},
			"& input": {
				flex: 1,
				padding: "5px",
				border: "none",
				outline: "none",
				fontSize: "16px",
			},
		},
	},
	content: {
		margin: "10px 0",
	},
	details: {
		justifyContent: "space-between",
	},
	details: {
		"& button": {
			border: "none",
			outline: "none",
			color: "#fff",
			fontSize: "14px",
			cursor: "pointer",
			padding: "9px 15px",
			borderRadius: "5px",
			background: "#5372F0",
			transition: "background 0.3s ease",
			"&:hover": {
				background: "#2c52ed",
			},
		},
	},

	tagsInput: {
		display: "flex",
		alignItems: "flex-start",
		flexWrap: "wrap",
		backgroundColor: "white",
		minHeight: "48px",
		width: "100%",
		padding: "0 8px",
		border: "1px solid rgb(214, 216, 218)",
		borderRadius: "6px",
		"&:focus-within": {
			border: "1px solid red",
		},
		"& input": {
			flex: 1,
			border: "none",
			height: "46px",
			fontSize: "14px",
			padding: "4px 0 0 0",
			backgroundColor: "white",
			"&:focus": {
				outline: "transparent",
			},
		},
	},
	tags: {
		display: "flex",
		flexWrap: "wrap",
		padding: 0,
		margin: "8px 0 0 0",
	},
	tag: {
		width: "auto",
		height: "32px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: "#fff",
		padding: "0 8px",
		fontSize: "14px",
		listStyle: "none",
		borderRadius: "6px",
		margin: "0 8px 8px 0",
		background: "#0052cc",
	},
	tagTitle: {
		marginTop: "3px",
	},
	tagCloseIcon: {
		display: "block",
		width: "16px",
		height: "16px",
		lineHeight: "16px",
		textAlign: "center",
		fontSize: "14px",
		marginLeft: "8px",
		color: "#0052cc",
		borderRadius: "50%",
		background: "#fff",
		cursor: "pointer",
	},
	createvent: {
		color: "#2196f3",
	},
});
function Createv() {
	const history = useHistory();
	let rupee = 100;
	const linkk = "https://events-galore-backend.onrender.com/";
	const [wtag, setTags] = React.useState([]);
	const addTags = (eve) => {
		if (eve.target.value != "") {
			setTags([...wtag, eve.target.value]);
			eve.target.value = "";
		}
		setEvent({ ...event, tags: wtag });
	};
	const removeTags = (tagToBeRemoved) => {
		setTags(wtag.filter((_, index) => index != tagToBeRemoved));
	};
	const callEventPage = async () => {
		try {
			const res = await fetch(`${linkk}createv`, {
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
			await fetch(`${linkk}image`, {
				method: "POST",
				body: JSON.stringify({ data: base64EncodedImage }),
				headers: { "Content-Type": "application/json" },
				limit: "100mb",
			});
		} catch (error) {
			console.log(error);
		}
		getImage();
	};
	const getImage = () => {
		axios(`${linkk}image`)
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
		tags: ["tags", "event"],
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
	const [showPayButton, setshowPayButton] = useState(false);
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
		if (
			!title ||
			!description ||
			!image ||
			!eventspeaker ||
			!contact ||
			!isfeatured ||
			!date ||
			!time ||
			!username
		) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Please enter all fields!",
			});
		} else {
			const res = await fetch(`${linkk}createv`, {
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
			if (res.status === 400 || !data) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Invalid Event!",
				});
				console.log("EVENT CREATION FAILED");
			} else if (res.status === 200 || res.status === 201) {
				Swal.fire({
					icon: "success",
					title: "Success...",
					text: "Event Created!",
				});
				setTimeout(() => {
					history.push("/");
				}, 3000);
				console.log("ZA WARUDOO!!!!");
			} else {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Invalid Event!",
				});
			}
		}
	};

	const initPayment = (data) => {
		const options = {
			key: "rzp_test_ozydJ2C7b7oxqD",
			amount: data.amount,
			currency: data.currency,
			name: "Featured Event",
			description: "BANNER EVENT PRICE",
			image: "",
			order_id: data.id,
			handler: async (response) => {
				try {
					const { data } = await axios.post(`${linkk}verify`, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};
	const handlePayment = async () => {
		try {
			const { data } = await axios.post(`${linkk}payment`, { amount: rupee });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container className={classes.container}>
			<Typography
				className={classes.createvent}
				variant="h3"
				component="h2"
				align="center"
				marginTop={10}
			>
				Create Event
			</Typography>
			<form className="form">
				<Box className={classes.main}>
					<Box className={classes.box}>
						<TextField
							className={classes.tfwidth}
							name="title"
							value={event.title}
							label="Event Title"
							variant="outlined"
							margin="normal"
							color="secondary"
							onChange={handleInputs}
							sx={{ backgroundColor: "white" }}
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
					<FormLabel component="legend" className={classes.color}>
						Mode Of Event Conduction
					</FormLabel>
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
						multiline
						margin="normal"
						color="secondary"
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
						margin="normal"
						color="secondary"
						onChange={handleInputs}
						required
					/>
				)}
				<Typography className={classes.color}>Event Date and Time:</Typography>
				<br />
				<div className={classes.buttonContainer}>
					<TextField
						label="Event Date"
						value={event.date}
						variant="outlined"
						color="secondary"
						name="date"
						type="date"
						className={classes.tfwidth}
						onChange={handleInputs}
						required
						focused
					/>
					&nbsp;&nbsp;
					<TextField
						label="Event Time"
						value={event.time}
						variant="outlined"
						color="secondary"
						className={classes.tfwidth}
						name="time"
						type="time"
						onChange={handleInputs}
						required
						focused
					/>
				</div>
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
					<FormLabel component="legend" className={classes.color}>
						Event Type
					</FormLabel>
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
				<FormControl component="fieldset">
					<FormLabel component="legend" className={classes.color}>
						Featured Event
					</FormLabel>
					<RadioGroup
						className={classes.align}
						value={event.isfeatured}
						name="isfeatured"
						onChange={handleInputs}
					>
						<FormControlLabel
							value="yes"
							control={<Radio />}
							label="Yes"
							// onClick={() => setshowPayButton(true)}
							onClick={() => setshowPayButton(false)}
						/>
						<FormControlLabel
							value="no"
							control={<Radio />}
							label="No"
							onClick={() => setshowPayButton(false)}
						/>
					</RadioGroup>
				</FormControl>
				<Typography className={classes.color}>Tags</Typography>
				<div className={classes.tagsInput}>
					<ul className={classes.tags}>
						{wtag.map((tag, index) => (
							<li key={index} className={classes.tag}>
								<span className={classes.tagTitle}>{tag}</span>
								<span
									className={classes.tagCloseIcon}
									onClick={() => removeTags(index)}
								>
									x
								</span>
							</li>
						))}
					</ul>
					<input
						type="text"
						onKeyUp={(e) => (e.keyCode == 32 ? addTags(e) : null)}
						placeholder="Press space to add tags"
					/>
				</div>
				<br />
				<div className={classes.buttonContainer}>
					{showPayButton ? (
						<Button onClick={handlePayment}>BUY NOW</Button>
					) : (
						<Button
							className={classes.submitbtn}
							type="submit"
							variant="contained"
							color="primary"
							endIcon={<KeyboardArrowRightIcon />}
							onClick={PostData}
						>
							Submit
						</Button>
					)}
					&nbsp;&nbsp;
					<Button
						className={classes.submitbtn}
						variant="contained"
						color="secondary"
						endIcon={<CancelOutlinedIcon />}
						onClick={() => {
							history.push("/");
						}}
					>
						CANCEL
					</Button>
				</div>
				<br />
			</form>
		</Container>
	);
}

export default Createv;
