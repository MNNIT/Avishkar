import React, { Component } from "react";
class IconEvents extends Component {
  constructor() {
    super();
    this.eventsInfo = [
      "cyberquest",
      "aerodynamix",
      "genesis",
      "mechrocosm",
      "nirmaan",
      "oligopoly",
      "rasayans",
      "robomania",
      "monopoly"
    ];
  }
  render() {
    return (
      <section>
        <h2>Events at Avishkar</h2>
        <div className="container">
          {this.eventsInfo.map(function(event) {
            return (
              <div className="card">
                <div className="element" style={{ cursor: "pointer" }}>
                  <div className="img-container">
                    <img src={`static/icon/${event}.png`} />
                  </div>
                  <div className="event-title">
                    <p>{event}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <style jsx>{`
          section {
            padding: 20px 0px;
          }
          h2 {
            text-align: center;
          }
          .container {
            display: flex;
            width: 80%;
            height: auto;
            margin: 0 auto;
            flex-wrap: wrap;
            justify-content: center;
            box-sizing: border-box;
          }
          div.card {
            width: 12%;
            height: auto;
            background: #eeeeee;
            z-index: 10;
            transition: transform 0.6s;
            margin: 5px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);
            border-radius: 4px;
            box-sizing: border-box;
            padding: 10px 20px;
          }
          .element {
            width: 100%;
            height: auto;
          }
          .img-container {
            width: 100%;
            height: auto;
          }
          img {
            width: 100%;
            height: auto;
          }
          .event-title {
            text-align: center;
          }
        `}</style>
      </section>
    );
  }
}
export default IconEvents;
