import React, { Component } from "react";
import axios from "axios";
import url from "../config";
axios.defaults.baseURL = url;
axios.defaults.withCredentials = true;
import ToggleDisplay from "react-toggle-display";
import Profile from "../components/dashboard/profile";
import Router from "next/router";
import Meta from "../components/Meta";
import RegisterdEvents from "../components/dashboard/RegisteredEvents";
// import NavList from "../com";
export default class extends Component {
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
  componentDidMount() {
    this.fetchUserProfile();
    this.fetchRegisteredEvents();
  }
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
  render() {
    return (
      <>
        <Meta />
        <div className="row">
          <div className="col-md-3" />
        </div>
        {/* <ToggleDisplay show={this.state.loading}>Loading....</ToggleDisplay> */}
        <ToggleDisplay show={!this.state.profile.loading}>
          {/* <UserInfoCard {...this.state.profile} /> */}
          <div className="row">
            <div className="col-md-3">
              <Profile {...this.state.profile} />
            </div>
            <div className="col-md-6" />
          </div>
        </ToggleDisplay>
        <ToggleDisplay hide={this.state.events.loading}>
          <RegisterdEvents
            registeredEvents={this.state.events.registeredEvents}
          />
        </ToggleDisplay>
      </>
    );
  }
}
