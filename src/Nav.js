import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <h2 className="nav_logo">Netflix</h2>
      {/* <img
        className="nav_logo"
        src="https://en.wikipedia.org/wiki/Netflix#/media/File:Netflix_2015_logo.svg"
        alt="Netflix Logo"
      /> */}
      <h2 className="nav_avatar">Profile</h2>
      {/* <img
        className="nav_avatar"
        src="https://en.wikipedia.org/wiki/Netflix#/media/File:Netflix_2015_logo.svg"
        alt="Avatar Logo"
      /> */}
    </div>
  );
}

export default Nav;
