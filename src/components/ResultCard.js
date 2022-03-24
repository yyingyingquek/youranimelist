import React, { useState } from "react";
import styled from "styled-components";
import ContentModal from "./ContentModal/ContentModal";
import { IoIosInformationCircle } from "react-icons/io";

const IndivResultsStyle = styled.div`
  width: 330px;
  border: 1px solid #9394a5;
  border-radius: 50px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  &:hover {
    color: #484b6a;
    background-color: lavender;
  }
`;

const StyledSynopsis = styled.p`
  text-align: justify;
`;

const TestModalDiv = styled.div`
  justify-content: space-around;
  margin: 0px 20px 00px 5px;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  &:link {
    color: #9394a5;
  }
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: black;
  }
  &:visited {
    color: #9394a5;
    text-decoration: none;
  }
`;

const StyledButtonDiv = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

const StyledInfoButton = styled(IoIosInformationCircle)`
  cursor: pointer;
  margin: 2px;
`;

const StyledButton = styled.button`
  cursor: pointer;
  margin: 2px;
  text-align: center;
  font-weight: 300;
  border: 0.1em solid #9394a5;
  color: #484b6a;
  transition: all 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`;

const imgHover = {
  cursor: "pointer",
};

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

  // state of Fav or not
  const [favAnime, setFavAnime] = useState(false);

  // passing in the entire object to save to local fav
  const animeObj = {
    name: props.name,
    japaneseName: props.japaneseName,
    imgSrc: props.imgSrc,
    synopsis: props.synopsis,
    status: props.status,
    malRanking: props.malRanking,
    yearReleased: props.yearReleased,
    url: props.url,
  };

  // add to fav fn
  const addFavAnime = () => {
    setFavAnime(true);

    const localFavAnime = localStorage.getItem("favAnime");

    if (!localFavAnime) {
      localStorage.setItem("favAnime", JSON.stringify([animeObj]));
      console.log([animeObj]);
    } else {
      const parseAnime = JSON.parse(localFavAnime);
      parseAnime.push(animeObj);
      localStorage.setItem("favAnime", JSON.stringify(parseAnime));
      // console.log(parseAnime);
    }
  };
  // console.log(favAnime);

  return (
    <>
      <IndivResultsStyle>
        <h4>
          {props.name}
          <br />
          {props.japaneseName}
        </h4>
        <img
          src={props.imgSrc}
          alt="anime"
          style={imgHover}
          onClick={openModal}
        ></img>
        <br />
        <StyledButtonDiv>
          <StyledInfoButton size={25} onClick={openModal} />
          {props.removeFromFav ? (
            <StyledButton onClick={() => props.removeFromFav()}>
              Remove
            </StyledButton>
          ) : (
            <StyledButton onClick={addFavAnime} disabled={favAnime}>
              Add Fav
            </StyledButton>
          )}
        </StyledButtonDiv>

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
    </>
  );
}

export default ResultCard;
