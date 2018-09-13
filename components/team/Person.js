import ToggleDisplay from "react-toggle-display";
import React, { Component } from "react";
class Person extends Component {
  state = {
    detailsExpanded: false
  };
  expandDetails = () => {
    this.setState({
      detailsExpanded: true
    });
  };
  hideDetails = () => {
    this.setState({
      detailsExpanded: false
    });
  };
  render() {
    const { person } = this.props;
    return (
      <div
        className="card"
        // onMouseEnter={this.expandDetails}
        // onMouseLeave={this.hideDetails}
      >
        <div className="event-element">
          <div className="img-container">
            <img src={person.img} />
            <div id="image-layer" />
          </div>
        </div>
        <div
          className={
            this.state.detailsExpanded ? "event-title-animated" : "event-title"
          }
        >
          <p>{person.name}</p>
          <div>
            <p>
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </p>
            {/* <p>
              <a href={`tel:${person.phone}`}>{person.phone}</a>
            </p> */}
          </div>
        </div>
        <style jsx>{`
          .event-title {
            text-align: center;
            width: 100%;
            background-color: white;
            transition: all 0.5s;
          }
          .event-title-animated {
            position: absolute;
            transform: translateY(-100%);
            background-color: white;
            width: 100%;
            transition: all 0.5s;
            padding-top: 10px;
          }
          div#image-layer {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 80%;
            background-color: transparent;
          }
          section {
            padding: 20px 0px;
            background-color: #f5f5f5;
          }
          h2 {
            text-align: center;
            color: #e91e63;
          }

          div.card {
            width: 200px;
            position: relative;
            background-color: white;
            z-index: 10;
            transition: transform 0.6s;
            margin: 20px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);
            border-radius: 4px;
            box-sizing: border-box;
            transition: all 0.5s;
            overflow: hidden;
          }

          div.event-element {
            width: 100%;
            height: auto;
            box-sizing: border-box;
          }
          div.img-container {
            width: 200px;
            height: 180px;
            overflow: hidden;
          }
          img {
            width: 100%;
            height: auto;
          }
          p {
            text-align: center;
            font-size: 13px;
            margin: 5px 0px;
          }
          a {
            text-decoration: none;
            color: black;
            cursor: pointer;
          }
          @media (max-width: 700px) {
            div.container {
              width: 100%;
            }
            section {
              background-color: white;
            }
            div.card {
              margin: 10px;
            }
          }
          @media (min-width: 701px) {
            div.card:hover {
              box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
                0 10px 10px rgba(0, 0, 0, 0.22);
            }
          }
        `}</style>
      </div>
    );
  }
}
export default Person;
