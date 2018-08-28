import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import baseURL from "../../../config";
import MenuItem from "@material-ui/core/MenuItem";
import { Menu } from "@material-ui/core";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  menu: {
    width: 200
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});
class UpdateProfile extends Component {
  state = {
    name: "",
    gender: "",
    city: "",
    college: ""
  };
  static getDerivedStateFromProps(props, state) {
    let newState = { ...state };
    if (props.profile) {
      newState.name = props.profile.name;
    }
    return newState;
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  updateProfile = () => {
    const formData = { ...this.state };
    axios
      .post("/api/update-profile", formData)
      .then(res => {
        if (res.data.success) {
          alert("sucess");
          this.props.fetchUserProfile();
          this.props.toggleProfileForm();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="row center-md center-xs center-lg">
        <div className="col-md-6">
          <Paper className={classes.root} elevation={1}>
            <p style={{ textAlign: "center", color: "red" }}>
              * These fields must be filled and can only be updated once
            </p>
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange("name")}
                margin="normal"
                fullWidth
                required
              />
              <br />

              <TextField
                select
                id="gender"
                label="Gender"
                className={classes.textField}
                value={this.state.gender}
                onChange={this.handleChange("gender")}
                margin="normal"
                fullWidth
                required
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"others"}>Others</MenuItem>
              </TextField>
              <TextField
                id="city"
                label="City"
                className={classes.textField}
                value={this.state.city}
                onChange={this.handleChange("city")}
                margin="normal"
                fullWidth
                required
              />
              <TextField
                id="college"
                label="College"
                className={classes.textField}
                value={this.state.college}
                onChange={this.handleChange("college")}
                margin="normal"
                fullWidth
                required
              />
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
                onClick={this.updateProfile}
              >
                SAVE PROFILE
              </Button>
              <Button
                color="secondary"
                variant="contained"
                className={classes.button}
                onClick={this.props.toggleProfileForm}
              >
                CANCEL
              </Button>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(UpdateProfile);
