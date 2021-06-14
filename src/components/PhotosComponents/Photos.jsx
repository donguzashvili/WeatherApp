import React from "react";
import "./Photos.css";
import PhotoCard from "./PhotoCard";

function Photos(props) {
  return (
    <div className="photosContainer">
      <div className="location">
        <span className="currentPage">
          <p className="PreviousPage" id="home" onClick={props.onClick}>
            Home
          </p>
          <p className="arrow">➙</p> Photos
        </span>
      </div>
      <div className="photoCardsContainer">
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
      </div>
    </div>
  );
}
export default Photos;
