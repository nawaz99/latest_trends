import React from "react";
import Card from "./Card";

const Suggestions = ({ suggestions}) => {

  
  return (
    <>
      <h3 style={{marginLeft:"1.7rem"}}>Latest Trends</h3>
      <div className="suggestions">
        {suggestions.slice(0, 5).map(({ userId, username, avatar }) => {
          return (
            <li key={userId}>
              <Card avatar={avatar} />
              <p style={{padding:".8rem"}}><a href="#">{username}</a></p>
            </li>
          );
        })}
      </div>
      <div className="popular_suggestions">
        <h3>Popular Suggestions</h3>
        <ul>
          {suggestions.slice(5, 10).map(({ userId, username }) => {
            return <li key={userId}><a href="#">{username}</a></li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Suggestions;
