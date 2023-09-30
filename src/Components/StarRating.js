import React from 'react';


function StarRating({ rating }) {
  const starStyle = {
    color: 'gold',
  };

  const filledStarStyle = {
    color: 'green', 
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const style = i <= rating ? filledStarStyle : starStyle;
    stars.push( 
        <i className="fa fa-star" style={style}></i>
    );
  }

  return (
    <div>
      {stars}
    </div>
  );
}

export default StarRating;
