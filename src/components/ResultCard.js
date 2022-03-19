import React from "react";
import styled from "styled-components";

const IndivResultsStyle = styled.div`
  width: 400px;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
`;

function ResultCard(props) {
  return (
    <IndivResultsStyle>
      <h3>{props.name}</h3>
      <h5>{props.japaneseName}</h5>
      <img src={props.imgSrc} alt="anime"></img>
      <p>{props.synopsis}</p>
      <p>Status: {props.status}</p>
      <p>MyAnimeList Ranking: {props.malRanking}</p>
      <p>Year Released: {props.yearReleased}</p>
      <p>
        <a href={props.url} target="_blank">
          More Information
        </a>
      </p>
    </IndivResultsStyle>
  );
}

export default ResultCard;
