import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
};

function Navbar() {
  return (
    <div>
     <NavLink
        to="/NBA"
        exact
        style={linkStyles}
        activestyle={{
            background: "white",
            color: "black",
        }}
      >
        NBA
      </NavLink>
      <NavLink
        to="/WNBA"
        exact
        style={linkStyles}
        activeStyle={{
            background: "white",
            color: "black",
        }}
      >
        WNBA
      </NavLink>
      <NavLink
        to="/NFL"
        exact
        style={linkStyles}
        activeStyle={{
            background: "white",
            color: "black",
        }}
      >
        NFL
      </NavLink>
      <NavLink
        to="/MLB"
        exact
        style={linkStyles}
        activeStyle={{
            background: "white",
            color: "black",
        }}
      >
        MLB
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activestyle={{
          background: "white",
          color: "black",
        }}
      >
        LogIn
      </NavLink>
    </div>
  );
}

export default Navbar;