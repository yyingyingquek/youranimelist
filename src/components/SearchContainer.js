import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import Results from "./Results";

// const SearchContainerStyle = styled.form`
//   justify-content: right;
//   alight-content: right;
//   display: inline;
// `;

const SearchContainer = () => {
  const [input, setInput] = useState("");
  const [searchAnime, setSearchAnime] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // searching for anime
  const fetchSearchAnime = async () => {
    const url = `https://api.jikan.moe/v4/anime?q=${input}`;

    const response = await fetch(url);
    const data = await response.json();
    const filteredSearch = data.data.map((searchShow) => {
      return {
        name: searchShow.title,
        japaneseName: searchShow.title_japanese,
        image: searchShow.images.webp.image_url,
        synopsis: searchShow.synopsis,
        showStatus: searchShow.status,
        rank: searchShow.rank,
        yearBroadcast: searchShow.year,
        url: searchShow.url,
      };
    });
    setSearchAnime(filteredSearch);
  };

  useEffect(() => {
    fetchSearchAnime();
    console.log(input);
    setHasSearched(true);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchSearchAnime();
    setInput("");
    console.log("hello test search");
  };

  // const searchAgain = () => {
  //   setHasSearched(false);
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          type="search"
          placeholder="Find an anime"
        ></input>
        <button type="submit">Search</button>
      </form>
      {hasSearched ? <Results anime={searchAnime} /> : ""}
    </>
  );
};

export default SearchContainer;
