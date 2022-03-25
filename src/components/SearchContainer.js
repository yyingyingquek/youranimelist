import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Results from "./Results";
import ThemeContext from "../context/context-theme";

const SearchContainerStyle = styled.form`
  justify-content: right;
  alight-content: right;
  display: inline;
  position: relative;
`;

const InputBoxStyle = styled.input`
  margin: 5px;
  padding: 5px;
  border-radius: 15px;
  width: 300px;
`;

const StyledButton = styled.button`
  cursor: pointer;
  margin: 2px;
  padding: 4px;
  text-align: center;
  font-weight: 300;
  border: 0.1em solid #9394a5;
  color: #484b6a;
  transition: all 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`;

const SearchContainer = () => {
  const { activeTheme } = useContext(ThemeContext);
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
    setSearchAnime(filteredSearch.slice(0, 24));
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
    <div style={activeTheme}>
      <div>
        <SearchContainerStyle onSubmit={handleSubmit}>
          <InputBoxStyle
            value={input}
            onChange={handleInputChange}
            type="search"
            placeholder="Find an anime"
          ></InputBoxStyle>
          <StyledButton type="submit">Search</StyledButton>
        </SearchContainerStyle>
      </div>
      {hasSearched ? <Results anime={searchAnime} /> : "Search for an anime!"}
    </div>
  );
};

export default SearchContainer;
