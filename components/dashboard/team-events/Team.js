import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TeamTable from "./TeamTable";
import axios from "axios";

const styles = theme => ({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  button: {
    margin: theme.spacing.unit
  }
});

function SimpleCard(props) {
  const { classes, team, acceptButton } = props;
  const bull = <span className={classes.bullet}>•</span>;
  let acceptTeamRequest = id => {
    axios
      .post("/api/accept-request", { teamId: id })
      .then(res => {
        if (res.data.success) {
          alert("success");
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          window.location.replace("/auth");
        }
      });
  };
  let checkAcceptButton = () => {
    if (acceptButton) {
      return (
        <Button
          variant="contained"
          className={classes.button}
          onClick={e => {
            acceptTeamRequest(team._id);
          }}
        >
          Accept
        </Button>
      );
    } else {
      return;
    }
  };
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Event: {team.event}
          </Typography>
          <Typography variant="headline" component="h2">
            Team : {team.name}
          </Typography>
          <TeamTable users={team.users} />
        </CardContent>
        {checkAcceptButton()}
      </Card>
    </div>
  );
}

export default withStyles(styles)(SimpleCard);
