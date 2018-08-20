import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import RegisteredEvents from "./RegisteredEvents";
import axios from "axios";

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: {
        registeredEvents: [],
        loading: true
      }
    };
  }
  componentDidMount() {
    this.fetchRegisteredEvents();
  }
  fetchRegisteredEvents = () => {
    axios
      .get("/api/registered-events")
      .then(res => {
        if (res.data.success) {
          const { registeredEvents } = res.data;
          console.log(registeredEvents);
          this.setState({
            events: {
              registeredEvents,
              loading: false
            }
          });
        }
      })
      .catch(function(err) {
        if (err.response.status == 401) {
          Router.push("/auth");
        }
      });
  };
  //   registeredEvents = ["oligopoly", "cyberquest"];
  render() {
    return (
      <div>
        <Card>
          <CardContent>Payment Status :</CardContent>
        </Card>
        <br />
        <Card>
          <CardContent>Number of Events Registered :</CardContent>
        </Card>
        <h1>Registered Events</h1>
        <RegisteredEvents
          registeredEvents={this.state.events.registeredEvents}
          loading={this.state.events.loading}
        />
      </div>
    );
  }
}

export default Dash;
