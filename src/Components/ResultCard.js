import React, { useState } from "react";
import "../css/ResultCard.css";

const ResultCard = ({ avatar, username, price, star_number,randomNum }) => {

  const [colorchange, setColorChange] = useState({
    color: "white",
    myclass: "fa-regular fa-heart",
  });

  const starStyle = {
    color: "lightgrey",
  };

  const filledStarStyle = {
    color: "gold",
  };

  const mystars = [];
  for (let i = 1; i <= 5; i++) {
    const style = i <= star_number ? filledStarStyle : starStyle;

    mystars.push(
      <div style={{ marginRight: "10px" }} key={i}>
        <i className="fa fa-star" style={style}></i>
      </div>
    );
  }
  const wishList = () => {
    return colorchange.color == "white"
      ? setColorChange({
          color: "red",
          myclass: "fa fa-heart",
        })
      : setColorChange({
          color: "white",
          myclass: "fa-regular fa-heart",
        });
  }

  return (
    <div className="result_card" style={{ position: "relative" }} onClick={wishList}>
      <img src={avatar} alt="avatar" />
      <i
        className={colorchange.myclass}
        style={{
          color: colorchange.color,
          position: "absolute",
          right: "10px",
          top: "10px",
          cursor: "pointer",
        }}
      ></i>
      <div style={{ padding: ".8rem" }}>
        <a href="#">{username}</a>
        <div style={{ color: "blue" }}>
          <span style={{ textDecoration: "line-through", color: "lightgrey" }}>
            Rs.{price}
          </span>{" "}
          Rs.{price - (price * 5) / 100}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {mystars}
          <span>({randomNum})</span>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
