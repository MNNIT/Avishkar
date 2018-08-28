import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import { withRouter } from "next/router";
import Link from "next/link";
export default withRouter(
  class extends React.Component {
    render() {
      const tabs = [
        {
          name: "Dashboard",
          icon: "dashboard"
        },
        {
          name: "Profile",
          icon: "person"
        },
        {
          name: "Register",
          icon: "add_box"
        },
        {
          name: "Solo Events",
          icon: "event"
        },
        {
          name: "Team Events",
          icon: "event"
        }
      ];
      return (
        <List>
          {tabs.map((obj, index) => {
            const lowerCaseName = obj.name.toLowerCase().replace(/ /g, "");
            return (
              <Link
                as={`/dashboard/${lowerCaseName}`}
                href={`/dashboard?tab=${lowerCaseName}`}
                key={index}
              >
                <ListItem button>
                  <ListItemIcon>
                    <Icon>{obj.icon}</Icon>
                  </ListItemIcon>
                  <ListItemText primary={obj.name} />
                </ListItem>
              </Link>
            );
          })}
        </List>
      );
    }
  }
);
