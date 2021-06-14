import React from "react";
import "./Style/Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneIcon from "@material-ui/icons/Phone";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="centerFooter">
        <h3>Contact Me</h3>
        <div className="icons">
          <a href="https://github.com/donguzashvili">
            <GitHubIcon className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/shota-donguzashvili-457280202/">
            <LinkedInIcon className="icon" />
          </a>
          <a href="https://www.facebook.com/donshota/">
            <FacebookIcon className="icon" />
          </a>
          <a href="tel:+995598335885">
            <PhoneIcon className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
