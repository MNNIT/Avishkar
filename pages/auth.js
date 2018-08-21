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
        <NavBar />
        <MobileNav />
        <div className="row ">
          <div className="col-md-4 col-xs-10 container">
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
              background-color: #faaca8;
              background-image: linear-gradient(
                19deg,
                #faaca8 0%,
                #ddd6f3 100%
              );
            }
            div.container {
              margin: 0 auto;
              margin-top: 50px;
              // width: 540px;
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
