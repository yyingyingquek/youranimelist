import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import CurrentSeason from "./pages/CurrentSeason";
import SearchContainer from "./components/SearchContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/current-season" element={<CurrentSeason />}></Route>
          <Route path="/search" element={<SearchContainer />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
