import React, { useEffect, useState } from "react";
import { Tab, Tabs, AppBar, Grid, Paper, Container } from "@material-ui/core";
import axios from 'axios';
import NoteCard from "./NoteCard";
export default function SectionHeading() {
  const [event,setEvent] = useState([]);
  useEffect(()=> {
    fetch("/event")
    .then(res=>res.json())
    .then(data=>setEvent(data))
  },[]);
  const handleTabs = (e, val) => {
    setValue(val);
  };
  const [value, setValue] = useState(0);
  return (
    <Container>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleTabs}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab label="Popular Events" {...width(0)} />
          <Tab label="Events This Week" {...width(1)} />
        </Tabs>
      </AppBar>
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