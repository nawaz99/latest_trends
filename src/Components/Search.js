import React, { useState } from "react";
import "../css/SearchComponent.css";
import Logo from "./Logo";
import SuggestionBox from "./SuggestionBox";
import SearchComponent from "./SearchComponent";

const Search = ({ suggestions }) => {
  const [suggestion, setSuggestion] = useState(false);
  const handleSuggesion = () => {
    setSuggestion(true);
  };

  return (
    <div className="container">
      <Logo />
      <SearchComponent handleSuggesion={handleSuggesion} />
      {suggestion && <SuggestionBox suggestions={suggestions}/>}
    </div>
  );
};

export default Search;
