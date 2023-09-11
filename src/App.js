import React, { useState, useEffect } from 'react';
import AlbumForm from './AlbumForm';
import MusicForm from './MusicForm';

function App() {
  const [showAlbumForm, setShowAlbumForm] = useState(false);
  const [showMusicForm, setShowMusicForm] = useState(false);

  const handleShowAlbumForm = () => {
    setShowAlbumForm(true);
    setShowMusicForm(false);
  };

  const handleShowMusicForm = () => {
    setShowMusicForm(true);
    setShowAlbumForm(false);
  };

  return (
    <div className="App">
      <h1>Sintonia</h1>
      <button onClick={handleShowAlbumForm}>Cadastrar Álbum</button>
      <button onClick={handleShowMusicForm}>Cadastrar Música</button>

      {showAlbumForm && <AlbumForm />}
      {showMusicForm && <MusicForm />}
    </div>
  );
}

export default App;
