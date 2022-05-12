import React, { useState, useContext } from "react";
import ResultCard from "../components/ResultCard";
import ThemeContext from "../context/context-theme";
import styled from "styled-components";

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;
  max-width: 2000px;
  transition: all 0.5s ease;
`;

const Favourites = () => {
  const { activeTheme } = useContext(ThemeContext);

  // getting the array from local storage
  const localFav = JSON.parse(localStorage.getItem("favAnime"));
  console.log(localFav);
  // setting state
  const [localFavAnime, setLocalFavAnime] = useState(localFav);

  const removeFromFav = (id) => {
    console.log(id.mal_id);
    const newList = localFav.filter((element) => element.mal_id !== id.mal_id);
    console.log(newList);
    // const newList = localFavAnime.splice(1);
    setLocalFavAnime(newList);
    localStorage.setItem("favAnime", JSON.stringify(newList));
    // console.log(newList);
  };

  // mapping over array to displaying on screen
  const mapFavAnime = localFav.map((anime, index) => {
    return (
      <ResultCard
        key={index}
        mal_id={anime.mal_id}
        name={anime.name}
        japaneseName={anime.japaneseName}
        imgSrc={anime.imgSrc}
        synopsis={anime.synopsis}
        status={anime.status}
        malRanking={anime.malRanking}
        yearReleased={anime.yearReleased}
        url={anime.url}
        removeFromFav={removeFromFav}
      />
    );
  });

  return (
    <ResultsContainer style={activeTheme}>
      {localFav.length === 0 ? "Add a favourite anime!" : mapFavAnime}
    </ResultsContainer>
  );
};

export default Favourites;
