import React, { Component } from "react";
import Meta from "../components/Meta";
import Forms from "../components/auth/Forms";
import NavBar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
export default class extends Component {
  render() {
    return (
      <>
        <Meta />
        <div className="row ">
          <div className="col-md-4 col-xs-12 col-sm-6 container">
            <Forms />
          </div>
        </div>
        <section id="background" />
        <style jsx>
          {`
            #background {
              position: fixed;
              top: 0px;
              left: 0px;
              width: 100vw;
              height: 100vh;
              z-index: -1;
              background-color: #eeeeee;
            }
            div.container {
              margin: 0 auto;
              margin-top: 80px;
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
