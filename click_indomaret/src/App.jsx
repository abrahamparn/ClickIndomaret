import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MenuSearch from "./views/MenuSearch.jsx";
import StartingPage from "./views/StartingPage.jsx";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<StartingPage />}></Route>
          <Route path="/MenuSearch" element={<MenuSearch />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
