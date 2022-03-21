import React, { useState, useEffect } from "react";
import Results from "./Results";
import styled from "styled-components";

const TestContainer = styled.div`
  background-color: #f5f5f5;
`;

const HomePage = () => {
  // landing page is top anime - state
  const [topAnime, setTopAnime] = useState([]);

  // top anime (landing page items)
  const fetchTopAnime = async () => {
    const url = "https://api.jikan.moe/v4/top/anime";

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const filteredTopAnime = data.data.map((topAnime) => {
      return {
        name: topAnime.title,
        japaneseName: topAnime.title_japanese,
        image: topAnime.images.webp.image_url,
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
      <Results anime={topAnime} />
    </TestContainer>
  );
};

export default HomePage;
