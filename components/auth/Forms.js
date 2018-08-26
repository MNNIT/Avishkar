import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import FormHeading from "./FormHeading";
import SocialAuth from "./SocialAuth";
export default class extends Component {
  state = {
    showSigninForm: true
  };
  showForm = formType => {
    if (formType == "signin") {
      this.setState({ showSigninForm: true });
    } else if (formType == "signup") {
      this.setState({ showSigninForm: false });
    }
  };
  render() {
    return (
      <div>
        <FormHeading
          showForm={this.showForm}
          highlightSignin={this.state.showSigninForm}
        />
        <ToggleDisplay show={this.state.showSigninForm}>
          <SigninForm />
          <SocialAuth />
        </ToggleDisplay>
        <ToggleDisplay show={!this.state.showSigninForm}>
          <SignupForm />
          <SocialAuth />
        </ToggleDisplay>
      </div>
    );
  }
}
