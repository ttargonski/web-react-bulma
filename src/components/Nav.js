import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {
    active: false,
    navbar: ""
  };

  handleClick = () => {
    if (this.state.active === false) {
      this.setState({
        active: true,
        navbar: "is-active"
      });
    } else {
      this.setState({
        active: false,
        navbar: ""
      });
    }
  };

  render() {
    return (
      <nav
        id="navbar"
        className="navbar-menu is-active"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/home" id="logo" className="navbar-item" href="#">
            Company<strong>Name</strong>
          </Link>
          <a
            onClick={() => this.handleClick()}
            role="button"
            className={"navbar-burger " + this.state.navbar}
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
          >
            <span id="logo" aria-hidden="true"></span>
            <span id="logo" aria-hidden="true"></span>
            <span id="logo" aria-hidden="true"></span>
          </a>
        </div>

        <div className={"navbar-menu " + this.state.navbar} id="navMenu">
          <div className="navbar-end">
            <div className="navbar-start">
              <Link to="/home" id="nav-item" className="navbar-item">
                Home
              </Link>
              <Link to="/about" id="nav-item" className="navbar-item">
                About
              </Link>
              <Link to="/faq" id="nav-item" className="navbar-item">
                FAQ
              </Link>
            </div>
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary is-outlined">JOIN NOW</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
