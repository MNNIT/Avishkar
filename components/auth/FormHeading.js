import React, { Component } from "react";
export default class extends Component {
  render() {
    return (
      <div className="options">
        <div
          className={this.props.highlightSignin ? "highlight" : ""}
          onClick={() => {
            this.props.showForm("signin");
          }}
        >
          SIGN IN
        </div>
        <div
          className={!this.props.highlightSignin ? "highlight" : ""}
          SIGNUP
          onClick={() => {
            this.props.showForm("signup");
          }}
        >
          SIGN UP
        </div>
        <style jsx>
          {`
            div.options {
              width: 100%;
              height: 40px;
              box-sizing: border-box;
              cursor: pointer;
            }
            div.options div {
              width: 50%;
              float: left;
              text-align: center;
              padding: 10px 0px;
              background-color: #f5f5f5;
              transition: all 0.5s;
            }
            div.options .highlight {
              background-color: #1565c0;
              color: white;
            }
          `}
        </style>
      </div>
    );
  }
}
