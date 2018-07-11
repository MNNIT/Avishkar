import React, { Component } from "react";
import Team from "../components/team/Team";
import Meta from "../components/events/Meta";
import teamData from "../data/team";
import Navbar from "../components/Navbar";
import { withRouter } from "next/router";
class TeamPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <Meta />
        <Navbar path={this.props.router.pathname} />
        <h1>Meet the Avishkar's Team</h1>
        <Team people={teamData.faculty} heading="Faculty" />
        <Team people={teamData.studentcoreteam} heading="Student Core Team" />
        <Team people={teamData.workshopslead} heading="Workshops Lead" />
        <style jsx>
          {`
            h1 {
              text-align: center;
              color: #00bcd4;
              background-color: #f5f5f5;
              box-sizing: border-box;
              padding-top: 40px;
              margin: 0px;
            }
          `}
        </style>
      </section>
    );
  }
}
export default withRouter(TeamPage);
