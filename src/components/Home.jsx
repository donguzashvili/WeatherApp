import React, { useState } from "react";
import "./Style/Home.css";
import Search from "./HomeComponents/search";
import Results from "./HomeComponents/Results";
import News from "./HomeComponents/News";
import Features from "./HomeComponents/Features";

function Home() {
  const [city, setCity] = useState("tbilisi");

  function handleChange(newValue) {
    setCity(newValue);
  }
  return (
    <div className="Home">
      <div className="searchContainer">
        <Search onSubmit={handleChange} />
      </div>
      <div>
        <Results city={city} />
        <News />
        <Features />
      </div>
    </div>
  );
}
Home.defaultProps = {
  city: "tbilisi",
};
export default Home;
