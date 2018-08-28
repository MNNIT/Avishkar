import React, { Component } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import baseURL from "../config";
import axios from "axios";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default class extends Component {
  state = {
    links: [["/", "Home"], ["/events", "Events"], ["/team", "Team"]]
  };
  componentDidMount() {
    axios.get("/api/check-state").then(res => {
      if (res.data.success) {
        const newLink = ["/dashboard", "Dashboard"];
        const links = [...this.state.links, newLink];
        this.setState({ links });
      } else {
        const newLink = ["/auth", "Login"];
        const links = [...this.state.links, newLink];
        this.setState({ links });
      }
    });
  }
  render() {
    const { path } = this.props;
    const { links } = this.state;
    return (
      <>
        <DesktopNav path={path} links={links} />
        <MobileNav path={path} links={links} />
      </>
    );
  }
}
