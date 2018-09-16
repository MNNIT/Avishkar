import React, { Component } from "react";
import Link from "next/link";
import load from "../loadHomeBg";
class ParticlesBanner extends Component {
  bg = React.createRef();
  random = () => {
    let min = 1,
      max = 5;
    let s = Math.floor(Math.random() * (max - min + 1)) + min;
    return `/static/img/back/download (${s}).jpg`;
  };
  componentDidMount() {
    load(this.bg.current);
  }

  render() {
    return (
      <section>
        <div
          id="particles-banner"
          className="primary-bg-color"
          style={{ fontSize: "0px" }}
        >
          <canvas ref={this.bg} id="canvas" data-image={this.random()} />
        </div>
        <div className="intro" style={{ fontFamily: "decovar" }}>
          <h1>AVISHKAR</h1>

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
            @font-face {
              font-family: "Decovar";
              src: url("static/font/Decovar.ttf");
            }
            .middle {
              position: relative;
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
              user-select: none;
            }
            h1 {
              margin: 0;
              font-size: 90px;
              letter-spacing: 20px;
              color: white;
              font-variation-settings: "SSTR" 1000;
              font-family: "Decovar";
              animation: loadin 2s infinite linear forwards;
            }
            @keyframes loadin {
              0% {
                font-variation-settings: "SSTR" 1000;
              }
              50% {
                font-variation-settings: "SSTR" 0;
              }
            }
            h1 {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: -50px;
              width: 100%;
              height: 100%;
              text-align: center;
              transform: translateZ(0);
              backface-visibility: hidden;
            }
            section:before {
              content: "";
              background: #7c50bf
                url(/static/backgrounds/cheap_diagonal_fabric.png);
              background-blend-mode: multiply;
              mix-blend-mode: multiply;
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              z-index: 10;
            }
            canvas {
              opacity: 0;
              transition: 1s opacity cubic-bezier(0.55, 0, 0.1, 1);
            }
            canvas.ready {
              opacity: 0.4;
            }
            .intro > * {
              font-weight: 600;
            }
            h1 {
              color: #e91e63;
              color: white;
            }
            .downdiv {
              position: relative;
              // top: 40%;
            }
            .downdiv button {
              outline: none;
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
              border-radius: 4px;
              text-decoration: none;
              padding: 0.75em 2.5em;
              border-style: none;
              font-size: 1.175rem;
              font-family: Source Sans Pro, Open Sans, Segoe UI, sans-serif;
              transition-duration: 0.3s;
              transition-property: transform;              -ms-transform: translateZ(0);
              transform: translateZ(0);
              transform: translateY(-6px);
              animation-name: hover;
              animation-duration: 1.5s;
              animation-delay: 0.3s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
              animation-direction: alternate;
            }
            .downdiv button:before {
              pointer-events: none;
              position: absolute;
              z-index: -1;
              content: "";
              top: 100%;
              left: 5%;
              height: 10px;
              width: 90%;
              opacity: 0;
             
              background: radial-gradient(
                ellipse at center,
                rgba(0, 0, 0, 0.35) 0%,
                rgba(0, 0, 0, 0) 80%
              );
              transition-duration: 0.3s;
              transition-property: transform, opacity;
              opacity: 0.4;
              transform: translateY(6px);
              animation-name: hover-shadow;
              animation-duration: 1.5s;
              animation-delay: 0.3s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
              animation-direction: alternate;
            }
            @keyframes hover {
              50% {
                transform: translateY(-3px);
              }

              100% {
                transform: translateY(-6px);
              }
            } 

              50% {
                transform: translateY(3px);
                opacity: 1;
              }

              100% {
                transform: translateY(6px);
                opacity: 0.4;
              }
            }

            @keyframes hover-shadow {
              0% {
                transform: translateY(6px);
                opacity: 0.4;
              }

              50% {
                transform: translateY(3px);
                opacity: 1;
              }

              100% {
                transform: translateY(6px);
                opacity: 0.4;
              }
            }

           

            @keyframes hover {
              50% {
                transform: translateY(-3px);
              }

              100% {
                transform: translateY(-6px);
              }
            }
            h2, h4 {
              font-size: 32px;
              color: #2196f3;
              color: white;
              line-height: 2rem;
              letter-spacing: 2px;
            }
            @media (max-width: 700px) {
              h1 {
                font-size: 34px;
              }
              .downdiv {
                position: relative;
                // top: 35vh;
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

          `}
        </style>
      </section>
    );
  }
}
export default ParticlesBanner;
