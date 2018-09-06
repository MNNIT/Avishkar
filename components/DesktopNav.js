import Link from "next/link";
import React, { Component } from "react";
import baseURL from "../config";
import axios from "axios";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default class extends Component {
  state = {
    logoutClick: false
  };
  logout = () => {
    this.setState({ logoutClick: true });
    axios
      .get("/api/logout")
      .then(res => {
        this.props.showSnackBar("Redirecting...", "basic");
        setTimeout(() => {
          window.location.replace("/");
        }, 2000);
      })
      .catch(err => {
        this.props.showSnackBar("Failed!", "error");
        console.log(err);
      });
  };
  render() {
    const { links } = this.props;
    return (
      <section
        className="primary-bg-color"
        style={{ backgroundColor: "black" }}
      >
        <nav>
          <div className="navbar">
            <div className="wrapper">
              {links.map(function(link) {
                // const className =
                //   link[0] === path ? "link-container active" : "link-container";
                return (
                  <div className="link-container" key={link[1]}>
                    <Link href={link[0]}>
                      <a href={link[0]}>{link[1]}</a>
                    </Link>
                  </div>
                );
              })}
              {this.props.login ? (
                <div className="link-container">
                  <a
                    onClick={this.logout}
                    style={{ cursor: "pointer", paddingLeft: "30px" }}
                  >
                    {this.state.logoutClick ? "Submitting" : "Logout"}
                  </a>
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
        </nav>
        <style jsx>
          {`
            section {
              width: 100vw;
              height: 56px;
              position: relative;
              z-index: 1000;
            }
            .shadow {
              box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                0 3px 1px -2px rgba(0, 0, 0, 0.12),
                0 1px 5px 0 rgba(0, 0, 0, 0.2);
            }
            nav {
              width: 100vw;
              height: 100%;
            }
            .navbar {
              width: 100vw;
              height: 100%;
              padding: 4px 80px;
              box-sizing: border-box;
            }
            div.wrapper {
              display: flex;
              width: 400px;
              height: 100%;
              justify-content: center;
              align-items: center;
              margin: 0 auto;
              box-sizing: border-box;
            }
            div.link-container {
              height: 80%;
              padding: 10px 20px;
              margin: 10px;
              /* border-radius: 6px;*/
              box-sizing: border-box;
              display: flex;
              align-items: center;
              text-align: center;
            }
            div.active {
              border: 2px solid #21d4fd;
            }
            div.active a {
              color: #21d4fd;
              color: white;
            }
            a {
              margin: 0px;
              text-decoration: none;
              color: white;
              width: 100%;
              font-size: 20px;
            }
            @media (max-width: 700px) {
              section {
                display: none;
              }
              .navbar {
                padding: 0px;
              }
            }
          `}
        </style>
      </section>
    );
  }
}
