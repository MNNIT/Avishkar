import React, { Component } from "react";
import Info from "./Info";
import Teams from "./Teams";
import axios from "axios";

export default class extends Component {
  state = {
    // ##TODO## fetch registered Team-Events
    registeredEvents: ["webster", "droidrush"],
    createdTeams: [],
    pendingTeams: [],
    teamRequests: []
  };
  fetchTeamRequests = () => {
    axios
      .get("/api/team-requests")
      .then(res => {
        const { data } = res;
        if (data.success) {
          console.log(data.teams);
          this.setState({
            teamRequests: data.teams
          });
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          window.location.replace("/auth");
        }
      });
  };
  fetchPendingTeams = () => {};
  fetchTeams = () => {
    axios
      .get("/api/teams")
      .then(res => {
        const { data } = res;
        if (data.success) {
          this.setState({
            createdTeams: data.teams
          });
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          window.location.replace("/auth");
        }
      });
  };
  render() {
    return (
      <div>
        <h1>Pending Teams</h1>
        {/* pending teams */}
        <h1>Team Requests</h1>
        <Teams
          fetchTeams={this.fetchTeamRequests.bind(this)}
          createdTeams={this.state.teamRequests}
          acceptButton={true}
        />
        <h1>Created Teams</h1>
        <Teams
          fetchTeams={this.fetchTeams.bind(this)}
          createdTeams={this.state.createdTeams}
          acceptButton={false}
        />
        <Info
          registeredEvents={this.state.registeredEvents}
          fetchTeams={this.fetchTeams.bind(this)}
        />
      </div>
    );
  }
}
