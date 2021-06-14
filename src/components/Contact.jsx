import { div } from "prelude-ls";
import React from "react";
import "./Style/Contact.css";
import ReactImg from "./Style/img/logo-og.png";

function Contact(props) {
  return (
    <div>
      <div className="contactContainer">
        <div className="location">
          <span className="currentPage">
            <p className="PreviousPage" id="home" onClick={props.onClick}>
              Home
            </p>
            <p className="arrow">➙</p> Contact
          </span>
        </div>
        <h2>Contact me</h2>
        <div className="contactMe">
          <img src={ReactImg} alt="" />
          <div className="mailForm">
            <form
              action="mailto:shota.nope@gmail.com"
              method="post"
              encType="multipart/form-data"
              name="EmailForm"
            >
              <input
                type="text"
                name="ContactName"
                placeholder="Your Name..."
              />
              <input
                type="email"
                name="EmailAddress"
                placeholder="Email Address..."
              />
              <input
                type="text"
                name="CompanyName"
                placeholder="Company Name..."
              />
              <textarea name="Message" placeholder="Message..."></textarea>
              <input className="submit" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
