import { GoogleLogin } from "react-google-login";
import React, { Component } from "react";
import axios from "axios";
import baseURL from "../../config";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default class extends Component {
  config = {
    scope: "https://www.googleapis.com/auth/spreadsheets",
    clientId:
      "358161711406-nvle0nruv96vock0270b3dgcr3j7it8h.apps.googleusercontent.com"
  };
  onSuccess = response => {
    console.log(response);
    const { access_token } = response.Zi;
    this.createSpreadsheet(access_token);
  };
  onFailure = response => {
    console.log(response);
    alert("failure");
  };
  createSpreadsheet = token => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const formData = {
      eventName: "webster"
    };
    axios
      .post("/api/spreadsheets", formData, config)
      .then(res => {
        console.log("response POST /api/");
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <GoogleLogin
        clientId={this.config.clientId}
        scope={this.config.scope}
        buttonText="Login"
        onSuccess={this.onSuccess}
        onFailure={this.onFailure}
        accessType="offline"
        responseType="id_token code"
      />
    );
  }
}
