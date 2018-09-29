import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import baseURL from "../../config";
import AlertDialog from "../AlertDialog";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  menu: {
    width: 200
  },
  alertDialog: {
    open: false,
    title: "",
    content: ""
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});
class UpdateProfile extends Component {
  state = {
    account: "",
    bank: "",
    ifsc: "",
    branchCode: "",
    alertDialog: {
      open: false,
      title: "",
      content: ""
    }
  };
  componentDidMount() {
    axios
      .get("/api/bank-details")
      .then(res => {
        const { user } = res.data;
        if (user.bankDetails) {
          this.setState(user.bankDetails);
        }
      })
      .catch(err => {});
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleSaveClick = () => {};
  saveAccountDetails = () => {
    //TODO validate formdata
    const { account, ifsc, bank, branch } = this.state;
    const formData = { account, ifsc, bank, branch };
    axios
      .post("/api/bank-details", formData)
      .then(res => {
        if (res.data.success) {
          alert("Account details saved");
        }
      })
      .catch(err => {
        alert("something went wrong");
      });
  };
  handleAlertOpen = () => {
    const { alertDialog } = this.state;
    alertDialog.open = true;
    alertDialog.title = `Are you sure that this information is correct?`;
    alertDialog.content = (
      <div>
        <p>
          <b>Account number</b>: {this.state.account}
        </p>
        <p>
          <b>Bank's name</b>: {this.state.bank}
        </p>
        <p>
          <b>IFSC</b>: {this.state.ifsc}
        </p>
        <p>
          <b>Branch</b>: {this.state.branch}
        </p>
      </div>
    );
    this.setState({ alertDialog });
  };
  handleAlertClose = () => {
    const { alertDialog } = this.state;
    alertDialog.open = false;
    this.setState({ alertDialog });
  };
  handleAlertAgree = () => {
    ///save data here!!
    this.saveAccountDetails();
    const { alertDialog } = this.state;
    alertDialog.open = false;
    this.setState({ alertDialog });
  };
  render() {
    const { alertDialog } = this.state;
    const { classes } = this.props;
    return (
      <div className="row center-md center-xs center-lg">
        <div className="col-md-6">
          <Paper className={classes.root} elevation={1}>
            <p style={{ color: "#4caf50" }}>
              We use this information to transfer prize money to your account
            </p>
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="name"
                label="Bank Account Number"
                className={classes.textField}
                value={this.state.account}
                onChange={this.handleChange("account")}
                margin="normal"
                fullWidth
                required
              />
              <TextField
                id="name"
                label="Bank's Name"
                className={classes.textField}
                value={this.state.bank}
                onChange={this.handleChange("bank")}
                margin="normal"
                fullWidth
                required
              />
              <TextField
                id="name"
                label="IFSC"
                className={classes.textField}
                value={this.state.ifsc}
                onChange={this.handleChange("ifsc")}
                margin="normal"
                fullWidth
                required
              />
              <TextField
                id="name"
                label="Branch Code"
                className={classes.textField}
                value={this.state.branchCode}
                onChange={this.handleChange("branchCode")}
                margin="normal"
                fullWidth
                required
              />
              <br />
              <br />

              <Button
                color="primary"
                variant="contained"
                className={classes.button}
                onClick={this.handleAlertOpen}
              >
                SAVE DETAILS
              </Button>
            </form>
            <AlertDialog
              open={alertDialog.open}
              title={alertDialog.title}
              content={alertDialog.content}
              handleAgree={this.handleAlertAgree}
              handleClose={this.handleAlertClose}
            />
          </Paper>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(UpdateProfile);
