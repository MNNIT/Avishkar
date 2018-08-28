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
import CustomLoader from "../components/CustomLoader";
import SoloEvents from "../components/dashboard/SoloEvents";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;
// import NavList from "../com";
export default withRouter(
  class extends Component {
    state = {
      loading: true
    };
    componentDidMount() {
      axios
        .get("/api/check-state")
        .then(res => {
          if (res.data.success) {
            this.setState({ loading: false });
          } else {
            this.setState({ loading: true });
            Router.push("/auth");
          }
        })
        .catch(err => {
          if (err.response.status == 401) {
            Router.push("/auth");
          }
        });
    }
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
      if (tab === "teamevents") {
        return <TeamEvents />;
      }
      if ((tab = "soloevents")) {
        return <SoloEvents />;
      }
    }
    render() {
      const { router } = this.props;
      const { tab, event } = router.query;
      return (
        <>
          <Meta />
          {this.state.loading ? (
            <div className="loader">
              <CustomLoader />
            </div>
          ) : (
            <div className="row">
              <div className="col-md-2 col-xs-12">
                <SideBar />
              </div>
              <div className="col-md-10 col-xs-12 container">
                {this.componentCheck(tab, event)}
              </div>
            </div>
          )}
          <Footer />
          <style>
            {`
              div.container {
                width: 100%;
                min-height: 70vh;
                box-sizing: border-box;
                background-color: #eeeeee;
                padding: 20px;
                padding-bottom: 50px;
                justify-content: center;
              }
              div.loader{
                min-height: 70vh;
              }
              @media (max-width: 700px){
                div.row{
                  margin-top: 40px;
                }
              }
            `}
          </style>
        </>
      );
    }
  }
);
