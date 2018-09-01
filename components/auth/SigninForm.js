import React, { Component } from "react";
// import axios from "../../axios";
import ToggleDisplay from "react-toggle-display";
import Router from "next/router";
import Link from "next/link";
import axios from "axios";
import baseURL from "../../config";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default class extends Component {
  state = {
    formData: {
      email: "",
      password: ""
    },
    showEmailError: false,
    loading: false
  };

  updateField = (e, field) => {
    const formData = { ...this.state.formData };
    formData[field] = e.target.value;
    this.setState({ formData });
  };
  checkEmail = () => {
    const { email } = this.state.formData;
    if (email.trim().length === 0) {
      this.setState({ showEmailError: false });
      return;
    }
    axios.post("/api/is-email-taken", { email }).then(res => {
      const { data } = res;
      if (!data.success) {
        this.setState({ showEmailError: false });
      } else {
        this.setState({ showEmailError: true });
      }
    });
  };
  submitForm = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const { formData } = this.state;
    axios
      .post("/api/signin", formData)
      .then(res => {
        if (res.data.success) {
          this.props.showSnackBar("Redirecting to dashboard", "basic");
          //redirect to /dashboard
          setTimeout(() => {
            window.location.replace("/dashboard");
          }, 3000);
        } else {
          const { message } = res.data;
          if (message === "Please check your inbox & verify now") {
            // alert("hello");
            this.props.showSnackBar(message, "basic");
          } else {
            this.props.showSnackBar(message, "error");
          }
          this.setState({ loading: false });
        }
      })
      .catch(err => {
        this.setState({ loading: false });
        this.props.showSnackBar("something went worng !", "error");
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
          <label>PASSWORD</label>
          <input
            type="password"
            value={formData.password}
            onChange={e => {
              this.updateField(e, "password");
            }}
            required
          />
          <button type="submit" onClick={this.submitForm}>
            {this.state.loading ? "SUBMITTING" : "SIGN IN"}
          </button>
        </form>
        <Link href="/reset-password">
          <a
            style={{
              color: "black"
            }}
          >
            Forgot password?
          </a>
        </Link>
        {/* <Link>
          <a href="/verify-email">verify email</a>
        </Link> */}
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
