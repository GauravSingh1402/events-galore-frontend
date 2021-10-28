import React, {useState, useEffect} from 'react';
import './Banner.css';
import BtnSlider from './BtnSlider';
import { Typography, Button} from '@material-ui/core';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import ScheduleIcon from '@mui/icons-material/Schedule';
export default function Banner() {
const [slideIndex, setSlideIndex] = useState(1)
const [event,setEvent] = useState([]);
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
                                <Typography style={{color: 'white'}} variant="h6" align="center">{obj.date}</Typography>
                            </div>
                            <div className="content1">
                                <ScheduleIcon fontSize="large"  style={{color: 'white'}}/>
                                <Typography style={{color: 'white'}} variant="h5" align="center">{obj.time}</Typography>
                            </div>
                        </div>
                        <div className="content">
                            <Button className="btn" variant="contained" color="primary">Learn More...</Button>
                            &nbsp;&nbsp;
                            <Button className="btn" variant="contained" color="secondary">Register Now</Button>
                        </div>
                        <div className="content3">
                            <LocationOnIcon fontSize="large"  style={{color: 'white'}}/>
                            <Typography style={{color: 'white'}} variant="h5" align="center">{obj.isoffline}</Typography>
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
