import React, { useState } from "react";
import "../css/SearchComponent.css";
import Logo from "./Logo";
import SuggestionBox from "./SuggestionBox";
import SearchComponent from './SearchComponent';

const Search = () => {

    const [suggestion, setSuggestion] = useState(false);
    const handleSuggesion = () => {
      setSuggestion(true);
    };


  return (
    <div className="container">
      <Logo />
      <SearchComponent handleSuggesion={handleSuggesion} />
      {suggestion && <SuggestionBox />}
    </div>
  );
};

export default Search;
