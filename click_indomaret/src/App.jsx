import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MenuSearch from "./views/MenuSearch.jsx";
import StartingPage from "./views/StartingPage.jsx";
import CheckPesanan from "./views/CheckPesanan.jsx";
import PilihPembayaran from "./views/PilihPembayaran.jsx";
import ScanBarcode from "./views/ScanBarcode.jsx";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<StartingPage />}></Route>
          <Route path="/MenuSearch" element={<MenuSearch />}></Route>
          <Route path="/CheckPesanan" element={<CheckPesanan />}></Route>
          <Route path="/PilihPembayaran" element={<PilihPembayaran />}></Route>
          <Route path="/ScanBarcode" element={<ScanBarcode />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
