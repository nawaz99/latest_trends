import React from "react";

function StarRating({ rating }) {
  const starStyle = {
    color: "lightgrey",
    marginRight: ".2rem",
  };

  const filledStarStyle = {
    color: "gold",
    marginRight: ".2rem",
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const style = i <= rating ? filledStarStyle : starStyle;
    stars.push(<i className="fa fa-star" style={style} key={i + "r"}></i>);
  }

  return <>{stars}</>;
}

export default StarRating;
