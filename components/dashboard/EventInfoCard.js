import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    minWidth: 275
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  }
});
export default withStyles(styles)(
  class EventInfoCard extends Component {
    render() {
      const { classes } = this.props;
      const data = this.props.event;
      if (data.displayName === "") {
        return <div />;
      } else {
        return (
          <div>
            <br />
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="headline" component="h2">
                  Event Name: {data.displayName}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Category : {data.category} Team Size: {data.size}
                </Typography>
                <Typography>{data.info}</Typography>
              </CardContent>
            </Card>
            <br />
          </div>
        );
      }
    }
  }
);
