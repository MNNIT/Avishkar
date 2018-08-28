import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import baseURL from "../../config";
import CustomLoader from "../CustomLoader";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

class SoloEvents extends Component {
  state = {
    soloEvents: [],
    loading: true
  };
  componentDidMount() {
    axios
      .get("/api/registered-events")
      .then(res => {
        if (res.data.success) {
          const { registeredEvents } = res.data;
          const soloEvents = registeredEvents.filter(event => event.size === 1);
          console.log(soloEvents);
          this.setState({
            soloEvents,
            loading: false
          });
        }
      })
      .catch(function(err) {
        if (err.response.status == 401) {
          Router.push("/auth");
        }
      });
  }
  render() {
    const { loading, soloEvents } = this.state;
    if (loading) {
      return <CustomLoader />;
    } else if (soloEvents.length > 0) {
      return (
        <>
          <h1>Registered Solo Events</h1>
          {soloEvents.map(event => {
            return (
              <List>
                <ListItem>
                  <ListItemText primary={event.displayName} />
                </ListItem>
                <Divider />
              </List>
            );
          })}
        </>
      );
    } else {
      return <div>You haven't registered for any Solo Events</div>;
    }
  }
}

export default SoloEvents;
