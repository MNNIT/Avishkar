import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";
// import Link from "next/link";
import axios from "axios";
import baseURL from "../../config";
import Router from "next/router";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default class extends Component {
  state = {
    formData: {
      email: ""
    },
    showEmailError: false,
    loading: false
  };
  updateField = (e, field) => {
    const formData = { ...this.state.formData };
    formData[field] = e.target.value;
    this.setState({ formData });
  };
  submitForm = e => {
    e.preventDefault();
    const { formData } = { ...this.state };
    formData.email = formData.email.trim();
    if (formData.email.length === 0) {
      this.props.showSnackBar("Email field is Empty!", "error");
      // alert("email is empty");
      return;
    }
    this.setState({ loading: true });
    //send forgot password
    axios
      .post("/api/forgot-password", formData)
      .then(res => {
        if (res.data.success) {
          this.props.showSnackBar(res.data.message, "success");
          setTimeout(() => {
            Router.push("/reset-password/code");
          }, 2500);
        } else {
          this.setState({ loading: true });
          // alert(res.data.message);
          this.props.showSnackBar(res.data.message, "error");
        }
      })
      .catch(err => {
        this.props.showSnackBar("something went wrong", "error");
        // console.log(err);
        this.setState({ loading: true });
      });
  };
  render() {
    const { formData } = this.state;
    return (
      <div className="form-container">
        <form action="">
          <label>EMAIL</label>
          <input
            type="email"
            value={formData.email}
            onChange={e => {
              this.updateField(e, "email");
            }}
            onBlur={this.checkEmail}
            required
          />
          <ToggleDisplay tag="p" show={this.state.showEmailError}>
            This email doesn't exist! Register now
          </ToggleDisplay>
          <button type="submit" onClick={this.submitForm}>
            {this.state.loading ? "SUBMITTING" : "RESET PASSWORD"}
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
