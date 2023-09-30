import React, { useState } from "react";
import "../css/ResultCard.css";
import StarRating from "./StarRating";

const ResultCard = ({ avatar, username, price, star_number }) => {
  const [change, setChange] = useState({
    color: "white",
    myclass: "fa-regular fa-heart",
    viewproduct: false,
  });

  const starStyle = {
    color: "lightgrey",
  };

  const filledStarStyle = {
    color: "gold",
  };

  const wishList = () => {
    let obj1 = {
      color: "red",
      myclass: "fa fa-heart",
    };

    let obj2 = {
      color: "white",
      myclass: "fa-regular fa-heart",
    };

    setChange((chng) => (chng.color == "white" ? obj1 : obj2));
  };

  return (
    <div className="result_card">
      <img src={avatar} alt="avatar" />
      <i
        className={change.myclass}
        style={{
          color: change.color,
          position: "absolute",
          right: "10px",
          top: "10px",
          cursor: "pointer",
        }}
        onClick={wishList}
      ></i>
      <a href="#">
        <p className="view_product">View product</p>
      </a>

      <div style={{ padding: ".8rem" }}>
        <a href="#">{username}</a>
        <div style={{ color: "blue" }}>
          <span style={{ textDecoration: "line-through", color: "lightgrey" }}>
            Rs.{price}
          </span>{" "}
          Rs.{price - (price * 5) / 100}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "10px" }}>
            <StarRating rating={star_number} />
          </div>
          <span>({star_number})</span>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
