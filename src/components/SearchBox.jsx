import React from "react";

const SearchBox = ({ search }) => {
  return (
    <form className="form" onSubmit={search}>
      <label>
        <input
          type="text"
          className="form__search-input"
          name="queryInput"
          placeholder="City, (optional) country abbreviation"
          autoComplete="off"
        ></input>
      </label>
      <button className="form__search-btn">
        <span className="material-icons">search</span>
      </button>
    </form>
  );
};

export default SearchBox;
