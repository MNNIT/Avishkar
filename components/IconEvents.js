import React, { Component } from "react";
import Link from "next/link";
class IconEvents extends Component {
  constructor() {
    super();
    this.eventsInfo = [
      "cyberquest",
      "electromania",
      "aerodynamix",
      "genesis",
      "mechrocosm",
      "nirmaan",
      "powersurge",
      "rasayans",
      "robomania",
      "oligopoly",
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
                <Link as={`/events/${event}`} href={`/events?name=${event}`}>
                  <a>
                    <div
                      className="event-element"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="img-container">
                        <img src={`static/icon/${event}.png`} />
                      </div>
                      <div className="event-title">
                        <p>{event}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
        <style jsx>{`
          section {
            padding: 20px 0px;
            background-color: #f5f5f5;
          }
          h2 {
            text-align: center;
            color: #e91e63;
          }
          div.container {
            display: flex;
            width: 80%;
            height: auto;
            margin: 0 auto;
            flex-wrap: wrap;
            justify-content: center;
            box-sizing: border-box;
          }
          div.card {
            width: 140px;
            height: auto;
            background-color: white;
            z-index: 10;
            transition: transform 0.6s;
            margin: 5px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);
            border-radius: 4px;
            box-sizing: border-box;
            padding: 10px 20px;
            transition: all 0.5s;
          }

          div.event-element {
            width: 100%;
            height: auto;
          }
          div.img-container {
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
          a {
            text-decoration: none;
            color: black;
          }
          @media (max-width: 700px) {
            div.container {
              width: 90%;
            }
            section {
              background-color: white;
            }
          }
          @media (min-width: 701px) {
            div.card:hover {
              box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
                0 10px 10px rgba(0, 0, 0, 0.22);
            }
          }
        `}</style>
      </section>
    );
  }
}
export default IconEvents;
