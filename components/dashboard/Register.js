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
import axios from "../../axios";
import EventInfoCard from "./EventInfoCard";

// const suggestions = [
//   { displayName: "Softablitz" },
//   { displayName: "Insomnia" },
//   { displayName: "Softathalon" },
//   { displayName: "Webster" },
//   { displayName: "Droidrush" },
//   { displayName: "Code of the Day" },
//   { displayName: "Operaomnia" },
//   { displayName: "Revengg" },
//   { displayName: "Tuxwars" },
//   { displayName: "OpenSource" },
//   { displayName: "Sphinx" },
//   { displayName: "Logical Rhythm" },
//   { displayName: "Inception" },
//   { displayName: "Code Warriors" },
//   { displayName: "Quintathlon" },
//   { displayName: "Circuit of the Day" },
//   { displayName: "Quintathlon (software) " },
//   { displayName: "Codotron" },
//   { displayName: "Embedded Design" },
//   { displayName: "Impromptu" },
//   { displayName: "Operaomnia (Electromania)" },
//   { displayName: "Innodev" },
//   { displayName: "Combo Magic" },
//   { displayName: "FPGA" },
//   { displayName: "Robomania" },
//   { displayName: "Palladin" },
//   { displayName: "Central Dogma" },
//   { displayName: "Cluequest" },
//   { displayName: "Survivor Series" },
//   { displayName: "Veni Vidi Vici" },
//   { displayName: "Blueprint" },
//   { displayName: "Ziggurare" },
//   { displayName: "Shutter Up" },
//   { displayName: "Linkidge" },
//   { displayName: "Concube" },
//   { displayName: "Terraquiz" },
//   { displayName: "Cognizance" },
//   { displayName: "War of Currents" },
//   { displayName: "Preddefined" },
//   { displayName: "Codesparks" },
//   { displayName: "Pentathlon" },
//   { displayName: "Circuit Bizz" },
//   { displayName: "Aqua Rocchetta" },
//   { displayName: "Chem E Dexterous" },
//   { displayName: "Quimico" },
//   { displayName: "Quiziosity" },
//   { displayName: "Simulazione" },
//   { displayName: "Vision" },
//   { displayName: "The Great Warrior" },
//   { displayName: "Solo Sumo Fight" },
//   { displayName: "The Road not taken" },
//   { displayName: "Netritva (Oligopoly)" },
//   { displayName: "Trading Strategist" },
//   { displayName: "Chanakya Neeti" },
//   { displayName: "Netritva (Monopoly)" },
//   { displayName: "Stallmart" },
//   { displayName: "Aerodynamics" }
// ];
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
    inpuErrorMsg: "",
    selectedEventInfo: { displayName: "" }
  };
  componentDidMount() {
    axios.get("/api/all-events").then(res => {
      if (res.data.success) {
        suggestions = res.data.events;
      }
    });
  }
  register = () => {
    axios
      .post("/api/register-event", {
        eventName: this.state.selectedEventInfo.name
      })
      .then(res => {
        if (res.data.success) {
          this.setState({ success: true });
        } else {
          alert(res.data.message);
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
          this.setState({ selectedEventInfo: data.event });
        } else {
          this.setState({
            inputError: true,
            inpuErrorMsg: "Event Not available"
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
      return <p> Event Not available </p>;
    } else {
      return <p> Event Registered Successfully </p>;
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
  render() {
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
            value: this.state.single,
            onChange: this.handleChange("single"),
            error: this.state.inputError,
            helperText: this.state.inputErrorMsg
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
          <Button
            variant="contained"
            className={classes.button}
            onClick={this.register}
          >
            Register
          </Button>
        </div>
      </>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Register);
