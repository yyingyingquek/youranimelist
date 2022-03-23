import React, { useState, useContext } from "react";
import ResultCard from "../components/ResultCard";
// import Results from "../components/Results";
import ThemeContext from "../context/context-theme";
import styled from "styled-components";

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;
  max-width: 2000px;
`;

const Favourites = () => {
  const { activeTheme } = useContext(ThemeContext);

  // getting the array from local storage
  const localFav = JSON.parse(localStorage.getItem("favAnime"));
  //   console.log(localFav);
  // setting state
  const [localFavAnime, setLocalFavAnime] = useState(localFav);

  const removeFromFav = (anime) => {
    // console.log(localFavAnime.id);
    // const newList = localFavAnime.filter(
    //   (object, index) => object.id !== anime.id
    // );
    const newList = localFavAnime.splice(1);
    setLocalFavAnime(newList);
    localStorage.setItem("favAnime", JSON.stringify(newList));
    console.log(newList);
  };

  // mapping over array to displaying on screen
  const mapFavAnime = localFavAnime.map((anime, index) => {
    return (
      <ResultCard
        key={index}
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
  //   console.log(localFavAnime);

  //   console.log(localFav.length);

  return (
    <ResultsContainer style={activeTheme}>
      {localFav.length === 0 ? (
        <ResultsContainer style={activeTheme}>
          Add a favourite anime!
        </ResultsContainer>
      ) : (
        <ResultsContainer style={activeTheme}>{mapFavAnime}</ResultsContainer>
      )}
    </ResultsContainer>
  );
};

export default Favourites;
