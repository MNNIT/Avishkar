import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import CreateTeam from "./CreateTeam";
import { Component } from "react";
import axios from "../../../axios";
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Info extends Component {
  state = {
    open: false,
    registeredEvents: ["webster"]
  };
  // {registered events} - {created teams}
  fetchRegisteredNoTeamEvents = () => {
    const req1 = axios.get("/api/registered-events");
    const req2 = axios.get("/api/get-all-teams");
    axios.all([req1, req2]).then(
      axios.spread(function(res1, res2) {
        console.log(res1.data, res2.data);
      })
    );
  };
  handleClickOpen = () => {
    this.setState({ open: true });
    this.fetchRegisteredNoTeamEvents();
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { registeredEvents } = this.state;
    if (registeredEvents.length === 0) {
      return <p>You have not registered for any events</p>;
    }
    return (
      <div>
        <p>
          Create team(s) now for{" "}
          {registeredEvents.map(function(event, i) {
            return event;
          })}
        </p>
        <Button variant="outlined" onClick={this.handleClickOpen}>
          CREATE TEAM
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          onClose={this.handleClose}
        >
          <DialogTitle>Create Team</DialogTitle>
          <DialogContent>
            <CreateTeam
              registeredEvents={registeredEvents}
              fetchTeams={this.props.fetchTeams}
              handleDialogClose={this.handleClose.bind(this)}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
export default Info;
