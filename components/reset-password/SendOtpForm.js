import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";
// import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import baseURL from "../../config";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default class extends Component {
  state = {
    formData: {
      resetToken: "",
      password: "",
      repassword: ""
    },
    showResetTokenError: false,
    showPasswordError: false,
    showRepasswordError: false,
    loading: false
  };
  updateField = (e, field) => {
    const formData = { ...this.state.formData };
    formData[field] = e.target.value;
    this.setState({ formData });
  };
  isErrorInForm = () => {
    const {
      showResetTokenError,
      showPasswordError,
      showRepasswordError
    } = this.state;
    if (showResetTokenError || showPasswordError || showRepasswordError)
      return true;
    return false;
  };
  checkResetToken = () => {
    if (this.state.formData.resetToken.trim().length < 1) {
      this.setState({
        showResetTokenError: true
      });
    } else {
      this.setState({
        showResetTokenError: false
      });
    }
  };
  checkPassword = () => {
    if (this.state.formData.password.trim().length < 6) {
      this.setState({
        showPasswordError: true
      });
    } else {
      this.setState({
        showPasswordError: false
      });
    }
  };
  checkRepassword = () => {
    if (
      this.state.formData.repassword.trim() !==
      this.state.formData.password.trim()
    ) {
      this.setState({
        showRepasswordError: true
      });
    } else {
      this.setState({
        showRepasswordError: false
      });
    }
  };
  submitForm = e => {
    e.preventDefault();
    if (this.isErrorInForm()) {
      // alert("errors in form");
      this.props.showSnackBar("Error in form!", "error");
      return;
    }
    const { resetToken, password } = this.state.formData;
    const formData = {
      resetToken: resetToken.trim(),
      password: password.trim()
    };
    // console.log("sending req");
    axios
      .post("/api/new-password", formData)
      .then(res => {
        if (res.data.success) {
          // alert("password updated successfully");
          this.props.showSnackBar("Password updated Successfully", "success");
          setTimeout(() => {
            Router.push("/auth");
          }, 2500);
        } else {
          // alert(res.data.message);
          this.props.showSnackBar(res.data.message, "error");
        }
      })
      .catch(err => {
        // console.log(err);
        // alert("something went wrong");
        this.props.showSnackBar("Something went wrong!", "error");
      });
  };
  render() {
    const { formData } = this.state;
    return (
      <div className="form-container">
        <form action="">
          <label>Code</label>
          <input
            type="text"
            value={formData.resetToken}
            onChange={e => {
              this.updateField(e, "resetToken");
            }}
            onBlur={this.checkResetToken}
            required
          />
          <ToggleDisplay tag="p" show={this.state.showResetTokenError}>
            Please correct the code
          </ToggleDisplay>
          <label>New Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={e => {
              this.updateField(e, "password");
            }}
            onBlur={this.checkPassword}
            required
          />
          <ToggleDisplay tag="p" show={this.state.showPasswordError}>
            Password should contain min 6 characters
          </ToggleDisplay>
          <label>Retype new password</label>
          <input
            type="password"
            value={formData.repassword}
            onChange={e => {
              this.updateField(e, "repassword");
            }}
            onBlur={this.checkRepassword}
            required
          />
          <ToggleDisplay tag="p" show={this.state.showRepasswordError}>
            Passwords do not match!
          </ToggleDisplay>
          <button type="submit" onClick={this.submitForm}>
            {this.state.loading ? "SUBMITTING" : "UPDATE PASSWORD"}
          </button>
        </form>

        <style jsx>
          {`
            div.form-container {
              padding: 30px;
              width: 100%;
              box-sizing: border-box;
            }
            input {
              display: block;
              width: 100%;
              margin: 10px 0px;
              height: 40px;
              padding: 0px 10px;
              outline: none;
              box-sizing: border-box;
              border-radius: 3px;
              border: 2px solid #e0e0e0;
              transition: all 0.5s;
            }
            input:focus {
              border: 2px solid #f48fb1;
            }
            label {
              color: #424242;
            }
            button {
              background-color: #e91e63;
              outline: none;
              border: none;
              color: white;
              padding: 10px 15px;
              border-radius: 3px;
              font-family: "Source Sans Pro", sans-serif;
              margin-top: 5px;
              cursor: pointer;
            }
          `}
        </style>
      </div>
    );
  }
}
