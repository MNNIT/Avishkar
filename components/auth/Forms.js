import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import FormHeading from "./FormHeading";
import SocialAuth from "./SocialAuth";
import SnackBar from "../SnackBar";
export default class extends Component {
  state = {
    showSigninForm: true,
    snackBar: {
      open: false,
      variant: "",
      message: ""
    }
  };
  showForm = formType => {
    if (formType == "signin") {
      this.setState({ showSigninForm: true });
    } else if (formType == "signup") {
      this.setState({ showSigninForm: false });
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
  render() {
    const { snackBar } = this.state;
    return (
      <div>
        <FormHeading
          showForm={this.showForm}
          highlightSignin={this.state.showSigninForm}
        />
        <ToggleDisplay show={this.state.showSigninForm}>
          <SigninForm showSnackBar={this.showSnackBar} />
          <SocialAuth showSnackBar={this.showSnackBar} />
        </ToggleDisplay>
        <ToggleDisplay show={!this.state.showSigninForm}>
          <SignupForm showSnackBar={this.showSnackBar} />
          <SocialAuth showSnackBar={this.showSnackBar} />
        </ToggleDisplay>
        <SnackBar
          showSnackBar={snackBar.open}
          handleClose={this.handleSnackBarClose}
          variant={snackBar.variant}
          message={snackBar.message}
        />
      </div>
    );
  }
}
