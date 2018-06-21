import React, { Component } from "react";

class CanvasBalls extends Component {
  constructor() {
    super();
    this.titleInfo = [
      ["A", "#f44336"],
      ["V", "#3f51b5"],
      ["I", "#009688"],
      ["S", "#ff5722"],
      ["H", "#ffc107"],
      ["K", "#9c27b0"],
      ["A", "#2196F3"],
      ["R", "#607d8b"]
    ];
  }
  componentDidMount() {
    const canvas = this.refs.canvas;
    //const canvas = document.querySelector("#canvas");
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight - 10;
    canvas.width = windowWidth;
    canvas.height = windowHeight;
    const ctx = canvas.getContext("2d");
    let balls = [];

    const colors = [
      "rgba(244,67,54,0.3)",
      "rgba(233,30,99,0.3)",
      "rgba(33,150,243,0.3)",
      "rgba(76,175,80,0.3)",
      "rgba(255,235,59,0.3)"
    ];

    function Ball() {
      this.x = Math.random() * windowWidth;
      this.y = Math.random() * windowHeight;
      this.radius = 8 * Math.random();
      this.color = colors[Math.floor(Math.random() * 5)];
      this.vx = Math.random() / 20;
      this.vy = Math.random() / 20;
    }
    Ball.prototype.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    };
    Ball.prototype.update = function() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.y + this.vy > canvas.height || this.y + this.vy < 0) {
        this.vy = -this.vy;
      }
      if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
        this.vx = -this.vx;
      }
    };

    function draw() {
      //ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 20; i++) {
        let ball = balls[i];
        ball.update();
        ball.draw();
      }
      window.requestAnimationFrame(draw);
    }

    function drawBalls() {
      for (let i = 0; i < 20; i++) {
        let ball = new Ball();
        ball.draw();
        balls.push(ball);
        window.requestAnimationFrame(draw);
      }
    }
    drawBalls();
  }
  render() {
    return (
      <section>
        <canvas id="canvas" ref="canvas" />
        <div id="banner">
          <div id="title">
            {this.titleInfo.map(function(info, i) {
              return (
                <span key={i} style={{ color: info[1] }}>
                  {info[0]}
                </span>
              );
            }, this)}
          </div>
          <h1>The annual techfest of MNNIT Allahabad</h1>
          {/* <button>Events</button> */}
        </div>
        <style jsx>
          {`
            section {
              box-sizing: border-box;
            }
            #canvas {
              display: block;
              /* background-color:white;
            background-image: linear-gradient(45deg, #d6d2d4 0%, #ffffff 22%, #ffffff 78%, #d6d2d4 100%); */
            }
            #banner {
              position: absolute;
              top: 40%;
              left: 50%;
              transform: translate(-50%, -50%);
              text-align: center;
            }
            #title {
              font-size: 60px;
              font-family: "Faster One", cursive;
              margin: 0 auto;
            }
            #title span {
              margin: 5px;
            }
            h1 {
              font-family: "Open Sans", sans-serif;
              font-size: 20px;

              color: #424242;
            }
            button {
              padding: 5px 15px;
              background-color: inherit;
              border-radius: 50px/50px;
              color: #3f51b5;
              font-size: 17px;
              margin: 30px;
              border: 2px solid;
            }
          `}
        </style>
      </section>
    );
  }
}
export default CanvasBalls;
