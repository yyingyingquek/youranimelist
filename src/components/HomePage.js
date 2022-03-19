import React, { useState, useEffect } from "react";
import Results from "./Results";
import styled from "styled-components";

const TestContainer = styled.div`
  background-color: #f5f5f5;
`;

const HomePage = () => {
  const [topAnime, setTopAnime] = useState([]);

  const fetchTopAnime = async () => {
    const url = "https://api.jikan.moe/v4/top/anime";

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const filteredTopAnime = data.data.map((topAnime) => {
      return {
        name: topAnime.title,
        nameJapanese: topAnime.title_japanese,
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
      <h2>Top Anime</h2>
      <Results topAnime={topAnime} />
    </TestContainer>
  );
};

export default HomePage;
