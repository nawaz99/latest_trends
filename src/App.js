import React, { useState } from "react";
import  "./css/Home.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./Components/Search";
import SearchResults from "./Components/SearchResults";

function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Search />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
