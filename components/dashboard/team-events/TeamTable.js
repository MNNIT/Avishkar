import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const CustomTableCell = withStyles(theme => ({
  // head: {
  //   backgroundColor: "#616161",
  //   color: theme.palette.common.white
  // },
  body: {
    fontSize: 20
  }
}))(TableCell);
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  title: {
    margin: 16,
    fontSize: 16
  },
  teamName: {
    marginTop: 16,
    marginLeft: 16
  }
});

function SimpleTable({ classes, team }) {
  return (
    <Paper className={classes.root}>
      <Typography className={classes.title} color="textSecondary">
        Event : {team.event}
      </Typography>
      <Typography
        variant="headline"
        component="h2"
        className={classes.teamName}
      >
        Team Name : {team.name}
      </Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Email</CustomTableCell>
            <CustomTableCell>Status</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {team.users.map(user => {
            return (
              <TableRow key={user.email}>
                <TableCell component="th" scope="row">
                  {user.email}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.status.charAt(0).toUpperCase() + user.status.substr(1)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(SimpleTable);
