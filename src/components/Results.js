import React from "react";
import styled from "styled-components";
import ResultCard from "./ResultCard";

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;
  max-width: 2000px;
  padding: 10px;
  margin: 10px;
`;

const Results = (props) => {
  const mapAnime = props.anime.map((anime, index) => {
    return (
      <ResultCard
        key={index}
        name={anime.name}
        japaneseName={anime.japaneseName}
        imgSrc={anime.image}
        synopsis={anime.synopsis}
        status={anime.showStatus}
        malRanking={anime.rank}
        yearReleased={anime.yearBroadcast}
        url={anime.url}
      />
    );
  });

  return (
    <>
      <ResultsContainer>{mapAnime}</ResultsContainer>
    </>
  );
};

export default Results;
