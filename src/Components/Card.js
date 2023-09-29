import React from "react";

const Card = ({ avatar }) => {
  return (
    <div className="card">
      <img src={avatar} alt="avatar" />
    </div>
  );
};

export default Card;
