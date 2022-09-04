import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@material-ui/core";
import { Button, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@mui/icons-material/Person";
import Chip from "@mui/material/Chip";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RoomIcon from "@mui/icons-material/Room";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Axios from "axios";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import GooglePayButton from "@google-pay/button-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const useStyles = makeStyles((theme) => ({
	notetitle: {
		fontSize: "25px",
		fontWeight: "bold",
		margin: 0,
	},
	noteDescription: {
		fontSize: "17px",
		margin: 0,
	},
	media: {
		height: 180,
		marginTop: 0,
	},
	flexing: {
		display: "flex",
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	flexingagain: {
		display: "flex",
		flexDirection: "row",
	},
	why: {
		fontSize: "20px",
		"&::first-letter": {
			textTransform: "uppercase",
		},
	},
	btn: {
		marginRight: 10,
		marginBottom: 10,
		float: "right",
		backgroundColor: "#2196f3",
		color: "white",
		fontSize: "15px",
		paddingLeft: "45px",
		paddingRight: "45px",
		borderRadius: "10px",
		"&:hover": {
			color: "white",
			backgroundColor: "#1b75bd",
		},
	},
	margins: {
		marginLeft: 2,
		marginBottom: 5,
	},
	date: {
		color: "#2196f3",
	},
	lastBox: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	eventdetail: {
		height: "30em",
		marginTop: "30em",
		height: "50em",
		backgroundColor: "#DDDDDD",
		zIndex: 2,
	},
	eventalign: {
		display: "flex",
		flexDirection: "row",
		height: "65em",
		position: "absolute",
		top: "10em",
		marginLeft: "1.5em",
		zIndex: 2,
	},
	eventimage: {
		width: "65%",
		zIndex: 2,
		borderRadius: "2rem 0 0 2rem",
		backgroundColor: "white",
		height: "100%",
	},
	eventbanner: {
		borderRadius: "2rem 0 0 0",
		width: "100%",
		height: "25em",
	},
	aboutevent: {
		backgroundColor: "#EEEEEE",
		width: "35%",
		height: "100%",
		borderRadius: "0 2rem 2rem 0",
	},
	eventinfo: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center",
		height: "30em",
	},
	eventagain: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
	},
	fonting: {
		fontSize: "50px",
	},
	eventbutton: {
		backgroundColor: "#2196f3",
		color: "white",
		fontSize: "15px",
		paddingLeft: "105px",
		paddingRight: "105px",
		borderRadius: "15px",
		"&:hover": {
			color: "white",
			backgroundColor: "#1b75bd",
		},
	},
	eventtags: {
		position: "absolute",
		width: "60%",
		height: "30em",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
	},
	overlay: {
		background: "#0000008a",
		position: "absolute",
		width: "100%",
		height: "30em",
		top: 0,
		zIndex: 1,
	},
}));
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});
export default function UserNotecard({ note }) {
	console.log(note);
	let _id = note._id;
	let event_type = note.ispaid;
	let register_count = note.no_of_users;
	let users = register_count.toString();
	let text2 = "registrations";
	let text3 = users.concat(" ", text2);
	let rupee = note.cost;
	const linkk="https://event191407.herokuapp.com/"
	const [open, setOpen] = useState(false);
	const [opened, setOpened] = React.useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
	const handleClickOpened = () => {
		var confirmation = window.confirm("Are you sure");
		console.log(confirmation);
		if (confirmation == true) {
				setOpened(true);
		}
	};

	const handleClosed = () => {
		setOpened(false);
	};
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const classes = useStyles();
	let meridiem = "AM";
	let eventTime = note.time;
	let stringTime = eventTime.toString();
	let sliceTime = stringTime.slice(0, 2);
	let sliceTime2 = stringTime.slice(2, 5);
	let noTime = parseInt(sliceTime);
	if (noTime >= 13) {
		meridiem = "PM";
		if (noTime == 13) {
			noTime = 1;
		}
		if (noTime == 14) {
			noTime = 2;
		}
		if (noTime == 15) {
			noTime = 3;
		}
		if (noTime == 16) {
			noTime = 4;
		}
		if (noTime == 17) {
			noTime = 5;
		}
		if (noTime == 18) {
			noTime = 6;
		}
		if (noTime == 19) {
			noTime = 7;
		}
		if (noTime == 20) {
			noTime = 8;
		}
		if (noTime == 21) {
			noTime = 9;
		}
		if (noTime == 22) {
			noTime = 10;
		}
		if (noTime == 23) {
			noTime = 11;
		}
		if (noTime == 24) {
			noTime = 12;
		}
	}
	let modifiedTime = noTime.toString();
	let finalTime = modifiedTime
		.concat("")
		.concat(sliceTime2)
		.concat(" ")
		.concat(meridiem);

	let eventDate = note.date;
	let dateString = eventDate.toString();
	let sliceYear = dateString.slice(0, 4);
	let sliceMonth = dateString.slice(5, 7);
	let sliceDate = dateString.slice(8, 10);
	if (sliceMonth == "01") {
		sliceMonth = "January";
	} else if (sliceMonth == "02") {
		sliceMonth = "February";
	} else if (sliceMonth == "03") {
		sliceMonth = "March";
	} else if (sliceMonth == "04") {
		sliceMonth = "April";
	} else if (sliceMonth == "05") {
		sliceMonth = "May";
	} else if (sliceMonth == "06") {
		sliceMonth = "June";
	} else if (sliceMonth == "07") {
		sliceMonth = "July";
	} else if (sliceMonth == "08") {
		sliceMonth = "August";
	} else if (sliceMonth == "09") {
		sliceMonth = "September";
	} else if (sliceMonth == "10") {
		sliceMonth = "October";
	} else if (sliceMonth == "11") {
		sliceMonth = "November";
	} else if (sliceMonth == "12") {
		sliceMonth = "December";
	}
	let finalDate = sliceDate
		.concat(" ")
		.concat(sliceMonth)
		.concat(" ")
		.concat(sliceYear);
	return (
		<Card>
			<CardActionArea sx={{ backgroundColor: "white"}}>
				<CardMedia
					className={classes.media}
					image={note.image}
					title="Contemplative Reptile"
				/>
				<CardContent sx={{ minHeight: "18em" }}>
					<h1 className={classes.notetitle}>{note.title}</h1>
					<Typography className={classes.date}>
						{finalDate}, {finalTime}
					</Typography>
					<p className={classes.noteDescription}>{note.description}</p>
				</CardContent>
				<div className={classes.flexing}>
					<div className={classes.flexingagain}>
						&nbsp;&nbsp;&nbsp;
						<RoomIcon />
						&nbsp;
						<Typography className={classes.why}>{note.isoffline}</Typography>
						&nbsp; &nbsp; &nbsp;
						<AttachMoneyIcon />
						&nbsp;
						<Typography className={classes.why}>{note.ispaid}</Typography>
					</div>
					<Button
						variant="contained"
						className={classes.btn}
						onClick={handleClickOpen}
					>
						Event Details
					</Button>
				</div>
				<Dialog
					fullScreen
					open={open}
					onClose={handleClose}
					TransitionComponent={Transition}
				>
					<AppBar sx={{ position: "relative" }}>
						<Toolbar>
							<IconButton
								edge="start"
								color="inherit"
								onClick={handleClose}
								aria-label="close"
							>
								<CloseIcon />
							</IconButton>
						</Toolbar>
					</AppBar>
					<div
						style={{
							backgroundImage: `url(${note.image})`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "100% 100%",
							height: "30em",
						}}
					>
						<div className={classes.eventdetail}>
							<Container className={classes.eventalign}>
								<div className={classes.eventimage}>
									<img className={classes.eventbanner} src={note.image} />
									<Container>
										<Typography
											className={classes.eventdetailinfo}
											variant="h5"
										>
											Event Details:
										</Typography>
										<Typography
											className={classes.eventdetailinfo}
											variant="h6"
										>
											{note.description}
										</Typography>
										<div className={classes.eventtags}>
											<div>
												<Typography variant="h5">Tags</Typography>
												<br />
												<div>
													<Chip label={note.tags} />
												</div>
											</div>
											<div className={classes.eventagain}>
												<Typography variant="h5">Event Speaker:</Typography>
												&nbsp;&nbsp;
												<Typography variant="h6">
													{note.eventspeaker}
												</Typography>
											</div>
											<div>
												<Typography variant="h5">
													Contact the Orgainzer
												</Typography>
												<div className={classes.eventagain}>
													<EmailIcon sx={{ fontSize: 30 }} />
													<Typography variant="h6">{note.contact}</Typography>
												</div>
											</div>
										</div>
									</Container>
								</div>
								<div className={classes.aboutevent}>
									<Container className={classes.eventinfo}>
										<h1 className={classes.fonting}>{note.title}</h1>
										<div className={classes.eventagain}>
											<CalendarTodayIcon sx={{ fontSize: 30 }} />
											<Typography variant="h5">{finalDate}</Typography>
										</div>
										<div className={classes.eventagain}>
											<ScheduleIcon sx={{ fontSize: 30 }} />
											<Typography variant="h5">{finalTime}</Typography>
										</div>
										<div className={classes.eventagain}>
											<LocationOnIcon sx={{ fontSize: 30 }} />
											<Typography variant="h5">{note.link}</Typography>
										</div>
										<div className={classes.eventagain}>
											<PersonIcon sx={{ fontSize: 30 }} />
											<Typography variant="h5">by {note.username}</Typography>
										</div>
										<div className={classes.eventagain}>
											<AttachMoneyIcon sx={{ fontSize: 30 }} />
											<Typography variant="h5">{note.ispaid}</Typography>
										</div>
										<Button
											variant="contained"
											className={classes.eventbutton}
											onClick={handleClickOpened}
										>
											Cancel Event
										</Button>
										<Dialog
											fullScreen={fullScreen}
											open={opened}
											onClose={handleClosed}
											aria-labelledby="responsive-dialog-title"
										>
											<DialogTitle id="responsive-dialog-title">
												{"PAID-EVENTS PORTAL"}
											</DialogTitle>
											<DialogContent>
												<Typography>For cancelling event you need to pay Rs.100 as compensation</Typography>
												<DialogContentText>
													<GooglePayButton
														environment="TEST"
														paymentRequest={{
															apiVersion: 2,
															apiVersionMinor: 0,
															allowedPaymentMethods: [
																{
																	type: "CARD",
																	parameters: {
																		allowedAuthMethods: [
																			"PAN_ONLY",
																			"CRYPTOGRAM_3DS",
																		],
																		allowedCardNetworks: ["MASTERCARD", "VISA"],
																	},
																	tokenizationSpecification: {
																		type: "PAYMENT_GATEWAY",
																		parameters: {
																			gateway: "example",
																			gatewayMerchantId:
																				"exampleGatewayMerchantId",
																		},
																	},
																},
															],
															merchantInfo: {
																merchantId: "12345678901234567890",
																merchantName: "Demo Merchant",
															},
															transactionInfo: {
																totalPriceStatus: "FINAL",
																totalPriceLabel: "Total",
																totalPrice: rupee,
																currencyCode: "INR",
																countryCode: "IN",
															},
															shippingAddressRequired: true,
															callbackIntents: [
																"SHIPPING_ADDRESS",
																"PAYMENT_AUTHORIZATION",
															],
														}}
														onLoadPaymentData={(paymentRequest) => {
															console.log("Success", paymentRequest);
														}}
														onPaymentAuthorized={(paymentData) => {
															console.log(
																"Payment Authorised Success",
																paymentData
															);
															return { transactionState: "SUCCESS" };
														}}
														onPaymentDataChanged={(paymentData) => {
															console.log(
																"On Payment Data Changed",
																paymentData
															);
															return {};
														}}
														existingPaymentMethodRequired="false"
														buttonColor="black"
														buttonType="Buy"
													/>
												</DialogContentText>
											</DialogContent>
											<DialogActions>
												<Button
													autoFocus
													variant="contained"
													color="secondary"
													onClick={handleClosed}
												>
													Close
												</Button>
											</DialogActions>
										</Dialog>
									</Container>
								</div>
							</Container>
						</div>
						<div className={classes.overlay}></div>
					</div>
				</Dialog>
			</CardActionArea>
			<CardActions
				sx={{ border: 1, borderColor: "#eeeeee" }}
				className={classes.cardActions}
			>
				<div className={classes.lastBox}>
					<Chip icon={<PersonIcon />} label={note.username} />
					<Chip icon={<PeopleAltIcon />} label={text3} />
				</div>
			</CardActions>
			<ToastContainer></ToastContainer>
		</Card>
	);
}
