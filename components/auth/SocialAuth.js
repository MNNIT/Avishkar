import axios from "../../axios";
import React, { Component } from "react";
axios.defaults.withCredentials = true;

export default class extends Component {
  componentDidMount() {
    const { showSnackBar } = this.props;
    window.addEventListener("message", function(event) {
      // console.log({ event });
      //console.log(event.data);
      if (
        (event.origin === "http://localhost:3000" ||
          "https://api.avishkarmnnit.in") &&
        event.data === "loginsuccess"
      ) {
        this.setTimeout(() => {
          window.location.replace("/dashboard");
        }, 3000);
        showSnackBar("Redirecting to dashboard ...", "basic");
      } else {
        // showSnackBar("Something went wrongg!", "error");
      }
    });
  }
  handleGoogleAuth = async () => {
    try {
      const googleLoginWindow = window.open(
        "",
        "_blank",
        "width=800,height=500"
      );
      googleLoginWindow.document.write("Loading preview...");
      const res = await axios.post("/api/glogin");
      if (res.data.flag === 1) {
        // console.log(res.data.msg);
        googleLoginWindow.location.href = res.data.msg;
      }
    } catch (err) {
      console.log(err);
    }
  };
  handleFacebookAuth = async () => {
    try {
      console.log("logging in with facebook.");
      var facebookLoginWindow = window.open(
        "",
        "_blank",
        "width=800,height=500"
      );
      facebookLoginWindow.document.write("Loading preview...");
      const res = await axios.post("/api/fblogin");
      if (res.data.flag === 1) {
        console.log(res.data.msg);
        facebookLoginWindow.location.href = res.data.msg;
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div className="container">
        <div onClick={this.handleGoogleAuth} className="gbtn-wrapper btn">
          <img src="/static/img/gbtn.png" alt="" />
        </div>
        {/* <div onClick={this.handleFacebookAuth} className="fbtn-wrapper btn">
          <img src="/static/img/fsignin-btn.png" alt="" />
        </div> */}
        <style jsx>
          {`
            div.container {
              box-sizing: border-box;
              margin: 0;
              padding: 0 0 15px 0;
              width: 100%;
              display: flex;
              justify-content: center;
            }
            .btn {
              cursor: pointer;
              width: 220px;
              height: auto;
            }
            img {
              width: 100%;
              height: auto;
            }
          `}
        </style>
      </div>
    );
  }
}
