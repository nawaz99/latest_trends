import React from "react";
import ResultCard from "./ResultCard";

const Results = ({ results }) => {
  
  return (
    <div className="contains">
      <div className="left">
        <h1 style={{width:"281px",height:"48px"}}>Search Results</h1>
        <div className="brand" style={{width:"159px",height:"24px", border:"1px solid"}}>
          Brand
        </div>
      </div>

      <div className="results right">
        {results.slice(0, 20).map(({ userId, username, avatar, randomNum,price , star_number}) => {
          return (
            <li key={userId} className="column">
              <ResultCard avatar={avatar}  username={username} price={price} randomNum={randomNum} star_number={star_number}/>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
