import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Autosuggest from "react-autosuggest";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
// import axios from "../../axios";
import EventInfoCard from "./EventInfoCard";
import SnackBar from "../SnackBar";
import axios from "axios";
import baseURL from "../../config";
import ToggleDisplay from "react-toggle-display";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;
import AlertDialog from "../AlertDialog";
import CustomLoader from "../CustomLoader";
let suggestions = [];
function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input
        }
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.displayName, query);
  const parts = parse(suggestion.displayName, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.displayName.toLowerCase().slice(0, inputLength) ===
            inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.displayName;
}
const styles = theme => ({
  root: {
    height: 250,
    flexGrow: 1
  },
  container: {
    position: "relative"
  },
  suggestionsContainerOpen: {
    position: "relative",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  divider: {
    height: theme.spacing.unit * 2
  },
  button: {
    margin: theme.spacing.unit
  }
});

class Register extends Component {
  popperNode = null;
  state = {
    single: "",
    suggestions: [],
    success: false,
    inputError: false,
    inputErrorMsg: "",
    selectedEventInfo: { displayName: "" },
    showRegisterButton: false,
    showSnackBar: false,
    snackVariant: "",
    snackMessage: "",
    alertDialog: {
      open: false,
      title: "",
      content: ""
    },
    loading: true
  };
  componentDidMount() {
    axios.get("/api/all-events").then(res => {
      if (res.data.success) {
        suggestions = res.data.events;
        this.setState({ loading: false });
      }
      if (this.state.single) {
        this.fetchSelectedEventInfo();
      }
    });
  }
  static getDerivedStateFromProps = (props, state) => {
    const newState = { ...state };
    if (props.event) {
      newState.single = props.event;
    }
    return newState;
  };
  // componentDidUpdate (prevProps, prevState) {
  //   if(prevState.single === prevProps.event){

  //   }
  // }

  register = () => {
    axios
      .post("/api/register-event", {
        eventName: this.state.selectedEventInfo.name
      })
      .then(res => {
        if (res.data.success) {
          this.setState({
            success: true,
            showSnackBar: true,
            snackVariant: "success",
            snackMessage: "Successfully registered for the event"
          });
        } else {
          this.setState({
            showSnackBar: true,
            snackVariant: "error",
            snackMessage: res.data.message
          });
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          window.location.replace("/auth");
        }
      });
  };
  fetchSelectedEventInfo = () => {
    axios
      .post("/api/fetch-event-info", { eventDisplayName: this.state.single })
      .then(res => {
        const { data } = res;
        if (data.success) {
          this.setState({
            inputError: false,
            inputErrorMsg: "",
            selectedEventInfo: data.event,
            showRegisterButton: true
          });
        } else {
          this.setState({
            inputError: true,
            inputErrorMsg: "Event Not available",
            showRegisterButton: false
          });
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          window.location.replace("/auth");
        }
      });
  };
  checkRegisterStatus = () => {
    if (this.state.success === false) {
      return <p> Enter an Event Name to register </p>;
    } else {
      return (
        <b>
          <p> Event Registered Successfully </p>
        </b>
      );
    }
  };
  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue
    });
  };
  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.fetchSelectedEventInfo();
    this.setState({
      suggestions: []
    });
  };
  handleSnackClick = () => {
    this.setState({ showSnackBar: true });
  };

  handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ showSnackBar: false });
  };
  handleAlertOpen = () => {
    const { alertDialog } = this.state;
    alertDialog.open = true;
    alertDialog.title = `Are you Sure you want to register to the Event ${
      this.state.single
    }?`;
    alertDialog.content =
      "Once registered, changes are permanent and you can not edit!";
    this.setState({ alertDialog });
  };
  handleAlertClose = () => {
    const { alertDialog } = this.state;
    alertDialog.open = false;
    this.setState({ alertDialog });
  };
  handleAlertAgree = () => {
    this.register();
    const { alertDialog } = this.state;
    alertDialog.open = false;
    this.setState({ alertDialog });
  };
  render() {
    const {
      single,
      inputError,
      inputErrorMsg,
      alertDialog,
      loading
    } = this.state;
    if (loading) {
      return <CustomLoader />;
    }
    const { classes } = this.props;
    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion
    };
    return (
      <>
        {this.checkRegisterStatus()}
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder: "Enter Event Name",
            value: single,
            onChange: this.handleChange("single"),
            error: inputError && (single.length > 0 ? true : false),
            helperText: single.length > 0 ? inputErrorMsg : ""
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
        <div className="row center-xs center-md center-lg">
          <EventInfoCard event={this.state.selectedEventInfo} />
        </div>
        <div className="row center-xs center-md center-lg">
          <ToggleDisplay show={this.state.showRegisterButton}>
            <Button
              variant="contained"
              className={classes.button}
              onClick={this.handleAlertOpen}
            >
              Register
            </Button>
          </ToggleDisplay>
        </div>
        <AlertDialog
          open={alertDialog.open}
          title={alertDialog.title}
          content={alertDialog.content}
          handleAgree={this.handleAlertAgree}
          handleClose={this.handleAlertClose}
        />
        <SnackBar
          showSnackBar={this.state.showSnackBar}
          handleClose={this.handleSnackClose.bind(this)}
          handleClick={this.handleSnackClick.bind(this)}
          variant={this.state.snackVariant}
          message={this.state.snackMessage}
        />
      </>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Register);
