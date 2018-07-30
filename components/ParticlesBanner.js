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
        <div className="intro">
          <h1>Avishkar 2018</h1>
          <h2>The annual techfest of MNNIT Allahabad</h2>
        </div>
        <style jsx>
          {`
            #particles-banner {
              width: 100vw;
              height: 100vh;
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
              font-size: 50px;
            }
            h2 {
              font-size: 28px;
            }
            @media (max-width: 700px) {
              h1 {
                font-size: 30px;
              }
              h2 {
                font-size: 20px;
              }
            }
          `}
        </style>
      </section>
    );
  }
}
export default ParticlesBanner;
