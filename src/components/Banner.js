import React, { useState, useEffect } from "react";
import "./Banner.css";
import BtnSlider from "./BtnSlider";
import { Typography, Button, Container } from "@material-ui/core";
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
import EventIcon from "@mui/icons-material/Event";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";
const useStyles = makeStyles((theme) => ({
	bannerbtn: {
		height: "60%",
		backgroundColor: "#2196f3",
		color: "white",
		fontSize: "20px",
		padding: "30px",
		borderRadius: "10px",
		"&:hover": {
			color: "white",
			backgroundColor: "#1b75bd",
		},
	},
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
	overlayed: {
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
export default function Banner() {
	const [slideIndex, setSlideIndex] = useState(1);
	const [event, setEvent] = useState([]);
	const [current, setCurrent] = useState();
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
	const link = "https://events-galore-backend.onrender.com/";
	const classing = useStyles();
	useEffect(() => {
		fetch(`${link}bevent`)
			.then((res) => res.json())
			.then((data) => setEvent(data));
	}, []);
	const [current_index, setActiveStep] = React.useState(0);
	const [open, setOpen] = useState(false);
	const [opened, setOpened] = React.useState(false);
	const nextSlide = () => {
		if (slideIndex !== event.length) {
			setSlideIndex(slideIndex + 1);
		} else if (slideIndex === event.length) {
			setSlideIndex(1);
		}
	};
	const prevSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1);
		} else if (slideIndex === 1) {
			setSlideIndex(event.length);
		}
	};
	const moveDot = (index) => {
		setSlideIndex(index);
	};
	return (
		<div className="container-slider">
			{event.map((obj, index) => {
				let _id = obj._id;
				let event_type = obj.ispaid;
				let register_count = obj.no_of_users;
				let rupee = obj.cost;
				const handleClickOpened = () => {
					var confirmation = window.confirm("Are you sure");
					console.log(confirmation);
					if (confirmation == true) {
						if (event_type == "paid") {
							Axios.put(`${link}update`, {
								register_count: register_count,
								_id: _id,
							});
							console.log(register_count);
							setOpened(true);
						} else {
							register_count = register_count + 1;
							Axios.put(`${link}update`, {
								register_count: register_count,
								_id: _id,
							});
							console.log(register_count);
							Swal.fire({
								icon: "success",
								title: "Success...",
								text: "Registered Successfully!",
							});
						}
					}
				};

				const handleClosed = () => {
					setOpened(false);
				};
				const handleClickOpen = () => {
					setActiveStep(index);
					setOpen(true);
				};

				const handleClose = () => {
					setOpen(false);
				};

				let meridiem = "AM";
				let eventTime = obj.time;
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

				let eventDate = obj.date;
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
					<div
						key={obj._id}
						style={{
							backgroundImage: `url(${obj.image})`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "100% 100%",
						}}
						className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
					>
						<div className="contest">
							<br />
							<br />
							<br />
							<Typography
								style={{ color: "white" }}
								variant="h2"
								align="center"
							>
								{obj.title}
							</Typography>
							<br />
							<div className="bannerdescription">
								<Typography
									style={{ color: "white" }}
									variant="h5"
									align="center"
								>
									{obj.description}
								</Typography>
							</div>
							<div className="footercontent">
								<div className="content2">
									<div className="content">
										<EventIcon fontSize="large" style={{ color: "white" }} />
										<Typography
											style={{ color: "white" }}
											variant="h6"
											align="center"
										>
											{finalDate}
										</Typography>
									</div>
									<div className="content1">
										<ScheduleIcon fontSize="large" style={{ color: "white" }} />
										<Typography
											style={{ color: "white" }}
											variant="h5"
											align="center"
										>
											{finalTime}
										</Typography>
									</div>
								</div>
								<div className="content">
									<Button
										className={classing.bannerbtn}
										variant="contained"
										onClick={handleClickOpen}
									>
										Learn More...
									</Button>
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
												backgroundImage: `url(${event[current_index].image})`,
												backgroundRepeat: "no-repeat",
												backgroundSize: "100% 100%",
												height: "30em",
											}}
										>
											<div className={classing.eventdetail}>
												<Container className={classing.eventalign}>
													<div className={classing.eventimage}>
														<img
															className={classing.eventbanner}
															src={event[current_index].image}
														/>
														<Container>
															<Typography
																className={classing.eventdetailinfo}
																variant="h5"
															>
																Event Details:
															</Typography>
															<Typography
																className={classing.eventdetailinfo}
																variant="h6"
															>
																{event[current_index].description}
															</Typography>
															<div className={classing.eventtags}>
																<div>
																	<Typography variant="h5">Tags</Typography>
																	<br />
																	<div>
																		<Chip label={event[current_index].tags} />
																	</div>
																</div>
																<div className={classing.eventagain}>
																	<Typography variant="h5">
																		Event Speaker:
																	</Typography>
																	&nbsp;&nbsp;
																	<Typography variant="h6">
																		{event[current_index].eventspeaker}
																	</Typography>
																</div>
																<div>
																	<Typography variant="h5">
																		Contact the Orgainzer
																	</Typography>
																	<div className={classing.eventagain}>
																		<EmailIcon sx={{ fontSize: 30 }} />
																		<Typography variant="h6">
																			{event[current_index].contact}
																		</Typography>
																	</div>
																</div>
															</div>
														</Container>
													</div>
													<div className={classing.aboutevent}>
														<Container className={classing.eventinfo}>
															<h1 className={classing.fonting}>
																{event[current_index].title}
															</h1>
															<div className={classing.eventagain}>
																<CalendarTodayIcon sx={{ fontSize: 30 }} />
																<Typography variant="h5">
																	{event[current_index].date}
																</Typography>
															</div>
															<div className={classing.eventagain}>
																<ScheduleIcon sx={{ fontSize: 30 }} />
																<Typography variant="h5">
																	{event[current_index].time}
																</Typography>
															</div>
															<div className={classing.eventagain}>
																<LocationOnIcon sx={{ fontSize: 30 }} />
																<Typography variant="h5">
																	{event[current_index].link}
																</Typography>
															</div>
															<div className={classing.eventagain}>
																<PersonIcon sx={{ fontSize: 30 }} />
																<Typography variant="h5">
																	by {event[current_index].username}
																</Typography>
															</div>
															<div className={classing.eventagain}>
																<AttachMoneyIcon sx={{ fontSize: 30 }} />
																<Typography variant="h5">
																	{event[current_index].ispaid}
																</Typography>
															</div>
															<Button
																variant="contained"
																className={classing.eventbutton}
																onClick={handleClickOpened}
															>
																Register
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
																							allowedCardNetworks: [
																								"MASTERCARD",
																								"VISA",
																							],
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
											<div className={classing.overlayed}></div>
										</div>
									</Dialog>
									&nbsp;&nbsp;
									<Button
										className={classing.bannerbtn}
										variant="contained"
										onClick={handleClickOpened}
									>
										Register Now
									</Button>
								</div>
								<div className="content3">
									<LocationOnIcon fontSize="large" style={{ color: "white" }} />
									<Typography
										className="timepass"
										style={{ color: "white" }}
										variant="h5"
										align="center"
									>
										{obj.isoffline}
									</Typography>
								</div>
							</div>
						</div>
						<div className="overlay"></div>
					</div>
				);
			})}
			<BtnSlider moveSlide={nextSlide} direction={"next"} />
			<BtnSlider moveSlide={prevSlide} direction={"prev"} />
			<div className="container-dots">
				{Array.from({ length: event.length }).map((item, index) => (
					<div
						onClick={() => moveDot(index + 1)}
						className={slideIndex === index + 1 ? "dot active" : "dot"}
					></div>
				))}
			</div>
		</div>
	);
}
