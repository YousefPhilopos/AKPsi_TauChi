import React from "react";
import "./Navbar.css";
import akpsi_crest from "../../assets/akpsi_crest.png";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={akpsi_crest} alt="" className="crest" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Members</li>
        <li>Events</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
