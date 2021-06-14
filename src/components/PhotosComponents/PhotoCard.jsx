import React from "react";

function PhotoCard() {
  return (
    <div className="PhotoCard">
      <img src="https://picsum.photos/200/300" alt="" />
      <div className="photoTitle">
        <h3>Neque porro quisquam</h3>
        <p>
          Atatem accusantium aperiam eaque quae quasi architecto beatae vitae
          dicta sunt explicabo nemo enim.
        </p>
        <span className="stars">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
        </span>
      </div>
    </div>
  );
}
export default PhotoCard;
