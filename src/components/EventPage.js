import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {    Container, Typography, Box,Button  } from "@material-ui/core";
const useStyles = makeStyles({
    page:{
    height: "30em",
    border: "0.01px solid white",
    backgroundImage: "url('https://wallpaperaccess.com/full/2875411.jpg')",
    backgroundSize: "cover",                      
    backgroundRepeat:   "no-repeat",
    backgrounPosition: "center",
   
    },
    bluring:{
         height: "30em",
        border: "0.01px solid #616161",
        backdropFilter: "blur(10px)",
    },
    maindiv:{
        marginTop: "9%",
        ['@media(max-width: 900px)']:{
            marginTop: "5%",
            width: "100%",
          }
    },
    heading:{
        display: "flex",
        flexDirection: "Row",
        borderTop: "1px solid #616161",
        borderLeft: "1px solid #616161",
        borderRight: "1px solid #616161",
        borderRadius: "2rem 2rem 0 0",
        borderColor: "#616161 white  white #616161",
        ['@media(max-width: 900px)']:{
            flexDirection: "column",
          }
    },
    imgbox:{
        width: "70%",
        height: "25em",
        borderRadius: "2rem 0 0 0",
        ['@media(max-width: 900px)']:{
            width: "100%",
          }
    },
    bannerImage:{
        borderRadius: "2rem 0 0 0",
        width: "100%",
        height: "25em",
    },
    registerbtn:{
        paddingLeft:"0.5rem",
        paddingRight:"0.5rem",
    },
    btncolor:{
        backgroundColor:"#43a047",
        "&:hover":{
            backgroundColor: "#4caf50",
        },
    },
    sidediv:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "white",
        width: "30%",
        minHeight: "20em",
        padding: "2em",
        borderRadius: "0 2rem 0 0",
        ['@media(max-width: 900px)']:{
            width: "100%",
            justifyContent: "normal",
            minHeight: "2em",
            padding: "0",
          },
    },
    eventinfo:{ 
    display: "flex",
    flexDirection: "Row",
    ['@media(max-width: 700px)']:{
        flexDirection: "column",
      }
},
    detailedinfo:{
        width: "70%",
        height: "25em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        ['@media(max-width: 700px)']:{
            width: "100%",
          }
    },
    shortinfo:{
        width: "30%",
        minHeight: "25em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        ['@media(max-width: 700px)']:{
            width: "100%",
          }
    },
});
const  EventPage =(props) => {
    const[date,setDate]=useState("Date");
    const[time,setTime]=useState("Time");
    const[title,setTitle]=useState("Title");
    const[ispaid,setIspaid]=useState("Free");
    const[description,setDescription]=useState("Description");
    const[speaker,setSpeaker]=useState("Speaker");
    const[email,setEmail]=useState("Email Id");
    const[isoffline,setIsoffline]=useState("Offline");
    const[venue,setVenue]=useState("venue");
    const classes = useStyles();
    const evntr=props.data
    console.log(evntr);
    return (
        <div className={classes.page}>
            <div className={classes.bluring}>
            <Container className={classes.maindiv}>
            <Box className={classes.heading}>
            <Box className={classes.imgbox}>
            <img src="https://wallpaperaccess.com/full/2875411.jpg" className={classes.bannerImage} alt="" />
            </Box>
            <Box className={classes.sidediv}>
                <Typography variant="h5">{date}<br/>{evntr["time"]}</Typography>
                <Typography variant="h4" align="center">{evntr["title"]}</Typography>   
                <Typography variant="h6" >{evntr["ispaid"]}</Typography>
                <Button className={classes.btncolor} variant="contained" color="secondary" fullWidth>Register</Button>
            </Box>
            </Box>
            <Box className={classes.eventinfo}>
            <Box className={classes.detailedinfo}>
            <Typography variant="h6" align="center">{evntr["title"]}</Typography>
            <Container>
            <Typography variant="h6">About The Event: </Typography>
            <Typography variant="p" align="left">{evntr["description"]}</Typography>
            </Container>
            <Container>
            <Typography variant="h6">Event Speaker: </Typography>
            <Typography variant="p" align="left">{evntr["speaker"]}</Typography>
            </Container>
            <Container>
            <Typography variant="h6">Email For Enquiry: </Typography>
            <Typography variant="p" align="left">{evntr["email"]}</Typography>
            </Container>
            </Box>
            <Box className={classes.shortinfo}>
            <Container>
            <Typography variant="h6">Date And Time: </Typography>
            <Typography variant="p" align="left">{evntr["date"]}</Typography>
            </Container>
            <Container>
            <Typography variant="h6">Location</Typography>
            <Typography variant="h6">{evntr["isoffline"]}-Venue:</Typography>
            <Typography variant="p" align="left">{evntr["venue"]}</Typography>
            </Container>
            </Box>
            </Box>
        </Container>
            </div>

            
        </div>
    )
}

export default EventPage;
