import React, { useState } from "react";
import styled from "styled-components";
import ContentModal from "./ContentModal/ContentModal";

const IndivResultsStyle = styled.div`
  width: 300px;
  border: 1px solid #484b6a;
  border-radius: 50px;
  padding: 10px;
  margin: 10px;
  text-align: center;
`;

const StyledSynopsis = styled.p`
  text-align: justify;
`;

function ResultCard(props) {
  // open modal state
  const [isOpen, setIsOpen] = useState(false);

  // open modal function
  const openModal = () => {
    setIsOpen(true);
  };

  // close modal fn
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <IndivResultsStyle>
      <h3>{props.name}</h3>
      <h4>{props.japaneseName}</h4>
      <img src={props.imgSrc} alt="anime"></img>
      <br />
      <button onClick={openModal}>Information</button>
      <ContentModal open={isOpen} onClose={closeModal}>
        <div>
          <p>{props.name}</p>
          <p>{props.japaneseName}</p>
          <img src={props.imgSrc}></img>
          <p>Status: {props.status}</p>
          <p>MyAnimeList Ranking: {props.malRanking}</p>
          <p>Year Released: {props.yearReleased}</p>
          <a href={props.url} target="_blank">
            More Information
          </a>
        </div>
        <div>
          <StyledSynopsis>{props.synopsis}</StyledSynopsis>
        </div>
      </ContentModal>
    </IndivResultsStyle>
  );
}

export default ResultCard;
