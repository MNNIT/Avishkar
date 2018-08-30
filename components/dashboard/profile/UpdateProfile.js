import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import baseURL from "../../../config";
import MenuItem from "@material-ui/core/MenuItem";
import { Menu } from "@material-ui/core";
import AutocompleteField from "./Autocomplete";
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
    phone: "",
    city: "",
    college: "",
    regNum: "",
    course: "",
    courseYear: "",
    cities: [],
    colleges: []
  };

  static getDerivedStateFromProps(props, state) {
    let newState = { ...state };
    if (props.profile) {
      newState.name = props.profile.name;
      if (props.profile.gender) {
        newState.gender = props.profile.gender;
      }
    }
    return newState;
  }
  componentDidMount() {
    this.fetchAllCities();
  }
  fetchAllCities = () => {
    axios
      .get("/api/all-cities")
      .then(res => {
        console.log(res.data);
        const { cities } = res.data;
        this.setState({ cities });
      })
      .catch(err => {
        console.log(err);
      });
  };
  fetchCollegesInCity = city => {
    axios.get(`/api/colleges/${city}`).then(res => {
      const { colleges } = res.data;
      console.log({ colleges });
      this.setState({ colleges });
    });
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  updateProfile = () => {
    //TODO validate formdata
    const formData = { ...this.state };
    delete formData.colleges;
    delete formData.cities;
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
  handleAutocompleteChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue
    });
  };
  attemptCollegesFetch = cities => {
    // alert("called");
    // const shouldFetch = cities.some(function(city) {
    //   return city._id === this.state.city.trim();
    // });
    //if (shouldFetch) {
    this.fetchCollegesInCity(this.state.city);
    //}
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
              {/* <TextField
                id="city"
                label="City"
                className={classes.textField}
                value={this.state.city}
                onChange={this.handleChange("city")}
                margin="normal"
                fullWidth
                required
              /> */}
              <TextField
                id="phone"
                label="10 digit phone number"
                className={classes.textField}
                value={this.state.phone}
                onChange={this.handleChange("phone")}
                margin="normal"
                fullWidth
                required
              />
              <AutocompleteField
                placeholder="Enter your city"
                suggestions={this.state.cities}
                label={"_id"}
                value={this.state.city}
                handleChange={this.handleAutocompleteChange("city")}
                attemptCollegesFetch={this.attemptCollegesFetch}
              />
              <AutocompleteField
                placeholder="Enter your college"
                suggestions={this.state.colleges}
                label={"college"}
                value={this.state.college}
                handleChange={this.handleAutocompleteChange("college")}
              />
              <TextField
                id="regNum"
                label="registration number "
                className={classes.textField}
                value={this.state.regNum}
                onChange={this.handleChange("regNum")}
                margin="normal"
                fullWidth
                required
              />
              <TextField
                select
                id="course"
                label="Course"
                className={classes.textField}
                value={this.state.course}
                onChange={this.handleChange("course")}
                margin="normal"
                fullWidth
                required
              >
                <MenuItem value={"btech"}>BTECH</MenuItem>
                <MenuItem value={"mca"}>MCA</MenuItem>
                <MenuItem value={"mba"}>MBA</MenuItem>
              </TextField>
              <TextField
                id="year"
                label="Year of course"
                className={classes.textField}
                value={this.state.courseYear}
                onChange={this.handleChange("courseYear")}
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
