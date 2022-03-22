import React, { useState, useEffect, useContext } from "react";
import Results from "../components/Results";
import ThemeContext from "../context/context-theme";

const CurrentSeason = () => {
  const { activeTheme } = useContext(ThemeContext);
  const [currentSeason, setCurrentSeason] = useState([]);

  // current season
  const fetchCurrentSeason = async () => {
    const url = "https://api.jikan.moe/v4/seasons/now";

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const filteredCurrentSeasonAnime = data.data.map((searchAnime) => {
      return {
        name: searchAnime.title,
        japaneseName: searchAnime.title_japanese,
        image: searchAnime.images.webp.image_url,
        synopsis: searchAnime.synopsis,
        showStatus: searchAnime.status,
        rank: searchAnime.rank,
        yearBroadcast: searchAnime.year,
        url: searchAnime.url,
      };
    });
    setCurrentSeason(filteredCurrentSeasonAnime.slice(0, 24));
  };
  console.log(currentSeason);

  useEffect(() => {
    fetchCurrentSeason();
  }, []);

  return (
    <div style={activeTheme}>
      <Results anime={currentSeason} />
    </div>
  );
};

export default CurrentSeason;
