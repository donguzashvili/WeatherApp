import React, { useState } from "react";
import Logo from "./Style/img/logo.png";
import "../components/Style/Header.css";
import MenuIcon from "@material-ui/icons/Menu";

function Header(props) {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <div className="HeaderDiv">
      <div className="mainHeaderContent">
        <img src={Logo} alt="logo" />
        <ul className="ClassicMenu">
          <li>
            <span
              id="home"
              className={props.button === "home" ? "selected" : null}
              onClick={props.onClick}
            >
              Home
            </span>
          </li>
          <li>
            <span
              id="news"
              className={props.button === "news" ? "selected" : null}
              onClick={props.onClick}
            >
              News
            </span>
          </li>
          <li>
            <span
              id="photos"
              className={props.button === "photos" ? "selected" : null}
              onClick={props.onClick}
            >
              Contact
            </span>
          </li>
          <li>
            <span
              id="contact"
              className={props.button === "contact" ? "selected" : null}
              onClick={props.onClick}
            >
              Contact
            </span>
          </li>
        </ul>
        <div className="ResponsiveMenu">
          <MenuIcon className="toggleMenu" onClick={toggleMenu} />
        </div>
      </div>

      <ul
        className={"toggleItems " + (toggle ? "openMenu" : "closedMenu")}
        id="openMenu"
      >
        <li id="home" onClick={props.onClick}>
          Home
        </li>
        <li id="news" onClick={props.onClick}>
          News
        </li>
        <li id="photos" onClick={props.onClick}>
          Photos
        </li>
        <li id="contact" onClick={props.onClick}>
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Header;
