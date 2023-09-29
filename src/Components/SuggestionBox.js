import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import "../css/Suggestionbox.css";
import Suggestions from "./Suggestions";

const SuggestionBox = () => {
  const suggest = generateFakeUsers(50);

  const [suggestions, Setsuggestions] = useState([...suggest]);
  return (
    <div className="suggestion_box">
      <Suggestions suggestions={suggestions} />
    </div>
  );
};

const generateFakeUsers = (count) => {
  const users = [];
  console.log(faker.internet);
  for (let i = 0; i < count; i++) {
    const fakeName = faker.internet.userName();
    const imageUrl = faker.internet.avatar();

    users.push({
      userId: imageUrl,
      username: fakeName,
      avatar: imageUrl,
    });
  }

  return users;
};
export default SuggestionBox;
