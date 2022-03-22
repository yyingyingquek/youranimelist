import React, { useState, useEffect, useContext } from "react";
import Results from "./Results";
import ThemeContext from "../context/context-theme";

const HomePage = () => {
  const { activeTheme } = useContext(ThemeContext);
  // landing page is top anime - state
  const [topAnime, setTopAnime] = useState([]);

  // top anime (landing page items)
  const fetchTopAnime = async () => {
    const url = "https://api.jikan.moe/v4/top/anime";

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
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
    <div style={activeTheme}>
      <Results anime={topAnime} />
    </div>
  );
};

export default HomePage;
