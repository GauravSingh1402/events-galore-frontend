import React, { useEffect, useState } from "react";
import { Tab, Tabs, AppBar, Grid, Paper, Container } from "@material-ui/core";
import axios from 'axios';
import NoteCard from "./NoteCard";
export default function UserEvent() {
  const [event,setEvent] = useState([]);
  useEffect(()=> {
    fetch("/usrevent")
    .then(res=>res.json())
    .then(data=>setEvent(data))
  },[]);

  const [eventweek,setEventweek] = useState([]);
  useEffect(()=> {
    fetch("/eventweek")
    .then(res=>res.json())
    .then(data=>setEventweek(data))
  },[]);

  const handleTabs = (e, val) => {
    setValue(val);
  };
  const [value, setValue] = useState(0);
  return (
    <Container>

        <Tabs
          value={value}
          onChange={handleTabs}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Events Created" {...width(0)} />
          <Tab label="Events Attending" {...width(1)} />
        </Tabs>

      <TabPanel value={value} index={0}> 
      <Grid container spacing={3} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {event.map(events=>(
            <Grid item xs={12} sm={6} md={4} key={events._id}>
              <NoteCard note={events}/>
            </Grid> 
      ))}
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={3} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {eventweek.map(eventw=>(
            <Grid item xs={12} sm={6} md={4} key={eventw._id}>
              <NoteCard note={eventw}/>
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