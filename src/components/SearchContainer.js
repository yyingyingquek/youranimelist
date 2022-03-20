import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";

const SearchContainerStyle = styled.form`
  justify-content: right;
  alight-content: right;
  display: inline;
`;

const SearchContainer = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchAnime, setSearchAnime] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchInput("");
  };

  const fetchSearchAnime = async () => {
    const url = `https://api.jikan.moe/v4/anime?q=${searchInput}`;

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
  }, []);

  return (
    <SearchContainerStyle>
      <SearchInput
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        type="text"
        placeholder="Find an anime"
      />
    </SearchContainerStyle>
  );
};

export default SearchContainer;
