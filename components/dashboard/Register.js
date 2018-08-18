import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";

export default class extends Component {
  state = {
    eventName: "",
    events: []
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleKeyPress = event => {
    if (event.which === 13) {
      let obj = { ...this.state };
      obj.events.push(this.state.eventName);
      obj.eventName = "";
      this.setState(obj);
    }
  };
  handleDelete = i => {
    let obj = { ...this.state };
    obj.events.splice(i, 1);
    this.setState(obj);
  };
  render() {
    return (
      <>
        <div>
          {this.state.events.map((event, index) => {
            return (
              <Chip
                className="chip"
                label={event}
                key={event}
                onDelete={() => this.handleDelete(index)}
              />
            );
          })}
        </div>
        <TextField
          id="eventName"
          label="Event Name"
          value={this.state.eventName}
          onChange={this.handleChange("eventName")}
          onKeyPress={this.handleKeyPress}
          margin="normal"
          fullWidth={true}
        />
        <style jsx>
          {`
            .chip {
              margin: 2px;
            }
          `}
        </style>
      </>
    );
  }
}
