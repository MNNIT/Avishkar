import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

function SimpleTable({ classes, users }) {
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Email</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map(user => {
          return (
            <TableRow key={user.email}>
              <TableCell component="th" scope="row">
                {user.email}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.status}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default withStyles(styles)(SimpleTable);
