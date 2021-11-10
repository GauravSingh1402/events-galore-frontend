import React, { useEffect, useState } from "react";
import { Typography,Grid, Container } from "@material-ui/core";
import axios from 'axios';
import UserNotecard from "./UserNotecard";
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
      <Typography algin="center">Events Created</Typography>
      <Grid container spacing={3} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {event.map(events=>(
            <Grid item xs={12} sm={6} md={4} key={events._id}>
              <UserNotecard note={events}/>
            </Grid> 
      ))}
      </Grid>
      
    </Container>
  );
}