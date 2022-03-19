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
  const mapTopAnime = props.topAnime.map((topAnime, index) => {
    return (
      <ResultCard
        key={index}
        name={topAnime.name}
        japaneseName={topAnime.nameJapanese}
        imgSrc={topAnime.image}
        synopsis={topAnime.synopsis}
        status={topAnime.showStatus}
        malRanking={topAnime.rank}
        yearReleased={topAnime.yearBroadcast}
        url={topAnime.url}
      />
    );
  });

  return (
    <>
      <ResultsContainer>{mapTopAnime}</ResultsContainer>
    </>
  );
};

export default Results;
