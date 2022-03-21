import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <h1>Welcome to YourAnimeList</h1>
        <ul>
          <li>
            <NavLink
              activeclassname={(navData) =>
                navData.isActive ? styles.active : ""
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeclassname={(navData) =>
                navData.isActive ? styles.active : ""
              }
              to="/current-season"
            >
              Current Season
            </NavLink>
          </li>
          <li>
            <NavLink
              activeclassname={(navData) =>
                navData.isActive ? styles.active : ""
              }
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
