import React, {useState, useEffect} from 'react';
import './Banner.css';
import BtnSlider from './BtnSlider';
import { Typography, Button} from '@material-ui/core';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    bannerbtn:{
        height: "60%",
        backgroundColor: "#2196f3",
        color: "white",
        fontSize: "20px",
        padding:"30px",
        borderRadius:"10px",
        "&:hover": {
			color: "white",
			backgroundColor: "#1b75bd",
		},
    }
}))
export default function Banner() {
const [slideIndex, setSlideIndex] = useState(1)
const [event,setEvent] = useState([]);
const classing = useStyles();
  useEffect(()=> {
    fetch("/bevent")
    .then(res=>res.json())
    .then(data=>setEvent(data))
  },[]);
 const nextSlide = () => {
        if(slideIndex !== event.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === event.length){
            setSlideIndex(1)
        }
    }
 const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(event.length)
        }
    }
    const moveDot = index => {
        setSlideIndex(index)
    }
    return (
    <div className="container-slider">
        {event.map((obj, index) => {
            let meridiem = "AM";
            let eventTime = obj.time;
            let stringTime = eventTime.toString();
            let sliceTime = stringTime.slice(0,2);
            let sliceTime2 = stringTime.slice(2,5);
            let noTime = parseInt(sliceTime);
            if (noTime >= 13){
              meridiem = "PM";
              if (noTime == 13){noTime = 1;}
              if (noTime == 14){noTime = 2;}
              if (noTime == 15){noTime = 3;}
              if (noTime == 16){noTime = 4;}
              if (noTime == 17){noTime = 5;}
              if (noTime == 18){noTime = 6;}
              if (noTime == 19){noTime = 7;}
              if (noTime == 20){noTime = 8;}
              if (noTime == 21){noTime = 9;}
              if (noTime == 22){noTime = 10;}
              if (noTime == 23){noTime = 11;}
              if (noTime == 24){noTime = 12;}
            }
            let modifiedTime = noTime.toString();
            let finalTime = modifiedTime.concat("").concat(sliceTime2).concat(" ").concat(meridiem);
          
            let eventDate = obj.date;
            let dateString = eventDate.toString();
            let sliceYear = dateString.slice(0,4);
            let sliceMonth = dateString.slice(5,7);
            let sliceDate = dateString.slice(8,10); 
            if(sliceMonth == "01"){sliceMonth = "January"}
            else if(sliceMonth == "02"){sliceMonth = "February"}
            else if(sliceMonth == "03"){sliceMonth = "March"}
            else if(sliceMonth == "04"){sliceMonth = "April"}
            else if(sliceMonth == "05"){sliceMonth = "May"}
            else if(sliceMonth == "06"){sliceMonth = "June"}
            else if(sliceMonth == "07"){sliceMonth = "July"}
            else if(sliceMonth == "08"){sliceMonth = "August"}
            else if(sliceMonth == "09"){sliceMonth = "September"}
            else if(sliceMonth == "10"){sliceMonth = "October"}
            else if(sliceMonth == "11"){sliceMonth = "November"}
            else if(sliceMonth == "12"){sliceMonth = "December"}
            let finalDate = sliceDate.concat(" ").concat(sliceMonth).concat(" ").concat(sliceYear);
            return (
            <div key={obj._id} style={{backgroundImage:`url(${obj.image})` ,backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                <div className="contest">
                    <br/><br/><br/><br/>
                    <Typography style={{color: 'white'}} variant="h2" align="center">{obj.title}</Typography>
                    <br/>
                    <Typography style={{color: 'white'}} variant="h4" align="center">{obj.description}</Typography>
                    <br/><br/><br/><br/><br/><br/>
                    <div className="content">
                        <div className="content2">
                            <div className="content">
                                <EventIcon fontSize="large"  style={{color: 'white'}}/>
                                <Typography style={{color: 'white'}} variant="h6" align="center">{finalDate}</Typography>
                            </div>
                            <div className="content1">
                                <ScheduleIcon fontSize="large"  style={{color: 'white'}}/>
                                <Typography style={{color: 'white'}} variant="h5" align="center">{finalTime}</Typography>
                            </div>
                        </div>
                        <div className="content">
                            <Button className={classing.bannerbtn} variant="contained">Learn More...</Button>
                            &nbsp;&nbsp;
                            <Button className={classing.bannerbtn} variant="contained">Register Now</Button>
                        </div>
                        <div className="content3">
                            <LocationOnIcon fontSize="large"  style={{color: 'white'}}/>
                            <Typography className="timepass" style={{color: 'white'}} variant="h5" align="center">{obj.isoffline}</Typography>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        <div className="container-dots">
            {Array.from({length: event.length}).map((item, index) => (
                <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}>
                </div>
            ))}
        </div>
    </div>
    )
}
