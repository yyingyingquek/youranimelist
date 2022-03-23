import React, { useState } from "react";
import styled from "styled-components";
import ContentModal from "./ContentModal/ContentModal";
// import { FaRegStar, FaStar } from "react-icons/fa";
// import Favourites from "../pages/Favourites";

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

// const BlankStar = styled(FaRegStar)`
//   cursor: pointer;
//   position: relative;
//   left: 10px;
//   top: 2px;
// `;

// const FilledStar = styled(FaStar)`
//   cursor: pointer;
//   position: relative;
//   left: 10px;
//   top: 2px;
// `;

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

  // const addFavAnime = (newAnime) => {
  //   const favList = [...favAnime, newAnime];
  //   setFavAnime(favList);
  // };
  // click on Star to Favourites (change star fn)
  // const addFavFn = () => {
  //   setStar(true);
  // };

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
      console.log(parseAnime);
    }
  };

  return (
    <>
      {/* <ResultsContainer> */}
      <IndivResultsStyle>
        <h3>{props.name}</h3>
        <h4>{props.japaneseName}</h4>
        <img src={props.imgSrc} alt="anime"></img>
        <br />
        <button onClick={openModal}>Information</button> <br />
        {props.removeFromFav ? (
          <button onClick={(anime) => props.removeFromFav(anime)}>
            Remove
          </button>
        ) : (
          <button onClick={addFavAnime} disabled={favAnime}>
            Add to Fav
          </button>
        )}
        {/* {star ? (
          <FilledStar
            aria-label="Add to Favourites"
            onClick={() => setStar(true)}
          />
        ) : (
          <BlankStar
            aria-label="Add to Favourites"
            onClick={() => setStar(false)}
          />
        )} */}
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
      {/* </ResultsContainer> */}
    </>
  );
}

export default ResultCard;
