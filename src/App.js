import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import "./css/Home.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./Components/Search";
import SearchResults from "./Components/SearchResults";

function App() {
  const suggest = generateFakeUsers(50);

  const [suggestions, Setsuggestions] = useState([...suggest]);
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Search suggestions={suggestions} />} />
        <Route
          path="/search-results"
          element={<SearchResults results={suggestions} />}
        />
      </Routes>
    </Router>
  );
}

const generateFakeUsers = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    const fakeName = faker.internet.userName();
    const imageUrl = faker.internet.avatar();
    const randomNumber = Math.floor(Math.random() * (3000 - 100 + 1)) + 100;
    const randomNum = Math.floor(Math.random() * (300 + 1));
    const randomstar = Math.floor(Math.random() * (5  + 1));
    users.push({
      userId: imageUrl,
      username: fakeName,
      avatar: imageUrl,
      stars:[1,2,3,4,5],
      price:randomNumber,
      star_number:randomstar,
      randomNum:randomNum,
    });
  }

  return users;
};
export default App;
