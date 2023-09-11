import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const MusicForm = ({ onMusicSubmit }) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [artist, setArtist] = useState('');
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/album')
      .then((response) => response.json())
      .then((data) => {
        const albumOptions = data.map((album) => ({
          value: album.id,
          label: album.title,
          year: album.year, 
          gender: album.gender, 
          artist: album.artist, 
        }));
        setAlbums(albumOptions);
      })
      .catch((error) => console.error('Erro ao buscar álbuns', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const albumData = {
      id: selectedAlbum ? selectedAlbum.value : null,
      title: selectedAlbum ? selectedAlbum.label : null,
      year: selectedAlbum ? selectedAlbum.year : null,
      gender: selectedAlbum ? selectedAlbum.gender : null,
      artist: selectedAlbum ? selectedAlbum.artist : null,
    };

    const musicData = {
      name,
      year,
      album: albumData,
      artist,
    };

    onMusicSubmit(musicData);
    setName('');
    setYear('');
    setSelectedAlbum(null);
    setArtist('');
  };

  return (
    <div>
      <h2>Cadastrar Música</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ano:</label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Álbum:</label>
          <Select
            options={albums}
            value={selectedAlbum}
            onChange={(selectedOption) => setSelectedAlbum(selectedOption)}
            placeholder="Selecione um álbum"
          />
        </div>
        <div>
          <label>Artista:</label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

const MusicFormContainer = () => {
  const onMusicSubmit = async (musicData) => {
    try {
      const response = await fetch('http://localhost:8080/api/music', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(musicData),
      });

      if (response.ok) {
        console.log('Música cadastrada com sucesso');
      } else {
        console.error('Erro ao cadastrar música');
      }
    } catch (error) {
      console.error('Erro inesperado', error);
    }
  };

  return <MusicForm onMusicSubmit={onMusicSubmit} />;
};

export default MusicFormContainer;
