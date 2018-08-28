// import axios from "../../../axios";
import React, { Component } from "react";
import Team from "./Team";
import axios from "axios";
import baseURL from "../../../config";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default class extends Component {
  render() {
    return (
      <div>
        {this.props.createdTeams.map((team, index) => {
          return (
            <>
              <Team
                key={team.name}
                team={team}
                acceptButton={this.props.acceptButton}
                fetchTeamsData={this.props.fetchTeamsData}
              />
              <br />
            </>
          );
        })}
      </div>
    );
  }
}
