import React, { Component } from "react";
import EventCard from "./EventCard";
import Mask from "./Mask";
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEnabled: false,
      display: [true, true, true, true, true, true, true, true, true],
      images: [
        "/static/img/cyberquest.jpg",
        "/static/img/aerodynamix.jpg",
        "/static/img/electromania.jpg",
        "/static/img/genesis.jpg",
        "/static/img/mechrocosm.jpg",
        "/static/img/nirmaan.jpg",
        "/static/img/cyberquest.jpg",
        "/static/img/aerodynamix.jpg",
        "/static/img/electromania.jpg"
      ],
      titles: [
        "cyberquest",
        "aerodynamix",
        "electromania",
        "genesis",
        "mechrocosm",
        "nirmaan",
        "cyberquest",
        "aerodynamix",
        "electromania"
      ]
    };
  }
  hideOtherElements = index => {
    const newState = this.state.display.map(function(val, i) {
      return index === i;
    });
    this.setState({ display: newState });
  };
  getAnimationValues = elemWidth => {
    const windowWidth = window.innerWidth;
    let scaleFactor, finalLeft, finalTop;
    if (windowWidth > 1000) {
      const modalWidthPercent = 60;
      finalLeft = ((windowWidth / 100) * (100 - modalWidthPercent)) / 2;
      finalTop = 0;
      const modalWidth = (windowWidth * modalWidthPercent) / 100;
      scaleFactor = modalWidth / elemWidth;
    } else {
      finalLeft = 0;
      finalTop = 0;
      scaleFactor = windowWidth / elemWidth;
    }

    return { finalLeft, finalTop, scaleFactor };
  };
  handleClick = (index, $elem) => {
    if (this.state.modalEnabled) {
      return;
    }
    this.setState({
      modalEnabled: true
    });
    this.activeElement = $elem;
    const rect = $elem.getBoundingClientRect();
    const initialLeft = rect.left;
    const initialTop = rect.top;
    const { finalLeft, finalTop, scaleFactor } = this.getAnimationValues(
      $elem.offsetWidth
    );
    let topDiff = finalTop - initialTop;
    let leftDiff = finalLeft - initialLeft;
    topDiff += (rect.height * (scaleFactor - 1)) / 2; //The centre of element is fixed while scaling
    leftDiff += (rect.width * (scaleFactor - 1)) / 2;
    $elem.style.zIndex = 1000;
    $elem.style.transform = `translate(${leftDiff}px,${topDiff}px) scale(${scaleFactor})`;
    //this.hideOtherElements(index);
    const $imgContainer = $elem.children[0];
    // const iw = $imgContainer.offsetWidth;
    // const ih = $imgContainer.offsetHeight;
    $imgContainer.style.transform = `translate(0%,-25%)  scale(${1 /
      scaleFactor})`;

    // const $textContainer = $elem.querySelector("div.text-container");
    // $textContainer.style.transform = "scale(0.8)";
    // const $info = $elem.querySelector(".event-info");
    // $info.style.display = "inline";

    // console.log($elem);
    // alert(`${index} is clicked`);
  };
  hideModal = () => {
    this.setState({
      modalEnabled: false,
      display: [true, true, true, true, true, true, true, true, true]
    });

    const $elem = this.activeElement;
    $elem.style.zIndex = 10;
    $elem.style.transform = "none";

    const $imgContainer = $elem.children[0];
    $imgContainer.style.transform = "none";
    // const $textContainer = $elem.querySelector("div.text-container");
    // $textContainer.style.transform = "none";
    // const $info = $elem.querySelector(".event-info");
    // $info.style.display = "none";

    console.log($elem);
  };
  render() {
    return (
      <section>
        <Mask show={this.state.modalEnabled} hideModal={this.hideModal} />
        <div className="events">
          <h2>Events at Avishkar</h2>
          <div className="container">
            {this.state.display.map(function(val, i) {
              return (
                <EventCard
                  key={i}
                  show={val}
                  index={i}
                  src={this.state.images[i]}
                  handleClick={this.handleClick}
                  title={this.state.titles[i]}
                />
              );
            }, this)}
          </div>
        </div>
        <style jsx>
          {`
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
            .element {
              width: 30%;
              height: auto;
              margin: 10px;
              border-radius: 50%;
            }
            img {
              width: 100%;
              height: auto;
            }
          `}
        </style>
      </section>
    );
  }
}
export default Events;
