import React, { Component } from "react";
// import axios from "../axios";
import ToggleDisplay from "react-toggle-display";
import ProfileSection from "../components/dashboard/profile/Index";
import Register from "../components/dashboard/Register.js";
import Router from "next/router";
import Meta from "../components/Meta";
import SideBar from "../components/dashboard/sideBar";
import { withRouter } from "next/router";
import NavBar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import Socials from "../components/Socials";
import Footer from "../components/Footer";
import Dash from "../components/dashboard/Dash";
import Link from "next/link";
import RegisterdEvents from "../components/dashboard/RegisteredEvents";
import TeamEvents from "../components/dashboard/team-events/TeamEvents";
import axios from "axios";
import baseURL from "../config";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;
// import NavList from "../com";
export default withRouter(
  class extends Component {
    componentCheck(tab, event) {
      if (tab === undefined || tab === "dashboard") {
        return <Dash />;
      }
      if (tab === "profile") {
        return <ProfileSection />;
      }
      if (tab === "register") {
        return <Register event={event} />;
      }
      if (tab === "team events") {
        return <TeamEvents />;
      }
    }
    render() {
      const { router } = this.props;
      const { tab, event } = router.query;
      return (
        <>
          <Meta />
          <NavBar path={router.pathname} color={"#212121"} />
          <div className="row">
            <div className="col-md-2 col-xs-12">
              <SideBar />
            </div>
            <div className="col-md-10 col-xs-12 container">
              {this.componentCheck(tab, event)}
            </div>
          </div>
          <Footer />
          <style jsx>
            {`
              div.container {
                width: 100%;
                min-height: 60vh;
                box-sizing: border-box;
                background-color: #eeeeee;
                padding: 20px;
                padding-bottom: 50px;
                justify-content: center;
              }
            `}
          </style>
        </>
      );
    }
  }
);
