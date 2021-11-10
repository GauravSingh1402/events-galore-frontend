import React, { useEffect, useState } from "react";
import { Typography,Tab, Tabs,Grid, Container } from "@material-ui/core";
import axios from 'axios';
import UserNotecard from "./UserNotecard";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  cardpanel:{
    backgroundColor: "#DDDDDD",
  },
  switchpanel:{
    backgroundColor: "#DDDDDD",
  },
  shadows:{
    boxShadow:"7px 7px 13px 7px grey" 
  },
  boderpanel:{
    color:"#2196F3",
    fontWeight: "bold",
    fontSize: "18px",
    marginTop: "2px",
    marginBottom: "2px",
    backgroundColor: "#DDDDDD",
  },
  tabaligning:{
    padding: "20px",
  }
}));
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
  const classes = useStyles();
  const [value, setValue] = useState(0);
  return (
    <Container>
      <br/>
         <Tabs
         TabIndicatorProps={{style: {background:'#2196F3'}}}
         textColor="inherit"
          value={value}
          onChange={handleTabs}
          variant="fullWidth"
          aria-label="full width tabs example"
          className={classes.shadows}
        >
          <Tab className={classes.boderpanel} label="Events Created" {...width(0)} />
        </Tabs>
      <div className={classes.tabaligning}>
      <TabPanel value={value} index={0}> 
      <Grid  className={classes.cardpanel} container spacing={3} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {event.map(events=>(
            <Grid item xs={12} sm={6} md={4} key={events._id}>
              <UserNotecard note={events}/>
            </Grid> 
      ))}    
      </Grid>
      </TabPanel>
      </div>
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