import React, { useEffect, useState } from "react";
import { Tab, Tabs, AppBar, Grid, Paper, Container } from "@material-ui/core";
import axios from "axios";
import UserNotecard from "./UserNotecard";
export default function UserEvent() {
	const [event, setEvent] = useState([]);
	const linkk = "https://events-galore-backend.onrender.com/";
	useEffect(() => {
		fetch(`${linkk}usrevent`)
			.then((res) => res.json())
			.then((data) => setEvent(data));
	}, []);

	const [eventweek, setEventweek] = useState([]);
	useEffect(() => {
		fetch(`${linkk}eventweek`)
			.then((res) => res.json())
			.then((data) => setEventweek(data));
	}, []);

	const handleTabs = (e, val) => {
		setValue(val);
	};
	const [value, setValue] = useState(0);
	return (
		<Container>
			<br />
			<Tabs
				value={value}
				onChange={handleTabs}
				indicatorColor="secondary"
				textColor="inherit"
				variant="fullWidth"
				aria-label="full width tabs example"
			>
				<Tab label="Events Created" {...width(0)} />
			</Tabs>

			<TabPanel value={value} index={0}>
				<Grid
					container
					spacing={3}
					rowspacing={1}
					columnspacing={{ xs: 1, sm: 2, md: 3 }}
				>
					{event.map((events) => (
						<Grid item xs={12} sm={6} md={4} key={events._id}>
							<UserNotecard note={events} />
						</Grid>
					))}
				</Grid>
			</TabPanel>
		</Container>
	);
}
function TabPanel(props) {
	const { children, value, index } = props;
	return <div>{value == index && <h1>{children}</h1>}</div>;
}
function width(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}
