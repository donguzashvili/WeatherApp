import React from "react";
import "./Photos.css";
import PhotoCard from "./PhotoCard";
import { navigate } from "hookrouter";

function Photos(props) {
  return (
    <div className="photosContainer">
      <div className="location">
        <div className="currentPage">
          <p
            className="PreviousPage"
            id="home"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </p>
          <p className="arrow">➙</p> Photos
        </div>
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
