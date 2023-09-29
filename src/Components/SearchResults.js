import React, { useState } from "react";


const SearchResults = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return <div>Search Results</div>;
};

export default SearchResults;
