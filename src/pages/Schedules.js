import React, { useState, useEffect, useContext } from "react";
import Results from "../components/Results";
import ThemeContext from "../context/context-theme";
import styled from "styled-components";

const StyledDayContainer = styled.div`
  display: flex;
  padding: 5px;
  text-align: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const StyledIndiv = styled.div`
  margin: 5px 30px;
  &:hover {
    color: #484b6a;
    background-color: lavender;
  }
`;

function Schedules() {
  const { activeTheme } = useContext(ThemeContext);
  const [scheduleAnime, setScheduleAnime] = useState("");
  const [day, setDay] = useState("sunday");
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //   console.log(day);

  const fetchSchedule = async (url, signal) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, { signal });

      if (response.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await response.json();

      // console.log(data);
      const filteredSchedule = data.data.map((anime) => {
        return {
          name: anime.title,
          japaneseName: anime.title_japanese,
          image: anime.images.webp.image_url,
          synopsis: anime.synopsis,
          showStatus: anime.status,
          rank: anime.rank,
          yearBroadcast: anime.year,
          url: anime.url,
        };
      });
      setScheduleAnime(filteredSchedule.reverse());
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };
  //   console.log(scheduleAnime[0].rank);

  const onClickedDay = (event) => {
    // console.log(event.target.innerHTML);
    fetchSchedule();
    setHasClicked(true);
    setDay(event.target.innerHTML);
    // console.log(day);
  };

  useEffect(() => {
    const url = `https://api.jikan.moe/v4/schedules?filter=${day}`;
    // to stop the fetch
    const controller = new AbortController();

    fetchSchedule(url, controller.signal);

    return () => {
      console.log("cleanup");
      controller.abort();
      // console.log(scheduleAnime);
      // console.log(day);
    };
  }, [day]);

  return (
    <>
      <StyledDayContainer style={activeTheme}>
        <StyledIndiv onClick={onClickedDay}>Sunday</StyledIndiv>
        <StyledIndiv onClick={onClickedDay}>Monday</StyledIndiv>
        <StyledIndiv onClick={onClickedDay}>Tuesday</StyledIndiv>
        <StyledIndiv onClick={onClickedDay}>Wednesday</StyledIndiv>
        <StyledIndiv onClick={onClickedDay}>Thursday</StyledIndiv>
        <StyledIndiv onClick={onClickedDay}>Friday</StyledIndiv>
        <StyledIndiv onClick={onClickedDay}>Saturday</StyledIndiv>
      </StyledDayContainer>
      {hasClicked ? <Results anime={scheduleAnime} /> : ""}
      {/* <Results anime={scheduleAnime} /> */}
    </>
  );
}

export default Schedules;
