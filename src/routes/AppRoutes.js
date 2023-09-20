import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/index";
import MusicFormCreate from "../pages/MusicFormCreate/index";
import AlbumFormCreate from "../pages/AlbumFormCreate/index";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<MusicFormCreate />} />
        <Route path="/album" element={<AlbumFormCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
