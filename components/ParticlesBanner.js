import React, { Component } from "react";

class ParticlesBanner extends Component {
  render() {
    return (
      <section>
        <div id="particles-banner" style={{ fontSize: "0px" }}>a</div>
        <div className="intro">
          <h1>Avishkar 2018</h1>
          <h2>The annual techfest of MNNIT Allahabad</h2>
        </div>
        <style jsx>
          {`
            #particles-banner {
              width: 100vw;
              height: 100vh;
              background: #11998e;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #38ef7d, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #38ef7d, #11998e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



            }
            .intro {
              max-width: 100%;
              height: 300px;
              padding: 20px 100px;
              color: white;
              box-sizing: border-box;
              text-align: center;
              position:absolute;
              top:50%;
              left:50%;
              transform:translate(-50%,-50%);
            }
            .intro > * {
              font-weight: 400;
            }
            .intro h1 {
              font-size: 42px;
            }
          `}
        </style>
      </section>
    );
  }
}
export default ParticlesBanner;
