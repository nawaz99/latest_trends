import React, { useState } from "react";
import ResultCard from "./ResultCard";
import StarRating from "./StarRating";

const Results = ({ results }) => {
  const [myresults, setResults] = useState(results);

  const handleCheckboxChange = (e) => {
    let name = e.target.name;
    if (e.target.checked == true) {
      if (name == "under_500") {
        setResults((res) => {
          return res.filter((p1) => p1.price < 500);
        });
      } else if (name == "1000_3000") {
        setResults((myres) => {
          return myres.filter((p2) => p2.price >= 1000 && p2.price <= 3000);
        });
      } else if (name == "r_5") {
        setResults((star5) => {
          return star5.filter((str5) => str5.star_number === 5);
        });
      } else if (name == "r_4") {
        setResults((star4) => {
          return star4.filter((str4) => str4.star_number == 4);
        });
      } else if (name == "r_3") {
        setResults((star3) => {
          return star3.filter((str3) => str3.star_number === 3);
        });
      } else if (name == "r_2") {
        setResults((star2) => {
          return star2.filter((str2) => str2.star_number === 2);
        });
      } else if (name == "r_1") {
        setResults((star1) => {
          return star1.filter((str1) => str1.star_number === 1);
        });
      } else {
        setResults(myresults);
      }
    } else {
      setResults(results);
    }
  };

  return (
    <div className="contains">
      <div className="left">
        <p className="search_results">Search Results</p>
        <div className="brand">
          <div className="dropdown">
            <div className="dropdown-toggle">
              <span className="brand_text">BRAND</span>
              <i
                className="fas fa-angle-down"
                style={{ position: "relative", left: "100px" }}
              ></i>
            </div>
            <div className="dropdown-content">
              <div>
                <label htmlFor="mango">
                  <input
                    type="checkbox"
                    id="mango"
                    name="mango"
                    value="mango"
                  />{" "}
                  Mango
                </label>
              </div>
              <div>
                <label htmlFor="h&m">
                  <input type="checkbox" id="h&m" name="h&m" value="h&m" /> H&M
                </label>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <div className="dropdown-toggle">
              <span className="brand_text">PRICE RANGE</span>
              <i
                className="fas fa-angle-down"
                style={{ position: "relative", left: "63px" }}
              ></i>
            </div>
            <div className="dropdown-content">
              <div>
                <label htmlFor="under_500">
                  <input
                    type="checkbox"
                    id="under_500"
                    name="under_500"
                    value="under_500"
                    onChange={handleCheckboxChange}
                  />{" "}
                  Under 500
                </label>
              </div>
              <div>
                <label htmlFor="1000_3000">
                  <input
                    type="checkbox"
                    id="1000_3000"
                    name="1000_3000"
                    value="1000_3000"
                    onChange={handleCheckboxChange}
                  />{" "}
                  1000 to 3000
                </label>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <div className="dropdown-toggle">
              <span className="brand_text">RATINGS</span>
              <i
                className="fas fa-angle-down"
                style={{ position: "relative", left: "95px" }}
              ></i>
            </div>
            <div className="dropdown-content">
              <div>
                <label htmlFor="r_5">
                  <input
                    type="checkbox"
                    id="r_5"
                    name="r_5"
                    value="r_5"
                    onChange={handleCheckboxChange}
                  />{" "}
                  <StarRating rating={5} />
                </label>
              </div>
              <div>
                <label htmlFor="r_4">
                  <input
                    type="checkbox"
                    id="r_4"
                    name="r_4"
                    value="r_4"
                    onChange={handleCheckboxChange}
                  />{" "}
                  <StarRating rating={4} />
                </label>
              </div>
              <div>
                <label htmlFor="r_3">
                  <input
                    type="checkbox"
                    id="r_3"
                    name="r_3"
                    value="r_3"
                    onChange={handleCheckboxChange}
                  />{" "}
                  <StarRating rating={3} />
                </label>
              </div>
              <div>
                <label htmlFor="r_2">
                  <input
                    type="checkbox"
                    id="r_2"
                    name="r_2"
                    value="r_2"
                    onChange={handleCheckboxChange}
                  />{" "}
                  <StarRating rating={2} />
                </label>
              </div>
              <div>
                <label htmlFor="r_1">
                  <input
                    type="checkbox"
                    id="r_1"
                    name="r_1"
                    value="r_1"
                    onChange={handleCheckboxChange}
                  />{" "}
                  <StarRating rating={1} />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="results right">
        {myresults
          .slice(0, 20)
          .map(
            ({ userId, username, avatar, randomNum, price, star_number }) => {
              return (
                <li key={userId} className="column">
                  <ResultCard
                    avatar={avatar}
                    username={username}
                    price={price}
                    randomNum={randomNum}
                    star_number={star_number}
                  />
                </li>
              );
            }
          )}
      </div>
    </div>
  );
};

export default Results;
