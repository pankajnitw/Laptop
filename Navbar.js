import React from "react";
import PropTypes from "prop-types";
// import { a } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary navbar-${props.mode}  bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="Alert">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a active" aria-current="page" href="Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="todo">
                  
                </a>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch text-${props.mode_red==="danger"?"primary":"danger"}`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
            Enable {props.mode_red} Mode
          </label>
        </div>
        <div className={`form-check form-switch text-${props.mode_green==="primary"?"dark":"light"}`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
            Enable {props.mode_green} Mode
          </label>
        </div>
          <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
            Enable {props.mode} Mode
          </label>
        </div>
        </div>
        
      </nav>

      {/* <nav className="header">
        <h2>{props.title}</h2>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>About us</li>
        </ul>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggle}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
            Enable Dark Mode
          </label>
        </div>
       
      </nav> */}
    </div>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string,
};
Navbar.defaultProps = {
  title: "hey man",
  number: "23",
};
