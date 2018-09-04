import React, { Component } from "react";
import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import { withRouter } from "next/router";
import Link from "next/link";
const styles = theme => ({
  root: {
    width: "100%"
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0
  }
});
export default withRouter(
  withStyles(styles)(
    class extends React.Component {
      render() {
        const { classes } = this.props;
        let tab = this.props.tab;
        if (tab === undefined) tab = "dashboard";
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
          },
          {
            name: "FAQ",
            icon: "question_answer"
          }
        ];
        return (
          <div>
            <List component="nav" className={classes.list}>
              {tabs.map((obj, index) => {
                const lowerCaseName = obj.name.toLowerCase().replace(/ /g, "");
                return (
                  <Link
                    as={`/dashboard/${lowerCaseName}`}
                    href={`/dashboard?tab=${lowerCaseName}`}
                    key={index}
                  >
                    <MenuItem selected={tab === lowerCaseName} button>
                      <ListItem>
                        <ListItemIcon>
                          <Icon>{obj.icon}</Icon>
                        </ListItemIcon>
                        <ListItemText inset primary={obj.name} />
                      </ListItem>
                    </MenuItem>
                  </Link>
                );
              })}
            </List>
          </div>
        );
      }
    }
  )
);
