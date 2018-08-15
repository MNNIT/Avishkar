import React, { Component } from "react";

class ParticlesBanner extends Component {
  render() {
    return (
      <section>
        <div
          id="particles-banner"
          className="primary-bg-color"
          style={{ fontSize: "0px" }}
        >
          a
        </div>
        <div className="intro" style={{ fontFamily: "rustico" }}>
          <h1>Avishkar 2018</h1>
          <h2>The annual techfest of MNNIT Allahabad</h2>
        </div>
        <style jsx>
          {`
            #particles-banner {
              width: 100vw;
              height: 100vh;
              background-image: url("/static/backgrounds/cover.jpeg");
              background-size: 100vw 100vh;
            }

            .intro {
              width: 100%;
              height: 300px;
              padding: 20px;
              color: white;
              box-sizing: border-box;
              text-align: center;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            .intro > * {
              font-weight: 400;
            }
            h1 {
              font-size: 60px;
              color: #e91e63;
              color: white;
            }
            h2 {
              font-size: 32px;
              color: #2196f3;
              color: white;
            }
            @media (max-width: 700px) {
              h1 {
                font-size: 34px;
              }
              h2 {
                font-size: 24px;
              }
            }
          `}
        </style>
      </section>
    );
  }
}
export default ParticlesBanner;
