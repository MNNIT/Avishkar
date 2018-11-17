import React, { Component } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default class extends Component {
  state = {
    links: [
      ["/", "HOME"],
      ["/events", "EVENTS"],
      ["/gnosiomania", "GNOSIOMANIA"],
      ["/workshops", "WORKSHOPS"],
      ["/team", "TEAM"],
      ["/sponsors", "SPONSORS"]
    ]
  };

  render() {
    const { links, login, snackBar } = this.state;
    return (
      <>
        <DesktopNav links={links} />
        <MobileNav links={links} />
      </>
    );
  }
}
