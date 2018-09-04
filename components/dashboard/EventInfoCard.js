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
    fontSize: 17
  },
  content: {
    fontSize: 16
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
                  Event Name : {data.displayName}
                </Typography>
                <Typography className={classes.title}>
                  <b style={{ color: "tomato" }}>
                    Category :{" "}
                    {data.category.charAt(0).toUpperCase() +
                      data.category.substr(1)}
                  </b>
                  &nbsp;&nbsp;&nbsp;
                  <b style={{ color: "green" }}>Team Size: {data.size}</b>
                </Typography>
                <Typography className={classes.content}>{data.info}</Typography>
              </CardContent>
            </Card>
            <br />
          </div>
        );
      }
    }
  }
);
