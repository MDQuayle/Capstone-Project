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
const activeLinkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "white",
  textDecoration: "none",
  color: "black",
};

function Navbar({user}) {
  return (
    <div>
      {user ? (
        <div>
      <NavLink
        to="/"
        exact
        style={({ isActive }) => 
                      (isActive ? activeLinkStyles : linkStyles)}
      >
        HOME
      </NavLink>
     <NavLink
        to="/NBA"
        exact
        style={({ isActive }) => 
                      (isActive ? activeLinkStyles : linkStyles)}
      >
        NBA
      </NavLink>
      <NavLink
        to="/WNBA"
        exact
        style={({ isActive }) => 
        (isActive ? activeLinkStyles : linkStyles)}
      >
        WNBA
      </NavLink>
      <NavLink
        to="/NFL"
        exact
        style={({ isActive }) => 
        (isActive ? activeLinkStyles : linkStyles)}
      >
        NFL
      </NavLink>
      <NavLink
        to="/MLB"
        exact
        style={({ isActive }) => 
        (isActive ? activeLinkStyles : linkStyles)}
      >
        MLB
      </NavLink> 
      </div>) : (
      <NavLink
        to="/login"
        exact
        style={({ isActive }) => 
        (isActive ? activeLinkStyles : linkStyles)}
      >
        LogIn
      </NavLink>
      )}
    </div>
  );
}

export default Navbar;