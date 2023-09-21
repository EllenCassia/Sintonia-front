import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/index";
import MusicFormHome from "../pages/MusicForm/MusicFormHome/index";
import AlbumFormHome from "../pages/AlbumForm/AlbumFormHome/index";
import MusicFormCreate from "../pages/MusicForm/MusicFormCreate/index";
import AlbumFormCreate from "../pages/AlbumForm/AlbumFormCreate/index";
import AlbumFormUpdate from "../pages/AlbumForm/AlbumFormUpdate/index";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homemusic" element={<MusicFormHome />}/>
        <Route path="/homealbum" element={<AlbumFormHome />} />
        <Route path="/music" element={<MusicFormCreate />} />
        <Route path="/album" element={<AlbumFormCreate />} />
        <Route path="/uptadealbum" element={<AlbumFormUpdate />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
