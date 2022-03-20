import React from "react";

function SearchInput(props) {
  return (
    <>
      <input
        onChange={props.handleInputChange}
        type={props.type}
        placeholder={props.placeholder}
      ></input>
      <button type="submit" onSubmit={props.handleSubmit}>
        Search
      </button>
    </>
  );
}

export default SearchInput;
