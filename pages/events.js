import Meta from "../components/events/Meta";
import EventBanner from "../components/events/EventBanner";
import SubEvents from "../components/events/SubEvents";
import { withRouter } from "next/router";
import eventsData from "../data/global";
import React, { Component } from "react";
import SubEvent from "../components/events/SubEvent";
import ToggleDisplay from "react-toggle-display";
import Mask from "../components/Mask";
import axios from "axios";
import AerodynamixContent from "../components/events/AerodynamixContent";
import NavBar from "../components/Navbar";
import IconEvents from "../components/IconEvents";
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
  showEventModal = (event, color) => {
    const subEventData = this.state.subEvents.find(function(element) {
      return element.name == event;
    });
    console.log(subEventData);
    if (this.state.subEvents.length == 0) {
      this.fetchEventData(function() {
        this.setState({
          color,
          showModal: true,
          subEventData: [subEventData]
        });
      });
    } else {
      this.setState({
        color,
        showModal: true,
        subEventData: [subEventData]
      });
    }
  };
  hideModal = () => {
    this.setState({
      showModal: false
    });
  };
  fetchEventData = (eventName, cb) => {
    axios.get(`/static/data/${eventName}.json`).then(res => {
      const eventData = res.data;
      console.log(eventData.events);
      this.setState({ subEvents: eventData.events }, cb);
    });
  };
  componentWillMount() {
    const { router } = this.props;
    const eventName = router.query.name;
    if (!eventName || !eventsData[eventName] || eventName === "aerodynamix") {
      return;
    }
    this.fetchEventData(eventName, function() {});

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
          <Meta color="black" />
          <NavBar path={router.pathname} />
          <IconEvents />
        </>
      );
    }
    const subEvents = eventsData[eventName]; //array of subevents

    if (eventName === "aerodynamix") {
      return (
        <div>
          <Meta color={this.color[eventName]} />
          <NavBar path={router.pathname} />
          <EventBanner eventName={eventName} />
          <AerodynamixContent />
        </div>
      );
    }
    return (
      <div>
        <Meta color={this.color[eventName]} />
        <NavBar path={router.pathname} />
        <EventBanner eventName={eventName} />
        <SubEvents showEventModal={this.showEventModal} subEvents={subEvents} />
        {/* <ToggleDisplay show={this.state.showModal}> */}
        <SubEvent
          subEventData={this.state.subEventData}
          show={this.state.showModal}
          color={this.state.color}
          hideModal={this.hideModal}
        />
        {/* </ToggleDisplay> */}
        <Mask show={this.state.showModal} hideModal={this.hideModal} />
      </div>
    );
  }
}
export default withRouter(Page);
