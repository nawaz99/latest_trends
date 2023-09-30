import React, { useState } from "react";
import "../css/Suggestionbox.css";
import Suggestions from "./Suggestions";

const SuggestionBox = ({suggestions}) => {
  return (
    <div className="suggestion_box">
      <Suggestions suggestions={suggestions} />
    </div>
  );
};

export default SuggestionBox;
