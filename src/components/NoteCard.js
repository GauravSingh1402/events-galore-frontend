import React,{useState} from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@material-ui/core";
import {Button,Box,Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@mui/icons-material/Person";
import Chip from "@mui/material/Chip";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RoomIcon from "@mui/icons-material/Room";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TodayIcon from '@mui/icons-material/Today';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import Axios from 'axios';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import GooglePayButton from '@google-pay/button-react';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 240,
    marginTop: 0,
  },
  btn: {
    marginRight: 10,
    marginBottom: 10,
    float: "right",
  },
  margins: {
    marginLeft: 2,
    marginBottom: 5,
  },
  date:{
    width: "97%",
    display: "flex",
    flexDirection: "row",
    paddingLeft: "1%",
    justifyContent: "space-between",
    marginBottom:"2%",
  },
  lastBox:{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  eventpage:{
  height: "30em",
  backgroundImage: "url('https://cdn.pixabay.com/photo/2014/03/22/17/00/the-background-292720_960_720.png')",
  backgroundSize: "cover",                      
  backgroundRepeat:   "no-repeat",
  backgrounPosition: "center",
    },
    eventmaindiv:{
        marginTop: "9%",
        ['@media(max-width: 900px)']:{
            marginTop: "5%",
            width: "100%",
          }
    },
    eventheading:{
        display: "flex",
        flexDirection: "Row",
        ['@media(max-width: 900px)']:{
            flexDirection: "column",
          }
    },
    eventimgbox:{
        width: "70%",
        height: "25em",
        borderRadius: "2rem 0 0 0",
        ['@media(max-width: 900px)']:{
            width: "100%",
          }
    },
    eventbannerImage:{
        borderRadius: "2rem 0 0 0",
        width: "100%",
        height: "25em",
    },
    eventregisterbtn:{
        paddingLeft:"0.5rem",
        paddingRight:"0.5rem",
    },
    eventbtncolor:{
        backgroundColor:"#43a047",
        "&:hover":{
            backgroundColor: "#4caf50",
        },
    },
    eventsidediv:{
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
    eventeventinfo:{ 
    display: "flex",
    flexDirection: "Row",
    ['@media(max-width: 700px)']:{
        flexDirection: "column",
      }
},
    eventdetailedinfo:{
        width: "70%",
        height: "25em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        ['@media(max-width: 700px)']:{
            width: "100%",
          }
    },
    eventshortinfo:{
        width: "30%",
        minHeight: "25em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        ['@media(max-width: 700px)']:{
            width: "100%",
          }
    },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function NoteCard({note}) {
  let _id = note._id;
  let event_type = note.ispaid;
  let register_count = note.no_of_users;
  let rupee = note.cost;
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleClickOpened = () => {
    if(event_type=="paid"){
      register_count = register_count + 1;
      Axios.put('/update',{register_count:register_count,_id:_id});
      console.log(register_count);
      setOpened(true);
    }
    else{
      register_count = register_count + 1;
      Axios.put('/update',{register_count:register_count,_id:_id});
      console.log(register_count); 
      alert("Registered Successfully");
    }
  };

  const handleClosed = () => {
    setOpened(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea sx={{backgroundColor: '#eeeeee'}}>
        <CardMedia
          className={classes.media}
          image={note.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" underline="always">
            {note.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">{note.description}
          </Typography>
        </CardContent>
        <div className={classes.date}>
          <Chip icon={<TodayIcon/>} label={note.date}/>
          <Chip icon={<QueryBuilderIcon/>} label={note.time}/>
        </div>
        <Chip className={classes.margins} icon={<RoomIcon />} label={note.isoffline}/>
        <Chip className={classes.margins} icon={<AttachMoneyIcon />} label={note.ispaid}/>
        <Button variant="contained" color="primary" className={classes.btn}  onClick={handleClickOpen}>Register</Button>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.eventpage} >
            <div className={classes.eventbluring}>
            <Container className={classes.eventmaindiv}>
            <Box className={classes.eventheading}>
            <Box className={classes.eventimgbox}>
            <img src={note.image} className={classes.eventbannerImage} alt="" />
            </Box>
            <Box className={classes.eventsidediv}>
                <Typography variant="h5">{note.date}<br/>{note.time}</Typography>
                <Typography variant="h4" align="center">{note.title}</Typography>   
                <Typography variant="h6" >{note.ispaid}</Typography>
                <Button className={classes.eventbtncolor} variant="contained" color="secondary" onClick={handleClickOpened} fullWidth>Register</Button>
                <Dialog
        fullScreen={fullScreen}
        open={opened}
        onClose={handleClosed}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"PAID-EVENTS PORTAL"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>

          <GooglePayButton
    environment="TEST"
    paymentRequest={{
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId',
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: '12345678901234567890',
        merchantName: 'Demo Merchant',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: rupee,
        currencyCode: 'INR',
        countryCode: 'IN',
      },
      shippingAddressRequired: true,
      callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
    }}
    onLoadPaymentData={paymentRequest => {
      console.log('Success', paymentRequest);
    }}
    onPaymentAuthorized={paymentData => {
        console.log('Payment Authorised Success', paymentData)
        return { transactionState: 'SUCCESS'}
      }
    }
    onPaymentDataChanged={paymentData => {
        console.log('On Payment Data Changed', paymentData)
        return { }
      }
    }
    existingPaymentMethodRequired='false'
    buttonColor='black'
    buttonType='Buy'
  />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="contained"
    color="secondary" onClick={handleClosed}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

            </Box>
            </Box>
            <Box className={classes.eventeventinfo}>
            <Box className={classes.eventdetailedinfo}>
            <Typography variant="h6" align="center">{note.title}</Typography>
            <Container>
            <Typography variant="h6">About The Event: </Typography>
            <Typography variant="p" align="left">{note.description}</Typography>
            </Container>
            <Container>
            <Typography variant="h6">Event Speaker: </Typography>
            <Typography variant="p" align="left">{note.eventspeaker}</Typography>
            </Container>
            <Container>
            <Typography variant="h6">Email For Enquiry: </Typography>
            <Typography variant="p" align="left">{note.contact}</Typography>
            </Container>
            </Box>
            <Box className={classes.eventshortinfo}>
            <Container>
            <Typography variant="h6">Date And Time: </Typography>
            <Typography variant="p" align="left">{note.date} {note.time}</Typography>
            </Container>
            <Container>
            <Typography variant="h6">Location</Typography>
            <Typography variant="h6">{note.isoffline}-Venue:</Typography>
            <Typography variant="p" align="left">venue</Typography>
            </Container>
            </Box>
            </Box>
        </Container>
            </div>            
        </div>
      </Dialog>
      </CardActionArea>
      <CardActions sx={{border: 1,borderColor: '#eeeeee'}} className={classes.cardActions}>
        <div className={classes.lastBox}>
          <Chip icon={<PersonIcon />} label={note.username} />
          <Chip icon={<PeopleAltIcon />} label={note.no_of_users}/>
        </div>
      </CardActions>
    </Card>
  );
}