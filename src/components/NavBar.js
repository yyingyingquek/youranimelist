import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import ThemeContext from "../context/context-theme";

const NavBar = (props) => {
  const { activeTheme } = useContext(ThemeContext);

  return (
    <header className={styles.navbar} style={activeTheme}>
      <button onClick={props.handleButtonClick}>Toggle Themes</button>
      <nav>
        <h1>
          Welcome to{" "}
          <u>
            <strong>
              <i>YourAnimeList</i>
            </strong>
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
