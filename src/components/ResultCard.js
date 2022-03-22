import React, { useState } from "react";
import styled from "styled-components";
import ContentModal from "./ContentModal/ContentModal";
import { FaRegStar } from "react-icons/fa";

const IndivResultsStyle = styled.div`
  width: 330px;
  border: 1px solid #9394a5;
  border-radius: 50px;
  padding: 10px;
  margin: 10px;
  text-align: center;
`;

const StyledSynopsis = styled.p`
  text-align: justify;
`;

const TestModalDiv = styled.div`
  justify-content: space-around;
  margin: 0px 20px 00px 15px;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  &:link {
    color: #484b6a;
  }
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: black;
  }
  &:visited {
    color: #484b6a;
    text-decoration: none;
  }
`;

const AddToFav = styled(FaRegStar)`
  cursor: pointer;
  position: relative;
  left: 10px;
  top: 2px;
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
      <AddToFav aria-label="Add to Favourites"></AddToFav>
      <ContentModal open={isOpen} onClose={closeModal}>
        <TestModalDiv>
          <p>
            {props.name} <br />
            {props.japaneseName}
          </p>
          <img src={props.imgSrc} alt="anime"></img>
          <p>
            Status: {props.status}
            <br />
            MyAnimeList Ranking: {props.malRanking}
            <br />
            Year Released: {props.yearReleased}
          </p>
          <StyledAnchor href={props.url} target="_blank">
            More Information
          </StyledAnchor>
        </TestModalDiv>
        <div>
          <StyledSynopsis>{props.synopsis}</StyledSynopsis>
        </div>
      </ContentModal>
    </IndivResultsStyle>
  );
}

export default ResultCard;
