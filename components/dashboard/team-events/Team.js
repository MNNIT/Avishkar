import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import AlertDialog from "../../AlertDialog";
import Button from "@material-ui/core/Button";
import TeamTable from "./TeamTable";
// import axios from "../../../axios";
import axios from "axios";
import baseURL from "../../../config";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class SimpleCard extends React.Component {
  state = {
    dialog: {
      open: false,
      title: "",
      content: "",
      teamId: "",
      action: ""
    }
  };
  handleAlertOpen = (title, content, id, action) => {
    const dialog = this.state.dialog;
    dialog.open = true;
    dialog.title = title;
    dialog.content = content;
    dialog.teamId = id;
    dialog.action = action;
    this.setState({ dialog });
  };
  handleAlertClose = () => {
    const dialog = this.state.dialog;
    dialog.open = false;
    this.setState({ dialog });
  };
  respondToTeamRequest = (id, action) => {
    axios
      .post("/api/respond-to-request", { teamId: id, action })
      .then(res => {
        if (res.data.success) {
          const { dialog } = this.state;
          //fetch teams
          this.props.fetchTeamsData();
          //close dialog
          dialog.open = false;
          //snackBar response
          this.props.showSnackBar("Response Successfully recorded", "info");
          this.setState({ dialog });
        } else {
          this.props.showSnackBar("Response failed, try again!", "error");
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          window.location.replace("/auth");
        }
      });
  };
  checkAcceptButton = (acceptButton, classes, team) => {
    if (acceptButton) {
      return (
        <div>
          <Button
            variant="contained"
            className={classes.button}
            onClick={e => {
              this.handleAlertOpen(
                `Do you want to be in the team "${team.name}" ?`,
                "Once you accept, changes are permanent.",
                team._id,
                "accept"
              );
            }}
          >
            Accept
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={e => {
              this.handleAlertOpen(
                `Do you want to reject "${team.name}" ?`,
                "Once you reject, changes are permanent.",
                team._id,
                "reject"
              );
            }}
          >
            Decline
          </Button>
        </div>
      );
    } else {
      return;
    }
  };
  render() {
    const { classes, team, acceptButton } = this.props;
    const { title, open, content, teamId, action } = this.state.dialog;
    return (
      <div>
        <TeamTable team={team} />
        {this.checkAcceptButton(acceptButton, classes, team)}
        <AlertDialog
          title={title}
          content={content}
          handleClose={() => {
            this.handleAlertClose();
          }}
          handleAgree={() => {
            this.respondToTeamRequest(teamId, action);
          }}
          open={open}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SimpleCard);
