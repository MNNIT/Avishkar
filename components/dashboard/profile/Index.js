import React, { Component } from "react";
import Profile from "./Profile";
import UpdateProfile from "./UpdateProfile";
import ToggleDisplay from "react-toggle-display";
import axios from "axios";
import baseURL from "../../../config";
import CustomLoader from "../../CustomLoader";
import SnackBar from "../../SnackBar";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;
export default class extends Component {
  state = {
    profile: {
      name: "",
      email: "",
      phone: "",
      college: "",
      UpdateProfile: false
    },
    profileEditable: false,
    loading: true,
    snackBar: {
      open: false,
      variant: "",
      message: ""
    }
  };
  handleSnackBarClose = () => {
    const { snackBar } = this.state;
    snackBar.open = false;
    this.setState({ snackBar });
  };
  showSnackBar = (message, variant) => {
    const { snackBar } = this.state;
    snackBar.open = true;
    snackBar.message = message;
    snackBar.variant = variant;
    this.setState({ snackBar });
  };
  componentDidMount() {
    this.fetchUserProfile();
  }
  fetchUserProfile = () => {
    axios
      .get("/api/profile")
      .then(res => {
        if (res.status == 200) {
          const { profile } = res.data;
          this.setState({
            profile,
            loading: false
          });
        }
      })
      .catch(function(err) {
        if (err.response.status == 401) {
          Router.push("/auth");
        }
      });
  };
  toggleProfileForm = () => {
    this.setState(prevState => ({
      profileEditable: !prevState.profileEditable
    }));
  };
  render() {
    const { profile, profileEditable, loading, snackBar } = this.state;
    if (loading) {
      return <CustomLoader />;
    } else {
      return (
        <>
          <ToggleDisplay hide={this.state.profileEditable}>
            <Profile
              profile={profile}
              toggleProfileForm={this.toggleProfileForm}
            />
          </ToggleDisplay>
          <ToggleDisplay show={profileEditable}>
            <UpdateProfile
              profile={profile}
              toggleProfileForm={this.toggleProfileForm}
              fetchUserProfile={this.fetchUserProfile}
              showSnackBar={this.showSnackBar}
            />
          </ToggleDisplay>
          <SnackBar
            showSnackBar={snackBar.open}
            handleClose={this.handleSnackBarClose}
            variant={snackBar.variant}
            message={snackBar.message}
          />
        </>
      );
    }
  }
}
