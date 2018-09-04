import React, { Component } from "react";
import AutocompleteField from "../dashboard/profile/Autocomplete";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import baseURL from "../../config";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;
import GoogleSigninHelper from "./GoogleSigninHelper";
import SocialAuth from "./socialAuth";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});
class Index extends Component {
  state = {
    events: [],
    eventName: "",
    password: "",
    loading: false
  };
  componentDidMount() {
    axios
      .get("/api/all-events")
      .then(res => {
        if (res.data.success) {
          const { events } = res.data;
          this.setState({ events });
        }
      })
      .catch(err => {});
  }
  handleChange = (e, { newValue }) => {
    this.setState({
      eventName: newValue
    });
  };
  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };
  submitForm = e => {
    e.preventDefault();
    let { eventName, password } = this.state;
    if (!eventName || !password) {
      return alert("Fill all the fields!");
    }
    const formData = {
      eventName: eventName.trim(),
      password: password.trim()
    };
    this.fetchParticipants(formData);
  };
  fetchParticipants = formData => {
    axios
      .post("/api/fetch-participants", formData)
      .then(res => {
        console.log("fetched participants");
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  createSheet = () => {
    axios
      .post("/api/orgs/spreadsheets")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="row center-md">
        <div className="col-md-5">
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              Participants Info
            </Typography>
            {/* <GoogleSigninHelper /> */}
            <SocialAuth />
            <button onClick={this.createSheet}>create sheet</button>
            <form>
              <AutocompleteField
                placeholder="Enter eventname"
                suggestions={this.state.events} //array
                label={"name"} //key
                value={this.state.eventName}
                handleChange={this.handleChange}
              />
              <TextField
                id="password"
                label="password"
                className={classes.textField}
                value={this.state.password}
                onChange={this.handlePasswordChange}
                margin="normal"
                fullWidth
                required
              />
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
                onClick={this.submitForm}
              >
                FETCH PARTICIPANTS
              </Button>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Index);
