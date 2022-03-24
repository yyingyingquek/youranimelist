import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import ThemeContext from "../../context/context-theme";
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const ToggleButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  &:focus {
    outline: none;
  }
  transition: all 5s ease;
`;

// const H1Title = styled.h1``;

const NavBar = (props) => {
  const { activeTheme } = useContext(ThemeContext);

  let icon = {};
  if (activeTheme.background === "#fafafa") {
    icon = <HiMoon size={20} />;
  } else {
    icon = <CgSun size={20} />;
  }

  return (
    <header className={styles.navbar} style={activeTheme}>
      <ToggleButton onClick={props.handleButtonClick}>{icon}</ToggleButton>
      <nav>
        <h1>
          Welcome to{" "}
          <u>
            <i>YourAnimeList</i>
          </u>
        </h1>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/current-season"
            >
              Current Season
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/schedule"
            >
              Schedule
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/favourites"
            >
              Favourites
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/search"
            >
              Search
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
