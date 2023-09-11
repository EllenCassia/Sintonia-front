import React, { useState } from 'react';
import Select from 'react-select';

const AlbumForm = ({ onAlbumSubmit }) => {
  const [title, setTitle] = useState('');
  const [selectedGender, setSelectedGender] = useState(null); 
  const [year, setYear] = useState('');
  const [artist, setArtist] = useState('');

  const genderOptions = [
    { value: 'ROCK', label: 'Rock' },
    { value: 'POP', label: 'Pop' },
    { value: 'SAMBA', label: 'Hip Hop' },
    { value: 'JAZZ', label: 'Jazz' },
    { value: 'ELETRONICA', label: 'Eletronica' },
    { value: 'GOSPEL', label: 'Gospel'},
    { value: 'CLASSICA', label: 'Clássica' },
    { value: 'BLUES', label: 'Blues' },
    { value: 'FUNK', label: 'Funk' },
    { value: 'COUNTRY', label: 'Country' },
    { value: 'SERTANEJO', label: 'Sertanejo' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const albumData = {
      title,
      gender: selectedGender ? selectedGender.value : null, 
      year,
      artist,
    };
    onAlbumSubmit(albumData);
    setTitle('');
    setSelectedGender(null);
    setYear('');
    setArtist('');
  };

  return (
    <div>
      <h2>Cadastrar Álbum</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Gênero:</label>
          <Select
            options={genderOptions}
            value={selectedGender}
            onChange={(selectedOption) => setSelectedGender(selectedOption)}
            placeholder="Selecione um gênero"
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

const AlbumFormContainer = () => {
  const onAlbumSubmit = async (albumData) => {
    try {
      const response = await fetch('http://localhost:8080/api/album', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(albumData),
      });

      if (response.ok) {
        console.log('Álbum cadastrado com sucesso');
      } else {
        console.error('Erro ao cadastrar álbum');
      }
    } catch (error) {
      console.error('Erro inesperado', error);
    }
  };

  return <AlbumForm onAlbumSubmit={onAlbumSubmit} />;
};

export default AlbumFormContainer;
