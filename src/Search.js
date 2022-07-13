import React from "react";
import "./search.css";

export default function Search() {
  return (
    <div className="row">
      <div className="col-12 search-city-input">
        <form id="search-form">
          <input
            type="search"
            placeholder="Find your city"
            className="search_input"
            id="search-input"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
