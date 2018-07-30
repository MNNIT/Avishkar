import React, { Component } from "react";
import Mask from "../components/Mask";
import Link from "next/link";
class MobileNav extends Component {
  state = {
    showMenu: false
  };
  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };
  render() {
    //const className = this.props.path === "/" ? "none" : "shadow";
    return (
      <section
        className="primary-bg-color"
        style={{ backgroundColor: this.props.color }}
      >
        <nav>
          <div id="icon-container" onClick={this.toggleMenu}>
            <img src="/static/icon/menu.png" alt="Menu" />
          </div>
          <div
            id="menu"
            className={this.state.showMenu ? "menu-show" : "menu-hide"}
          >
            <h2>
              <Link href="/">
                <a href="/">Home</a>
              </Link>
            </h2>
            <h2>
              <Link href="/events">
                <a href="/events">Events</a>
              </Link>
            </h2>
            <h2>
              <Link href="/team">
                <a href="/team">Team</a>
              </Link>
            </h2>
          </div>
        </nav>
        <Mask show={this.state.showMenu} hideModal={this.toggleMenu} />
        <style jsx>{`
          @media (min-width: 701px) {
            section {
              display: none;
            }
          }
          @media (max-width: 700px) {
            section {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 44px;
              box-sizing: border-box;
              z-index: 100001;
            }
            .shadow {
              box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                0 3px 1px -2px rgba(0, 0, 0, 0.12),
                0 1px 5px 0 rgba(0, 0, 0, 0.2);
            }
            nav {
              width: 100%;
              height: 44px;
              padding: 0px 30px;
            }
            #icon-container {
              padding-top: 5px;
              height: 34px;
              width: auto;
              cursor: pointer;
            }
            #icon-container img {
              height: 100%;
              width: auto;
            }
            #menu {
              position: fixed;
              width: 70vw;
              height: 100vh;
              top: 0px;
              left: 0px;
              background-color: #eeeeee;
              transition: transform 0.4s;
              padding-top: 50px;
            }
            .menu-show {
              opacity: 1;
              transform: translateX(0%);
              z-index: 100000;
            }
            .menu-hide {
              opacity: 0;
              transform: translateX(-100%);
            }
            #menu h2 {
              text-align: center;
              font-size: 20px;
              margin: 20px;
            }
            a {
              text-decoration: none;
              color: #e91e63;
            }
          }
        `}</style>
      </section>
    );
  }
}
export default MobileNav;
