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
        onMouseEnter={this.expandDetails}
        onMouseLeave={this.hideDetails}
      >
        <div className="event-element" style={{ cursor: "pointer" }}>
          <div className="img-container">
            <img src={person.img} />
          </div>
        </div>
        <div
          className={
            this.state.detailsExpanded ? "event-title-animated" : "event-title"
          }
        >
          <p>{person.name}</p>
          <ToggleDisplay show={this.state.detailsExpanded}>
            <p>
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </p>
            <p>
              <a href={`tel:${person.phone}`}>{person.phone}</a>
            </p>
          </ToggleDisplay>
        </div>
        <style jsx>{`
          .event-title {
            position: absolute;
            transform: translateY(-90%);
            text-align: center;
            width: 100%;
            background-color: white;
            padding-top: 10px;
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
            width: 260px;
            position: relative;
            background-color: white;
            z-index: 10;
            transition: transform 0.6s;
            margin: 6px;
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
            padding: 20px;
            box-sizing: border-box;
          }
          div.img-container {
            width: 100%;
            height: auto;
          }
          img {
            width: 100%;
            height: auto;
          }
          p {
            text-align: center;
            margin: 0px 0px 10px 0px;
            font-size: 15px;
          }
          a {
            text-decoration: none;
            color: black;
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
