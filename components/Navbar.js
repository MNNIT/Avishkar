import React, { Component } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import SnackBar from "../components/SnackBar";
import baseURL from "../config";
import axios from "axios";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default class extends Component {
  state = {
    links: [
      ["/", "Home"],
      ["/events", "Events"],
      ["/gnosiomania", "Gnosiomania"],
      ["/workshops", "Workshops"],
      ["/team", "Team"]
    ],
    login: false,
    snackBar: {
      open: false,
      variant: "",
      message: ""
    }
  };
  componentDidMount() {
    axios.get("/api/check-state").then(res => {
      if (res.data.success) {
        const newLink = ["/dashboard", "Dashboard"];
        const links = [...this.state.links, newLink];
        this.setState({ links, login: true });
      } else {
        const newLink = ["/auth", "Login"];
        const links = [...this.state.links, newLink];
        this.setState({ links });
      }
    });
  }
  handleSnackBarClose = () => {
    const { snackBar } = this.state;
    snackBar.open = false;
    this.setState({ snackBar });
  };
  showSnackBar = (message, variant) => {
    const { snackBar } = this.state;
    snackBar.open = true;
    snackBar.message = message;
    snackBar.variant = variant;
    this.setState({ snackBar });
  };
  render() {
    const { links, login, snackBar } = this.state;
    return (
      <>
        <DesktopNav
          links={links}
          login={login}
          showSnackBar={this.showSnackBar}
        />
        <MobileNav
          links={links}
          login={login}
          showSnackBar={this.showSnackBar}
        />
        <SnackBar
          showSnackBar={snackBar.open}
          handleClose={this.handleSnackBarClose}
          variant={snackBar.variant}
          message={snackBar.message}
        />
      </>
    );
  }
}
