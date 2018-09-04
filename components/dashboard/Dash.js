import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import RegisteredEvents from "./RegisteredEvents";
// import axios from "../../axios";
import axios from "axios";
import baseURL from "../../config";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

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
    const { events, loading } = this.state;
    return (
      <div>
        <Card>
          <CardContent>
            Get your Ticket Now : &nbsp;
            <a
              href="https://www.thecollegefever.com/events/avishkar-2k18"
              style={{ textDecoration: "none" }}
              target="_blank"
              className="ticket-btn"
            >
              Link
            </a>
          </CardContent>
        </Card>
        <br />
        <Card>
          <CardContent>
            Number of Events Registered : &nbsp;
            {events.registeredEvents.length}
          </CardContent>
        </Card>
        <h1>Registered Events</h1>
        <RegisteredEvents
          registeredEvents={events.registeredEvents}
          loading={events.loading}
        />
        <style jsx>
          {`
            .ticket-btn {
              color: whitesmoke;
              text-align: center;
              margin: 0px;
              font-weight: 400;
              cursor: pointer;
              background: linear-gradient(
                45deg,
                rgb(108, 174, 221),
                rgb(57, 145, 208)
              );
              border-radius: 4px;
              text-decoration: none;
              padding: 0.25em 1em;
              border-style: none;
              font-size: 1.175rem;
              font-family: Source Sans Pro, Open Sans, Segoe UI, sans-serif;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Dash;
