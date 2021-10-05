import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@material-ui/core";
import {Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@mui/icons-material/Person";
import Chip from "@mui/material/Chip";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RoomIcon from "@mui/icons-material/Room";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
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
  marginns: {
    marginLeft: 5,
    marginRight: 5,
  },
  positioning:{
    position: 'absolute',
  }
}));

export default function NoteCard({ note }) {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea sx={{backgroundColor: '#eeeeee'}}>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" underline="always">
            {note.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {note.description}
          </Typography>
          <Link href="#" underline="hover">
            {"Learn More..."}
          </Link>
        </CardContent>
          <Chip
            className={classes.margins}
            icon={<RoomIcon />}
            label={note.category}
          />
          <Chip className={classes.margins} icon={<AttachMoneyIcon />} label={note.type} />
          <Button variant="contained" color="primary" className={classes.btn}>
            Register
          </Button>
      </CardActionArea>
      <CardActions sx={{border: 1,borderColor: '#eeeeee'}} className={classes.cardActions}>
        <div>
          <Chip className={classes.marginns} icon={<PersonIcon />} label={note.username} />
          <Chip className={classes.positioning} icon={<PeopleAltIcon />} label="150k users" />
        </div>
      </CardActions>
    </Card>
  );
}
