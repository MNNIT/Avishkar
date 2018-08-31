import React, { Component } from "react";
import Link from "next/link";
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
          <h1>Avishkar</h1>
          <div className="downdiv">
            <h2>The annual techno management fest of MNNIT Allahabad</h2>
            <h4>26 to 29 of September 2018</h4>
            <Link as="/dashboard/register" href="/dashboard?tab=register">
              <a>
                <button>REGISTER</button>
              </a>
            </Link>
          </div>
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
              top: 30%;
              left: 50%;
              transform: translate(-50%, -50%);
              -webkit-user-select: none; /* Chrome all / Safari all */
              -moz-user-select: none; /* Firefox all */
              -ms-user-select: none; /* IE 10+ */
              user-select: none;
            }
            .intro > * {
              font-weight: 400;
            }
            h1 {
              font-size: 60px;
              color: #e91e63;
              color: white;
            }
            .downdiv {
              position: relative;
              top: 45%;
            }
            .downdiv button {
              color: whitesmoke;
              text-align: center;
              margin: 0px;
              font-weight: 400;
              box-shadow: rgba(108, 174, 221, 0.4) 0px 0px 80px;
              cursor: pointer;
              background: linear-gradient(
                45deg,
                rgb(108, 174, 221),
                rgb(57, 145, 208)
              );

              /*background: linear-gradient(
                45deg,
                rgb(173, 120, 220),
                rgb(142, 68, 207)
              );*/
              border-radius: 4px;
              text-decoration: none;
              padding: 0.75em 2.5em;
              border-style: none;
              font-size: 1.175rem;
              font-family: Source Sans Pro, Open Sans, Segoe UI, sans-serif;
            }
            h2,
            h4 {
              font-size: 32px;
              color: #2196f3;
              color: white;
            }
            @media (max-width: 700px) {
              h1 {
                font-size: 34px;
              }
              .downdiv {
                position: relative;
                top: 35vh;
              }
              .downdiv h2 {
                font-size: 22px;
              }
              .downdiv h4 {
                font-size: 18px;
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
