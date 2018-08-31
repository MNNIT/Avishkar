import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import CreateTeam from "./CreateTeam";
import { Component } from "react";
// import axios from "../../../axios";
import axios from "axios";
import baseURL from "../../../config";
import CustomLoader from "../../CustomLoader";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Info extends Component {
  state = {
    open: false,
    registeredEvents: [],
    registeredEventsName: [],
    teamSize: [],
    loading: true
  };
  // {registered events} - {created teams}
  componentDidMount() {
    this.fetchRegisteredNoTeamEvents();
  }
  fetchRegisteredNoTeamEvents = () => {
    const req1 = axios.get("/api/registered-events");
    const req2 = axios.get("/api/get-all-teams");
    axios.all([req1, req2]).then(
      axios.spread((res1, res2) => {
        if (
          res1.data.success &&
          res2.data.success
        ) {
          const { registeredEvents } = res1.data;
          const { teams } = res2.data;
          let registeredEventsDisplayName = [],
            registeredEventsName = [],
            teamEvents = [],
            teamSize = [];
          registeredEvents.forEach(element => {
            if (element.size > 1) {
              registeredEventsDisplayName.push(element.displayName);
              registeredEventsName.push(element.name);
              teamSize.push(element.size);
            }
          });
          if (teams.length > 0) {
            teams.forEach(e => {
              if (e.status !== "rejected") teamEvents.push(e.event);
            });
            teamEvents.forEach(e => {
              let i = registeredEventsName.findIndex(event => {
                return event === e;
              });
              if (i > -1) {
                registeredEventsName.splice(i, 1);
                registeredEventsDisplayName.splice(i, 1);
                teamSize.splice(i, 1);
              }
            });
            this.setState({
              registeredEvents: registeredEventsDisplayName,
              registeredEventsName,
              teamSize,
              loading: false
            });
          } else {
            this.setState({
              registeredEvents: registeredEventsDisplayName,
              registeredEventsName,
              teamSize,
              loading: false
            });
          }
        }
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
    const {
      registeredEvents,
      registeredEventsName,
      teamSize,
      loading
    } = this.state;
    const EventsLength = registeredEvents.length;
    if (loading) {
      return <CustomLoader />;
    } else if (registeredEvents.length === 0) {
      return <p>You have not registered for any (new) events</p>;
    }
    return (
      <div>
        <p>
          Create team(s) now for{" "}
          <b>
            {registeredEvents.map(function(event, i) {
              return event + (EventsLength - 1 === i ? "." : " , ");
            })}
          </b>
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
              registeredEventsName={registeredEventsName}
              teamSize={teamSize}
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
