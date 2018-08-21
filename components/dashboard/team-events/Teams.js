import axios from "../../../axios";
import React, { Component } from "react";
import Team from "./Team";

export default class extends Component {
  state = {
    createdTeams: [
      {
        name: "Wizards",
        users: [
          { name: "sumanth", email: "srksumanth@gmail.com", status: "leader" },
          { name: "monster", email: "monster@gmail.com", status: "member" }
        ],
        event: "webster"
      }
    ]
  };
  componentDidMount() {
    this.props.fetchTeams();
  }
  render() {
    return (
      <div>
        {this.props.createdTeams.map((team, index) => {
          return <Team team={team} acceptButton={this.props.acceptButton} />;
        })}
      </div>
    );
  }
}
