import React, { Component } from "react";
import axios from "axios";
import url from "../config";
axios.defaults.baseURL = url;
import ToggleDisplay from "react-toggle-display";
import Profile from "../components/dashboard/Profile";
import Register from "../components/dashboard/Register.js";
import Router from "next/router";
import Meta from "../components/Meta";
import SideBar from "../components/dashboard/sideBar";
import { withRouter } from "next/router";
import Link from "next/link";
import RegisterdEvents from "../components/dashboard/RegisteredEvents";
// import NavList from "../com";
export default withRouter(
  class extends Component {
    state = {
      profile: {
        name: "",
        email: "",
        phone: "",
        college: "",
        loading: true
      },
      events: {
        registeredEvents: [],
        loading: true
      }
    };
    componentWillMount() {}
    // componentDidMount() {
    //   this.fetchUserProfile();
    //   this.fetchRegisteredEvents();
    // }
    fetchUserProfile = () => {
      axios
        .get("/api/profile")
        .then(res => {
          console.log("data", res.data);
          if (res.status == 200) {
            const { profile } = res.data;
            this.setState({
              loading: false,
              profile
            });
          }
        })
        .catch(function(err) {
          if (err.response.status == 401) {
            Router.push("/auth");
          }
        });
    };
    fetchRegisteredEvents = () => {
      axios
        .get("/api/registered-events")
        .then(res => {
          if (res.data.success) {
            const { registeredEvents } = res.data;
            this.setState({
              events: {
                registeredEvents,
                loading: false
              }
            });
          }
        })
        .catch(function(err) {
          if (err.response.status == 401) {
            Router.push("/auth");
          }
        });
    };
    componentCheck(tab) {
      if (tab === "profile" || tab === undefined) {
        return (
          <Profile
            name={this.props.name}
            email={this.props.email}
            phone={this.props.phone}
            college={this.props.college}
          />
        );
      }
      if (tab === "register") {
        return <Register />;
      }
    }
    render() {
      const tab = this.props.router.query.tab;
      return (
        <>
          <Meta />
          <div className="row">
            <div className="col-md-2 col-xs-12">
              <SideBar />
            </div>
            <div className="col-md-10 col-xs-12 container">
              {this.componentCheck(tab)}
            </div>
          </div>
          <style jsx>
            {`
              div.container {
                width: 100%;
                height: 90vh;
                box-sizing: border-box;
                border-radius: 4px;
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
                  0 3px 6px rgba(0, 0, 0, 0.23);
                padding: 20px;
                justify-content: center;
              }
            `}
          </style>
        </>
      );
    }
  }
);
