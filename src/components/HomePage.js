import React, { useState, useEffect } from "react";
import Results from "./Results";
import SearchContainer from "./SearchContainer";
import styled from "styled-components";

const TestContainer = styled.div`
  background-color: #f5f5f5;
`;

const StyleSearchContainer = styled.div`
  justify-content: right;
  alight-items: right;
  display: flex;
  padding: 10px;
`;

const HomePage = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState(false)

  const fetchTopAnime = async () => {
    const url = "https://api.jikan.moe/v4/top/anime";

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const filteredTopAnime = data.data.map((topAnime) => {
      return {
        name: topAnime.title,
        japaneseName: topAnime.title_japanese,
        image: topAnime.images.jpg.image_url,
        synopsis: topAnime.synopsis,
        showStatus: topAnime.status,
        rank: topAnime.rank,
        yearBroadcast: topAnime.year,
        url: topAnime.url,
      };
    });
    setTopAnime(filteredTopAnime.slice(0, 24));
  };
  console.log(topAnime);

  useEffect(() => {
    fetchTopAnime();
  }, []);

  return (
    <TestContainer>
      <StyleSearchContainer>
        <SearchContainer />
      </StyleSearchContainer>
      <h2>Top Anime</h2>
      <Results topAnime={topAnime} />
    </TestContainer>
  );
};

export default HomePage;
