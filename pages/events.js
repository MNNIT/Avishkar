import Meta from "../components/events/Meta";
import EventBanner from "../components/events/EventBanner";
import SubEvents from "../components/events/SubEvents";
import { withRouter } from "next/router";
import eventsData from "../data/global";
import React, { Component } from "react";
import SubEvent from "../components/events/SubEvent";
import Mask from "../components/Mask";
import AerodynamixContent from "../components/events/AerodynamixContent";
import NavBar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import IconEvents from "../components/IconEvents";
import fetch from "isomorphic-unfetch";

class Page extends Component {
  color = {
    cyberquest: "#1F3C68",
    electromania: "#D8B689",
    aerodynamix: "#D17F4D",
    genesis: "#3696BC",
    mechrocosm: "#212121",
    nirmaan: "#212121",
    powersurge: "#D89C78",
    robomania: "#CD751B",
    oligopoly: "#795548",
    rasayans: "#212121",
    monopoly: "#212121"
  };
  state = {
    showModal: false,
    subEvents: [],
    subEventData: [],
    color: "black"
  };
  static async getInitialProps(context) {
    let eventName = context.query.name;
    if (eventsData[eventName] && eventName !== "aerodynamix") {
      const res = await fetch(
        `http://localhost:3000/static/data/${eventName}.json`
      );
      const data = await res.json();
      return { data };
    }
    return { data: null };
  }
  showEventModal = (event, color) => {
    const subEventData = this.props.data.events.find(function(element) {
      return element.name == event;
    });
    console.log(subEventData);
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

  componentWillMount() {
    const { router } = this.props;
    const eventName = router.query.name;
    if (!eventName || !eventsData[eventName] || eventName === "aerodynamix") {
      return;
    }

    // import("../data/nirmaan.js").then(data => {
    //   this.setState({ subEvents: data.default.nirmaan.events });
    // });
  }
  render() {
    const { router } = this.props;
    const eventName = router.query.name;
    if (!eventName || !eventsData[eventName]) {
      return (
        <>
          <Meta color="#212121" />
          <NavBar path={router.pathname} color={"#212121"} />
          <MobileNav path={router.pathname} color={"#212121"} />
          <IconEvents />
        </>
      );
    }
    const subEvents = eventsData[eventName]; //array of subevents

    if (eventName === "aerodynamix") {
      return (
        <div>
          <Meta color={"#212121"} />
          <NavBar path={router.pathname} color={"#212121"} />
          <MobileNav path={router.pathname} color={"#212121"} />
          <EventBanner eventName={eventName} />
          <AerodynamixContent />
        </div>
      );
    }
    return (
      <div>
        <Meta color={"#212121"} />
        <NavBar path={router.pathname} color={"#212121"} />
        <MobileNav path={router.pathname} color={"#212121"} />
        <EventBanner eventName={eventName} />
        <SubEvents
          showEventModal={this.showEventModal}
          subEvents={this.props.data.events}
        />
        {/* <ToggleDisplay show={this.state.showModal}> */}
        <SubEvent
          subEventData={this.state.subEventData}
          show={this.state.showModal}
          color={this.state.color}
          hideModal={this.hideModal}
        />
        <Mask show={this.state.showModal} hideModal={this.hideModal} />
      </div>
    );
  }
}
export default withRouter(Page);
