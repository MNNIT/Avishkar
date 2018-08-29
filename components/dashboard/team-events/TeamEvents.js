import React, { Component } from "react";
import Info from "./Info";
import Teams from "./Teams";
import SnackBar from "../../SnackBar";
// import axios from "../../../axios";
import axios from "axios";
import baseURL from "../../../config";
import CustomLoader from "../../CustomLoader";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default class extends Component {
  state = {
    // ##TODO## fetch registered Team-Events
    createdTeams: [],
    pendingTeams: [],
    teamRequests: [],
    loading: true,
    snackBar: {
      open: false,
      variant: "",
      message: ""
    }
  };
  handleSnackBarClose = () => {
    const { snackBar } = this.state;
    snackBar.open = false;
    this.setState({ snackBar });
  };
  showSnackBar = (message, variant) => {
    const { snackBar } = this.state;
    snackBar.open = true;
    snackBar.message = message;
    snackBar.variant = variant;
    this.setState({ snackBar });
  };
  fetchTeamsData = () => {
    this.fetchPendingTeams();
    this.fetchTeamRequests();
    this.fetchTeams();
  };
  fetchTeamRequests = () => {
    axios
      .get("/api/team-requests")
      .then(res => {
        const { data } = res;
        if (data.success) {
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
  fetchPendingTeams = () => {
    axios
      .get("/api/pending-request")
      .then(res => {
        const { data } = res;
        if (data.success) {
          this.setState({ pendingTeams: data.pendingTeams });
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          window.location.replace("/auth");
        }
      });
  };
  fetchTeams = () => {
    axios
      .get("/api/teams")
      .then(res => {
        const { data } = res;
        if (data.success) {
          this.setState({
            createdTeams: data.teams,
            loading: false
          });
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          window.location.replace("/auth");
        }
      });
  };
  componentDidMount() {
    this.fetchTeamsData();
  }

  render() {
    const {
      createdTeams,
      pendingTeams,
      teamRequests,
      loading,
      snackBar
    } = this.state;
    if (loading) {
      return <CustomLoader />;
    } else {
      return (
        <div>
          <Info fetchTeams={this.fetchTeamsData.bind(this)} />
          {(() => {
            if (pendingTeams.length > 0) {
              return (
                <>
                  <h1>Pending Teams</h1>
                  <Teams
                    fetchTeams={this.fetchPendingTeams.bind(this)}
                    fetchTeamsData={this.fetchTeamsData.bind(this)}
                    createdTeams={pendingTeams}
                    acceptButton={false}
                    showSnackBar={this.showSnackBar}
                  />
                </>
              );
            } else {
              return <div />;
            }
          })()}
          {(() => {
            if (teamRequests.length > 0) {
              return (
                <>
                  <h1>Team Requests</h1>
                  <Teams
                    fetchTeams={this.fetchTeamRequests.bind(this)}
                    fetchTeamsData={this.fetchTeamsData.bind(this)}
                    createdTeams={teamRequests}
                    acceptButton={true}
                    showSnackBar={this.showSnackBar}
                    //handleSnackBarClose = {this.handleSnackBarClose}
                  />
                </>
              );
            } else {
              return <div />;
            }
          })()}
          {(() => {
            if (createdTeams.length > 0) {
              return (
                <>
                  <h1>Created Teams</h1>
                  <Teams
                    fetchTeams={this.fetchTeams.bind(this)}
                    fetchTeamsData={this.fetchTeamsData.bind(this)}
                    createdTeams={createdTeams}
                    acceptButton={false}
                    showSnackBar={this.showSnackBar}
                  />
                </>
              );
            } else {
              return <div />;
            }
          })()}
          <SnackBar
            showSnackBar={snackBar.open}
            handleClose={this.handleSnackBarClose}
            variant={snackBar.variant}
            message={snackBar.message}
          />
        </div>
      );
    }
  }
}
