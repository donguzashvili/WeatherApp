import React from "react";
import "./NewsCards.css";

function NewsCard(props) {
  return (
    <div className="newsCard">
      <h3 className="cardHeader">{props.header}</h3>
      <img className="cardImage" src={props.img} alt="" />
      <p>{props.paragraph}</p>
      <button>Read More</button>
    </div>
  );
}
export default NewsCard;
