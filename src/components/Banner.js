import React, { useState, useEffect } from "react";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import { useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import "./Banner.css";
import Paper from "@material-ui/core/Paper";
import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const Banner = () => {
	const theme = useTheme();
	const [index, setActiveStep] = React.useState(0);
	const [data, setData] = React.useState([]);
	const [loaded, setLoaded] = React.useState(false);
	const getEvent = async () => {
		await axios("/bevent")
			.then((response) => {
				setData(response.data);
				console.log(response.data["image"]);
				setLoaded(true);
				console.log(data);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	};
	useEffect(() => {
		getEvent();
	}, []);

	const CollectionSize = data.length;
	console.log(CollectionSize);
	const goToNextPicture = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};
	const goToPreviousPicture = () => {
		if (CollectionSize >= 0)
			setActiveStep((prevActiveStep) => prevActiveStep - 1);
		else {
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
		}
		if (CollectionSize < 0) {
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
		}
	};

	if (!loaded) {
		return <h1>LOADING....</h1>;
	}
	return (
		<div>
			<div
				className="banner"
				style={{
					flexGrow: 1,
				}}
			>
				<div
					className="pbanner"
					style={{ maxWidth: "100%", backgroundImage: `url({imgurl})` }}
				>
					<img
						className="image"
						src={data[index].image}
						style={{
							height: 500,
							width: 1600,
							display: "flex",
							overflow: "hidden",
							alignItems: "center",
						}}
						alt={data[index].title}
					/>

					<div className="event-details">{data[index].title}</div>
					<div className="eventdes">{data[index].description}</div>
					<div className="evntv">{data[index].isoffline}</div>
					<div className="evntdate">{data[index].date}</div>
					<div className="buttmax1">
						<IconButton
							size="large"
							onClick={goToPreviousPicture}
							disabled={index === CollectionSize + 1}
						>
							<KeyboardArrowLeft className="butt-l" />
						</IconButton>
					</div>
					<div className="buttmax">
						<IconButton
							size="large"
							onClick={goToNextPicture}
							disabled={index === CollectionSize - 1}
						>
							<KeyboardArrowRight className="butt-r" />
						</IconButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
