import React, { Component } from "react";
import Meta from "../components/Meta";
import Sponsors from "../components/sponsors/Sponsors";
import Footer from "../components/Footer";
export default class extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}
