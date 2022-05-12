import React, { useContext } from "react";
import styled from "styled-components";
import ResultCard from "./ResultCard";
import ThemeContext from "../context/context-theme";

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;
  max-width: 2000px;
  padding: 10px;
  transition: all 0.5s ease;
`;

const Results = (props) => {
  console.log(props);
  const { activeTheme } = useContext(ThemeContext);

  const mapAnime = props.anime.map((anime, index) => {
    return (
      <ResultCard
        key={index}
        mal_id={anime.mal_id}
        name={anime.name}
        japaneseName={anime.japaneseName}
        imgSrc={anime.image}
        synopsis={anime.synopsis}
        status={anime.showStatus}
        malRanking={anime.rank}
        yearReleased={anime.yearBroadcast}
        url={anime.url}
        // removeFromFav={anime.removeFromFav}
      />
    );
  });

  return <ResultsContainer style={activeTheme}>{mapAnime}</ResultsContainer>;
};

export default Results;
