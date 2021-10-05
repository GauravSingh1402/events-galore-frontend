import React, { useState } from "react";
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
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from "@material-ui/core/styles";
import {Navlink, useHistory,Redirect} from 'react-router-dom';
const useStyles = makeStyles({
  main: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    ['@media(max-width: 900px)']:{
      flexDirection: "column",
    }
  },
  container: {
    marginTop: "2%",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    ['@media(max-width: 900px)']:{
      width: "100%",
    }
  },
  tfwidth: {
    width: "100%",
  },
  uploadImage: {
    width: "50%",
    ['@media(max-width: 900px)']:{
      width: "100%",
      marginBottom: "5%",
    }
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  btn: {
    marginLeft: "38%",
  },
  submitbtn: {
    marginTop: 20,
    marginBottom: 20,
    fontsize: 20,
    backgroundColor: '#c62828',
    color: "white",
    "&:hover": {
      color: "white",
      backgroundColor: "#ef5350",
    }},
  align: {
    display: "flex",
    flexDirection: "row",
  },
});
function Create() {
  const history = useHistory();
  const [event, setEvent] = useState({
    title: "", description:"", isoffline:"online",venue:"", link:"", date:"",time:"",eventspeaker:"",contact:"",isPaid:"free",cost:"",isfeatured:"",tags:""
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value= e.target.value;
    setEvent({...event, [name]:value});
  }
  const classes = useStyles();
  const [showVenue, setshowVenue] = useState(false);
  const [showFee, setshowFee] = useState(false);

  const PostData = async(e) => {
      console.log('submitted')
      e.preventDefault();
     
      const  { title, description, cost, venue, eventspeaker, contact, tags, ispaid, isoffline,link, isfeatured, date, time}=event;
      console.log(event);
      const res= await fetch("/createv",{
          method: "POST",
          headers: {
              "Content-type": "application/json"
            },
          body: JSON.stringify({
              title,description,cost,venue,eventspeaker,contact,tags,ispaid,isoffline,link,isfeatured,date,time
            })
        });
        const data = await res.json();
        if(data.status === 422|| !data)
        {
            alert('EVENT CREATION FAILED');
            console.log('EVENT CREATION FAILED');
        }
        if (data.status ===200 || data.status === 201)
        {
            history.push("/");
            console.log('ZA WARUDOO!!!!');
           
        }
        else
        {
            window.alert("something went wrong")
        }

  }
  return (
    <div>
      <Container className={classes.container}>
        <Typography variant="h3" component="h2" align="center" marginBottom={2}>
          Create Event
        </Typography>
        <form method="POST">
          <Box className={classes.main}>
            <Box className={classes.box}>
              <TextField className={classes.tfwidth} name="title" value={event.title} label="Event Title" variant="outlined" color="secondary"  margin="normal" onChange={handleInputs} required />
              <TextField className={classes.tfwidth} name="description" value={event.description} label="Description" variant="outlined" color="secondary"  multiline  margin="normal"  rows="6" onChange={handleInputs} required />
            </Box>
            <Box className={classes.uploadImage}>
              <Typography  variant="h6"  component="h2"  align="center"  margin="normal" mt={2}>
                Upload Banner Image
              </Typography>
              <img className={classes.image}  src="https://cdn.pixabay.com/photo/2017/01/18/17/39/cloud-computing-1990405_960_720.png" />
              <Button variant="contained" className={classes.btn} endIcon={<PhotoCameraIcon/>}>
                Upload
              </Button>
            </Box>
          </Box>
          <FormControl component="fieldset">
            <FormLabel component="legend">Mode Of Event Conduction</FormLabel>
            <RadioGroup className={classes.align} value={event.isoffline} name="isoffline" onChange={handleInputs}>
              <FormControlLabel value="online" control={<Radio />} label="Online" onClick={()=>setshowVenue(false)}/>
              <FormControlLabel value="offline"control={<Radio />}label="Offline"onClick={() => setshowVenue(true)}/>
            </RadioGroup>
          </FormControl>
          {showVenue ? (<TextField className={classes.tfwidth} name="venue" value={event.venue} label="Venue" variant="outlined" color="secondary" multiline margin="normal" rows="6" onChange={handleInputs} required/>)
            : (<TextField name="link" className={classes.tfwidth} value={event.link} label="Zoom App or Google Meet Link" variant="outlined" color="secondary" margin="normal" onChange={handleInputs} required/>
          )}
          <br/>
        <br/>
          <TextField type="date" label="Event Date" value={event.date} variant="outlined" color="secondary" name="date" onChange={handleInputs} required focused />
        <br/>
        <br/>
        <TextField  type="time" label="Event Time" value={event.time} variant="outlined" color="secondary" name="time"  onChange={handleInputs} required focused />
        <br/>
        <br/>
          <TextField className={classes.tfwidth} name="eventspeaker" value={event.eventspeaker} label="Event Speaker" variant="outlined" color="secondary" margin="normal"  onChange={handleInputs} required/>
          <TextField name="contact" className={classes.tfwidth} value={event.contact} label="Contact email for requiry" variant="outlined" color="secondary" margin="normal" onChange={handleInputs} required/>
          <FormControl component="fieldset">
            <FormLabel component="legend">Event Type</FormLabel>
            <RadioGroup className={classes.align} value={event.ispaid} name="ispaid" onChange={handleInputs}>
              <FormControlLabel value="free" control={<Radio />} label="Free" onClick={()=>setshowFee(false)}/>
              <FormControlLabel value="paid"control={<Radio />}label="Paid" onClick={()=>setshowFee(true)}/>
            </RadioGroup>
          </FormControl>
          <br/>
          {showFee ? ( <TextField label="Enter Registration Fee" name="cost" value={event.cost} variant="outlined"color="secondary" margin="normal" InputProps={{ startAdornment: ( <InputAdornment> <IconButton> <AttachMoneyIcon />
          </IconButton></InputAdornment> ) }} onChange={handleInputs} required/>): null}
          <br />
          <FormControl component="fieldset">
            <FormLabel component="legend">Featured Event</FormLabel>
            <RadioGroup className={classes.align} value={event.isfeatured} name="isfeatured" onChange={handleInputs}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no"control={<Radio />}label="No" />
            </RadioGroup>
          </FormControl>
          <TextField name="tags" value={event.tags} className={classes.tfwidth} label="Tags" variant="outlined" color="secondary" multiline margin="normal" rows="6" onChange={handleInputs} required/>
          <Button
          className={classes.submitbtn}
          type="Submit"
          variant="contained"
          color="secondary"
          endIcon={<KeyboardArrowRightIcon />}
          onClick={PostData}
        >Submit</Button>
        </form>
      </Container>
    </div>
  );
}

export default Create;