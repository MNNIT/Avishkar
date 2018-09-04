import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              How to Register for an Event?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Go to Register tab and select an Event from the dropdown as you
              type the Even name. Once Registered, you can not unregister or
              re-register for an event.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              How to Create a team?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <ul>
                <li>
                  To create a team, one should register for an event first.
                </li>
                <li>
                  After registering, Go to Team Events tab and click Create
                  Team.
                </li>
                <li>
                  Only ONE MEMBER of a team should create-team and other members
                  of the team need to respond to the request(either ACCEPT or
                  REJECT).
                </li>
                <li>
                  If atleast one member of a team has a pending request, the
                  team is in PENDING state
                </li>
                <li>
                  If all the members of a team accepts the request, the team is
                  in CREATED state
                </li>
                <li>
                  If atleast one member of a team rejects the request, team is
                  in REJECTED state.
                </li>
                <li>
                  All teams you create are final and can not be deleted or
                  edited further.
                </li>
              </ul>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={this.handleChange("panel3")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              What is a Solo Event?
            </Typography>
            {/* <Typography className={classes.secondaryHeading}>
              Filtering has been entirely disabled for whole web server
            </Typography> */}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Any Event with Team Size One is a Solo Event.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel4"}
          onChange={this.handleChange("panel4")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              How many Events can I register for?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>Atmost you can Register for 15 events.</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlledExpansionPanels);
