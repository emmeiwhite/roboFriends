import React from "react";

const searchStyle = {
  padding: "0.5rem 1rem",
};

const SearchRobos = ({ handleChange }) => {
  return (
    <div>
      <input
        type="search"
        id="search"
        style={searchStyle}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchRobos;
