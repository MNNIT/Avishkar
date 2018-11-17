import React, { Component } from "react";
import axios from "axios";
import SubEvent from "./SubEvent";
import Mask from "../../components/Mask";
const colors = ["#E91E63", "#673ab7", "#2196F3", "#ff5722", "#009688"];

export default class extends Component {
  state = {
    showModal: false,
    subEvents: [],
    subEventData: [],
    color: "black"
  };
  componentDidMount() {
    this.fetchSubEvents();
  }
  showEventModal = (event, color) => {
    const subEventData = this.state.subEvents.find(function(element) {
      return element.name == event;
    });
    this.setState({
      color,
      showModal: true,
      subEventData: [subEventData]
    });
  };
  hideModal = () => {
    this.setState({
      showModal: false
    });
  };
  fetchSubEvents = () => {
    const { router } = this.props;
    const eventName = router.query.name;
    if (eventName !== "aerodynamix") {
      axios
        .get(`/static/data/${eventName}.json`)
        .then(res => {
          if (res.data.success) {
            const subEvents = res.data.subEvents;
            this.setState({ subEvents });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  };

  render() {
    const { subEvents } = this.state;
    return (
      <section>
        <div className="container">
          {subEvents.map((event, i) => {
            const color = colors[i % colors.length];
            if (event.image) {
              return (
                <div
                  style={{
                    backgroundImage: `url(/static/img/resizeEvents/${
                      event.image
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "whitesmoke",
                    fontWeight: 500,
                    textShadow: "1px 1px 2px rgba(150, 150, 150, 1)"
                  }}
                  key={i}
                  onClick={() => {
                    this.showEventModal(event.name, color);
                  }}
                >
                  {event.displayName}
                </div>
              );
            } else {
              return (
                <div
                  style={{ backgroundColor: color }}
                  key={i}
                  onClick={() => {
                    this.showEventModal(event.name, color);
                  }}
                >
                  {event.displayName}
                </div>
              );
            }
          })}
        </div>
        <SubEvent
          subEventData={this.state.subEventData}
          show={this.state.showModal}
          color={this.state.color}
          hideModal={this.hideModal}
        />
        <Mask show={this.state.showModal} hideModal={this.hideModal} />
        <style jsx>
          {`
            section {
              padding: 20px;
              box-sizing: border-box;
              background-color: #fafafa;
              background-image: url("https://www.transparenttextures.com/patterns/arches.png");
            }
            .container {
              display: flex;
              flex-wrap: wrap;
              padding: 20px;
              width: 80%;
              height: auto;
              margin: 0 auto;
              justify-content: center;
              box-sizing: border-box;
            }
            .container div {
              padding: 20px;
              width: 160px;
              height: 160px;
              margin: 20px;
              display: flex;
              text-align: center;
              align-items: center;
              justify-content: center;
              border-radius: 6px;
              color: white;
              background: teal;
              font-size: 1.2rem;
              cursor: pointer;
              transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
                0 1px 2px rgba(0, 0, 0, 0.24);
            }
            .container div:hover {
              box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
                0 10px 10px rgba(0, 0, 0, 0.22);
            }
            @media (max-width: 700px) {
              .container {
                width: 100%;
              }
              .container div {
                width: 100px;
                height: 100px;
                margin: 8px;
                font-size: 1rem;
                cursor: initial;
              }
              section {
                padding: 0px;
              }
            }
          `}
        </style>
      </section>
    );
  }
}
