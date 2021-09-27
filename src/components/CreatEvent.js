import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  btn: {
    marginTop: 20,
    marginBottom: 20,
    fontsize: 20,
    backgroundColor: '#c62828',
    color: "white",
    "&:hover": {
      color: "white",
      backgroundColor: "#ef5350",
    },
  },
  title: {
    textDecoration: "underline",
    alignSelf: "center",
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
  },
});
export default function CreatEvent() {
  const classes = useStyles();
  const [time, setTime] = useState('')
  const [date, setDate] = useState('');
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("online");
  const [type, setType] = useState("free");
  const [titleerror, setTitleerror] = useState(false);
  const [descriptionerror, setDescriptionerror] = useState(false);
  const [usernameerror, setUsernameerror] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameerror(false);
    setTitleerror(false);
    setDescriptionerror(false);
    if (username == "") {
      setUsernameerror(true);
    }
    if (title == "") {
      setTitleerror(true);
    }
    if (description == "") {
      setDescriptionerror(true);
    }
    if (title && description && username) {
      console.log(username, title, description, category, type, date, time);
      fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username, title, description, category, type, date, time}),
      }).then(() => history.push("/"));
    }
  };
  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h3"
        color="textSecondary"
        gutterBottom
      >
        Create Event
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          className={classes.field}
          label="Username"
          variant="outlined"
          color="secondary"
          required
          error={usernameerror}
        />
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Event Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleerror}
        />
        <TextField
          onChange={(e) => setDescription(e.target.value)}
          className={classes.field}
          label="Description"
          variant="outlined"
          color="secondary"
          multiline
          rows="6"
          fullWidth
          required
          error={descriptionerror}
        />
        <FormControl className={classes.field} component="fieldset">
          <FormLabel component="legend">Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="online"
              control={<Radio />}
              label="Online"
            />
            <FormControlLabel
              value="offline"
              control={<Radio />}
              label="Offline"
            />
          </RadioGroup>
        </FormControl>
        <br />
        <FormControl className={classes.field} component="fieldset">
          <FormLabel component="legend">Type</FormLabel>
          <RadioGroup value={type} onChange={(e) => setType(e.target.value)}>
            <FormControlLabel value="free" control={<Radio />} label="Free" />
            <FormControlLabel value="paid" control={<Radio />} label="Paid" />
          </RadioGroup>
        </FormControl>
        <br />
        <TextField
          label="Event Date"
          variant="outlined"
          color="secondary"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          focused
        />
        <br/>
        <br/>
        <TextField
          label="Event Date"
          variant="outlined"
          color="secondary"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          focused
        />
        <br />
        <Button
          className={classes.btn}
          type="Submit"
          variant="contained"
          color="secondary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
