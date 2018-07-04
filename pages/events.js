import Meta from "../components/Meta";
import EventBanner from "../components/events/EventBanner";
import SubEvents from "../components/events/SubEvents";
import { withRouter } from "next/router";
import eventsData from "../data/global";
import React, { Component } from "react";
import SubEvent from "../components/events/SubEvent";
import ToggleDisplay from "react-toggle-display";
import Mask from "../components/Mask";
import axios from "axios";
class Page extends Component {
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
    if (!eventName || !eventsData[eventName]) {
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
      return <h1>Invalid query params</h1>;
    }
    const subEvents = eventsData[eventName]; //array of subevents

    return (
      <div>
        <Meta />
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
