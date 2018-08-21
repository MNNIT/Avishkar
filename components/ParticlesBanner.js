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
          <div className="view">
            <div className="plane main">
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
            </div>
          </div>
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
               {
                /* background: #222; */
              }
              background-size: 100vw 95vh;
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
            .title {
              position: absolute;
              left: 0;
              right: 0;
              top: 7%;
              color: #ffffff;
              font-family: "Rustico", sans-serif;
              font-size: 500%;
              animation: up 1.2s infinite;
            }

            @keyframes up {
              0% {
                top: 6%;
              }
              25% {
                top: 5.25%;
              }
              50% {
                top: 5.5%;
              }
              75% {
                top: 5.75%;
              }
              100% {
                top: 6%;
              }
            }

            html,
            body {
              background: #222;
              overflow: hidden;
              width: 100%;
              height: 100%;
            }

            #particles-js {
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
            }

            .view {
              position: absolute;
              top: 45%;
              left: 0;
              right: 0;
              -webkit-perspective: 400;
              perspective: 400;
            }

            .plane {
              width: 120px;
              height: 120px;
              -webkit-transform-style: preserve-3d;
              transform-style: preserve-3d;
            }

            .plane.main {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              margin: auto;
              -webkit-transform: rotateX(60deg) rotateZ(-30deg);
              transform: rotateX(60deg) rotateZ(-30deg);
              -webkit-animation: rotate 20s infinite linear;
              animation: rotate 20s infinite linear;
            }

            .plane.main .circle {
              width: 120px;
              height: 120px;
              position: absolute;
              -webkit-transform-style: preserve-3d;
              transform-style: preserve-3d;
              border-radius: 100%;
              box-sizing: border-box;
              box-shadow: 0 0 60px crimson, inset 0 0 60px crimson;
            }

            .plane.main .circle::before,
            .plane.main .circle::after {
              content: "";
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              margin: auto;
              width: 10%;
              height: 10%;
              border-radius: 100%;
              background: crimson;
              box-sizing: border-box;
              box-shadow: 0 0 60px 2px crimson;
            }

            .plane.main .circle::before {
              -webkit-transform: translateZ(-90px);
              transform: translateZ(-90px);
            }

            .plane.main .circle::after {
              -webkit-transform: translateZ(90px);
              transform: translateZ(90px);
            }

            .plane.main .circle:nth-child(1) {
              -webkit-transform: rotateZ(72deg) rotateX(63.435deg);
              transform: rotateZ(72deg) rotateX(63.435deg);
            }

            .plane.main .circle:nth-child(2) {
              -webkit-transform: rotateZ(144deg) rotateX(63.435deg);
              transform: rotateZ(144deg) rotateX(63.435deg);
            }

            .plane.main .circle:nth-child(3) {
              -webkit-transform: rotateZ(216deg) rotateX(63.435deg);
              transform: rotateZ(216deg) rotateX(63.435deg);
            }

            .plane.main .circle:nth-child(4) {
              -webkit-transform: rotateZ(288deg) rotateX(63.435deg);
              transform: rotateZ(288deg) rotateX(63.435deg);
            }

            .plane.main .circle:nth-child(5) {
              -webkit-transform: rotateZ(360deg) rotateX(63.435deg);
              transform: rotateZ(360deg) rotateX(63.435deg);
            }

            @-webkit-keyframes rotate {
              0% {
                -webkit-transform: rotateX(0) rotateY(0) rotateZ(0);
                transform: rotateX(0) rotateY(0) rotateZ(0);
              }
              100% {
                -webkit-transform: rotateX(360deg) rotateY(360deg)
                  rotateZ(360deg);
                transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
              }
            }

            @keyframes rotate {
              0% {
                -webkit-transform: rotateX(0) rotateY(0) rotateZ(0);
                transform: rotateX(0) rotateY(0) rotateZ(0);
              }
              100% {
                -webkit-transform: rotateX(360deg) rotateY(360deg)
                  rotateZ(360deg);
                transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
              }
            }
          `}
        </style>
      </section>
    );
  }
}
export default ParticlesBanner;
