import React, { Component } from "react";
//import ToggleDisplay from "react-toggle-display";
// import Link from "next/link";
import Meta from "../components/Meta";
import NavBar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import { withRouter } from "next/router";
import SendEmailForm from "../components/reset-password/SendEmailForm";
import SendOtpForm from "../components/reset-password/SendOtpForm";
import axios from "axios";
import baseURL from "../config";

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

class ResetPassword extends Component {
  renderSubComponent = tab => {
    if (!tab || tab === "email")
      return (
        <div>
          <SendEmailForm />
        </div>
      );
    else if (tab === "code")
      return (
        <div>
          <SendOtpForm />
        </div>
      );
    else return "404 error";
  };

  render() {
    const { tab } = this.props.router.query;
    return (
      <>
        <Meta />
        <NavBar />
        <div className="row ">
          <div className="col-md-4 col-xs-10 container">
            {this.renderSubComponent(tab)}
          </div>
        </div>
        <style jsx>
          {`
            div.container {
              margin: 0 auto;
              margin-top: 50px;
              // width: 540px;
              box-sizing: border-box;
              border-radius: 4px;
              box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
                0 3px 6px rgba(0, 0, 0, 0.23);
              background-color: white;
              padding: 0;
            }
          `}
        </style>
      </>
    );
  }
}
export default withRouter(ResetPassword);
