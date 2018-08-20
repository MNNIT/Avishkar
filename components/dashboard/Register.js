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
import axios from "axios";

const suggestions = [
  { label: "Softablitz" },
  { label: "Insomnia" },
  { label: "Softathalon" },
  { label: "Webster" },
  { label: "Droidrush" },
  { label: "Code of the Day" },
  { label: "Operaomnia" },
  { label: "Revengg" },
  { label: "Tuxwars" },
  { label: "OpenSource" },
  { label: "Sphinx" },
  { label: "Logical Rhythm" },
  { label: "Inception" },
  { label: "Code Warriors" },
  { label: "Quintathlon" },
  { label: "Circuit of the Day" },
  { label: "Quintathlon (software) " },
  { label: "Codotron" },
  { label: "Embedded Design" },
  { label: "Impromptu" },
  { label: "Operaomnia (Electromania)" },
  { label: "Innodev" },
  { label: "Combo Magic" },
  { label: "FPGA" },
  { label: "Robomania" },
  { label: "Palladin" },
  { label: "Central Dogma" },
  { label: "Cluequest" },
  { label: "Survivor Series" },
  { label: "Veni Vidi Vici" },
  { label: "Blueprint" },
  { label: "Ziggurare" },
  { label: "Shutter Up" },
  { label: "Linkidge" },
  { label: "Concube" },
  { label: "Terraquiz" },
  { label: "Cognizance" },
  { label: "War of Currents" },
  { label: "Preddefined" },
  { label: "Codesparks" },
  { label: "Pentathlon" },
  { label: "Circuit Bizz" },
  { label: "Aqua Rocchetta" },
  { label: "Chem E Dexterous" },
  { label: "Quimico" },
  { label: "Quiziosity" },
  { label: "Simulazione" },
  { label: "Vision" },
  { label: "The Great Warrior" },
  { label: "Solo Sumo Fight" },
  { label: "The Road not taken" },
  { label: "Netritva (Oligopoly)" },
  { label: "Trading Strategist" },
  { label: "Chanakya Neeti" },
  { label: "Netritva (Monopoly)" },
  { label: "Stallmart" },
  { label: "Aerodynamics" }
];

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
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

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
          suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
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
    success: false
  };
  register = () => {
    axios
      .post("/api/register-event", { eventName: this.state.single })
      .then(res => {
        if (res.data.success) {
          this.setState({ success: true });
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
            onChange: this.handleChange("single")
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
