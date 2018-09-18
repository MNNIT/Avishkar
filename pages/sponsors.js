import React, { Component } from "react";
import Meta from "../components/Meta";
import PastSponsors from "../components/sponsors/PastSponsors";
import Footer from "../components/Footer";
export default class extends Component {
  render() {
    return (
      <div>
        <Meta />
        <PastSponsors />
        <Footer />
      </div>
    );
  }
}
