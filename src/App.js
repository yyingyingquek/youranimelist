import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ThemeContext from "./context/context-theme";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import CurrentSeason from "./pages/CurrentSeason";
import SearchContainer from "./components/SearchContainer";
import styled from "styled-components";

const theme = {
  light: {
    background: "#fafafa",
    color: "#484b6a",
  },
  dark: {
    background: "#484b6a",
    color: "#fafafa",
  },
};

const GlobalStyle = styled.div`
  margin: 0;
  padding: 0;
  font-family: Fira sans;
  text-align: center;
  justify-content: center;
`;

function App() {
  const [activeTheme, setActiveTheme] = useState(theme.light);

  const handleButtonClick = () => {
    // comparing the string values of the themes
    if (activeTheme.background === theme.light.background) {
      setActiveTheme(theme.dark);
    } else {
      setActiveTheme(theme.light);
    }
  };

  return (
    <GlobalStyle>
      <ThemeContext.Provider value={{ activeTheme }}>
        {/* <button onClick={handleButtonClick}>Toggle Themes</button> */}
        <NavBar handleButtonClick={handleButtonClick} />
        <main>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/current-season" element={<CurrentSeason />}></Route>
            <Route path="/search" element={<SearchContainer />}></Route>
          </Routes>
        </main>
      </ThemeContext.Provider>
    </GlobalStyle>
  );
}

export default App;
