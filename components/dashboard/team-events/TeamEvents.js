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
    email: "",
    teams: {},
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
    axios
      .get("/api/all-user-teams")
      .then(res => {
        const { data } = res;
        if (data.success) {
          const teamCategories = data.teams;
          let teams = {};
          teamCategories.forEach(category => {
            teams[category._id] = category.teams;
          });
          this.setState({ teams, loading: false, email: data.requestBy });
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
    const { teams, loading, snackBar, email } = this.state;
    if (loading) {
      return <CustomLoader />;
    } else {
      return (
        <div>
          <Info fetchTeams={this.fetchTeamsData.bind(this)} />
          {(() => {
            if (teams.pending) {
              if (teams.pending.length > 0) {
                let pendingteams = teams.pending.filter(team => {
                  let condition = false;
                  team.users.forEach(user => {
                    if (user.email === email && user.status !== "pending") {
                      condition = true;
                    }
                  });
                  return condition;
                });
                if (pendingteams.length > 0) {
                  return (
                    <>
                      <h1>Pending Teams</h1>
                      <Teams
                        fetchTeamsData={this.fetchTeamsData.bind(this)}
                        createdTeams={pendingteams}
                        acceptButton={false}
                        showSnackBar={this.showSnackBar}
                      />
                    </>
                  );
                } else {
                  return <div />;
                }
              }
            } else {
              return <div />;
            }
          })()}
          {(() => {
            if (teams.pending) {
              if (teams.pending.length > 0) {
                let teamRequests = teams.pending.filter(team => {
                  let condition = false;
                  team.users.forEach(user => {
                    if (user.email === email && user.status === "pending") {
                      condition = true;
                    }
                  });
                  return condition;
                });
                if (teamRequests.length > 0) {
                  return (
                    <>
                      <h1>Team Requests</h1>
                      <Teams
                        fetchTeamsData={this.fetchTeamsData.bind(this)}
                        createdTeams={teamRequests}
                        acceptButton={true}
                        showSnackBar={this.showSnackBar}
                      />
                    </>
                  );
                } else {
                  return <div />;
                }
              }
            } else {
              return <div />;
            }
          })()}
          {(() => {
            if (teams.created) {
              if (teams.created.length > 0) {
                return (
                  <>
                    <h1>Created Teams</h1>
                    <Teams
                      fetchTeamsData={this.fetchTeamsData.bind(this)}
                      createdTeams={teams.created}
                      acceptButton={false}
                      showSnackBar={this.showSnackBar}
                    />
                  </>
                );
              }
            } else {
              return <div />;
            }
          })()}
          {(() => {
            if (teams.rejected) {
              if (teams.rejected.length > 0) {
                return (
                  <>
                    <h1>Rejected Teams</h1>
                    <Teams
                      fetchTeamsData={this.fetchTeamsData.bind(this)}
                      createdTeams={teams.rejected}
                      acceptButton={false}
                      showSnackBar={this.showSnackBar}
                    />
                  </>
                );
              }
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
