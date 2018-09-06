import Meta from "../components/events/Meta";
import EventBanner from "../components/events/EventBanner";
import SubEvents from "../components/events/SubEvents";
import { withRouter } from "next/router";
import eventsData from "../data/global";
import React, { Component } from "react";
import AerodynamixContent from "../components/events/AerodynamixContent";
import NavBar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import IconEvents from "../components/IconEvents";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
const contactInfo = {
  cyberquest: [
    {
      name: "Akshay Sharma",
      mobile: 7599008882,
      email: "akshay31057@gmail.com"
    },
    {
      name: "Rohan Chabra",
      mobile: 8601444918,
      email: "rohan23chabra@gmail.com"
    },
    {
      name: "Yash Chapani",
      mobile: 7233019252,
      email: "chapaniyash@gmail.com"
    }
  ],
  electromania: [
    {
      name: "Rishabh Ravi",
      mobile: 8210920062,
      email: "rishabh18ravi@gmail.com"
    },
    {
      name: "Ayush Kumar Ranjan",
      mobile: 7800186729,
      email: "tayn.shanu@gmail.com"
    },
    {
      name: "Shreya Srivastava",
      mobile: 8545870037,
      email: "srivastavashreya0108@gmail.com"
    }
  ],
  mechrocosm: [
    {
      name: "Apoorv Tyagi",
      mobile: 7233018828,
      email: "apoorvtyagi15@gmail.com"
    },
    {
      name: "Rahul Verma",
      mobile: 7233019509,
      email: "rahul239verma@gmail.com"
    },
    {
      name: "Shubham Kumar",
      mobile: 7488053293,
      email: "shubhamkumar699531@gmail.com"
    }
  ],
  genesis: [
    {
      name: "Zeeshan Sabir",
      mobile: 7705863638,
      email: "zeeshansabir317@gmail.com"
    }
  ],
  monopoly: [
    {
      name: "Sumit Chowdhary",
      mobile: 8797531050,
      email: ""
    }
  ],
  nirmaan: [
    {
      name: "Abhishek Kumar",
      mobile: 8789655512,
      email: "abhi06437@gmail.com"
    },
    {
      name: "Darpan Chaudhary",
      mobile: 7408390592,
      email: "darpanchaudhary5741@gmail.com"
    }
  ],
  robomaina: [
    {
      name: "Aditya Singh",
      mobile: 9519043907,
      email: ""
    },
    {
      name: "Piyush Gupta",
      mobile: 9455396226,
      email: ""
    }
  ],
  powersurge: [
    {
      name: "Pratiush Singh",
      mobile: 7070181243,
      email: "pratiushsingh.ps@gmail.com"
    }
  ],
  rasayans: [
    {
      name: "Anubhav Sarmah",
      mobile: 7905572935,
      email: "anubhavsarmah97@gmail.com"
    }
  ],
  oligopoly: [
    {
      name: "Anirban Mandal",
      mobile: 7599003356,
      email: ""
    }
  ],
  kreedomania: [
    {
      name: "Chaitanya Kumar",
      mobile: 7233019203,
      email: ""
    }
  ],
  aerodynamix: [
    {
      name: "Kishan",
      mobile: 7905461842,
      email: ""
    }
  ]
};
class Page extends Component {
  state = {
    alertDialog: {
      open: false
    }
  };
  handleAlertOpen = () => {
    let { alertDialog } = this.state;
    alertDialog.open = true;
    this.setState({ alertDialog });
  };
  handleAlertClose = () => {
    let { alertDialog } = this.state;
    alertDialog.open = false;
    this.setState({ alertDialog });
  };
  render() {
    const { router } = this.props;
    const eventName = router.query.name;
    const { open } = this.state.alertDialog;
    if (!eventName || !eventsData[eventName]) {
      return (
        <>
          <Meta color="#212121" />
          <IconEvents />
        </>
      );
    }
    const subEvents = eventsData[eventName]; //array of subevents

    if (eventName === "aerodynamix") {
      return (
        <>
          <Meta color={"#212121"} />
          <EventBanner
            eventName={eventName}
            router={this.props.router}
            handleAlertOpen={this.handleAlertOpen}
          />
          <AerodynamixContent />
          <div>
            <Dialog
              open={open}
              onClose={this.handleAlertClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                Contact Information
              </DialogTitle>
              <div>
                <List>
                  {contactInfo[eventName] !== undefined ? (
                    contactInfo[eventName].map(person => {
                      return (
                        <ListItem>
                          <ListItemText primary={person.name} />
                          <a
                            href={"tel:" + String(person.mobile)}
                            style={{ textDecoration: "none" }}
                          >
                            <ListItemText primary={person.mobile} />
                          </a>
                        </ListItem>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </List>
              </div>
            </Dialog>
          </div>
        </>
      );
    }
    return (
      <>
        <Meta color={"#212121"} />
        <EventBanner
          eventName={eventName}
          router={this.props.router}
          handleAlertOpen={this.handleAlertOpen}
        />
        <SubEvents router={this.props.router} />
        <div>
          <Dialog
            open={open}
            onClose={this.handleAlertClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Contact Information
            </DialogTitle>
            <div>
              <List>
                {contactInfo[eventName] !== undefined ? (
                  contactInfo[eventName].map(person => {
                    return (
                      <ListItem>
                        <ListItemText primary={person.name} />
                        <a
                          href={"tel:" + String(person.mobile)}
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemText primary={person.mobile} />
                        </a>
                      </ListItem>
                    );
                  })
                ) : (
                  <></>
                )}
              </List>
            </div>
          </Dialog>
        </div>
      </>
    );
  }
}
export default withRouter(Page);
