import React from 'react'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeft  from '@material-ui/icons/KeyboardArrowLeft'
import Paper from '@material-ui/core/Paper'
import MobileStepper from '@material-ui/core/MobileStepper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {useTheme} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

import './Banner.css'

const MyCollection = [
    {
      label: "NATURE",
      imgPath:
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfR95kXmdtvUC30wSO8LMpWi5aogJ3M52qbrgIpq0vQRjrMAIgpR_qvexzaWk4kS-IJqM&usqp=CAU",
      venue:"Online",
      date:"25-12-2021",
      description:"Scenary",
    },
    {
      label: "AVENDATOR",
      imgPath:
  "https://wallpaperaccess.com/full/2875411.jpg",
      venue:"Online",
      date:"19-12-2021",
      description:"Hypercar",
    },
    {
      label: "TREX",
      imgPath:
  "https://c4.wallpaperflare.com/wallpaper/547/845/242/animal-dinosaur-tyrannosaurus-rex-hd-wallpaper-preview.jpg",
      venue:"DINOSAURS",
      date:"1-01-2022",
      description:"Tyrant king",
    },
  ];



 
  
const Banner = () => {
    const CollectionSize = MyCollection.length;
    const theme = useTheme();
    const [index, setActiveStep] = React.useState(0);
    
    const goToNextPicture = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
   
    }
    const goToPreviousPicture = () => {
      
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      
  }
  return (
    <div 
    >
      < div className="banner" 
        style={{
          flexGrow: 1,
       
        }}
      >

        <div className="pbanner" style={{maxWidth:'100%', backgroundImage:`url({MyCollection[index].imgPath})`}} >
          
         
          <img  className="image"
            src={MyCollection[index].imgPath}
            style={{
              height: 500,
              width: 1600,
              display: "flex",
              overflow: "hidden",
              alignItems: "center",
            }}
            alt={MyCollection[index].label}
          />
             <div className="event-details">{MyCollection[index].label}</div>
            <div className="eventdes">{MyCollection[index].description}</div>
            <div className="evntv">{MyCollection[index].venue}</div>
            <div className="evntdate">{MyCollection[index].date}</div>
            <div className="buttmax1">
              <IconButton 
                size="large"
                onClick={goToPreviousPicture}
                disabled={index === CollectionSize + 1}
              >
                  <KeyboardArrowLeft className="butt-l"/>
              </IconButton>
            </div>
            <div className="buttmax">
              <IconButton
                size="large"
                onClick={goToNextPicture}
                disabled={index === CollectionSize - 1}
              >
                  <KeyboardArrowRight className="butt-r"/>
              </IconButton>
            </div>
        </div>
         
      </div>

    </div>
  )
  
}



    


export default Banner;