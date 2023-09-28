import React from "react";
import SearchComponent from "./SearchComponent";
import "../css/Home.css";
import Logo from "./Logo";

const Home = () => {
  return (
    <div className="container">
      <Logo />
      <SearchComponent />
    </div>
  );
};

export default Home;
