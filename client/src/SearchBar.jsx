import React from "react";

const SearchBar = ({ updateSearch }) => (
  <form id="search">
    <label hidden>Search </label>
    <input
      type="text"
      placeholder="Search NPCs"
      id="searchValue"
      onChange={updateSearch}
    ></input>
  </form>
);

export default SearchBar;
