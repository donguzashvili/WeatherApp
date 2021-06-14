import React from "react";
import "./Search.css";

function Search(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(document.getElementById("input").value);
  }
  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input id="input" type="text" placeholder="Search for city" />
      <button>Find</button>
    </form>
  );
}
export default Search;
