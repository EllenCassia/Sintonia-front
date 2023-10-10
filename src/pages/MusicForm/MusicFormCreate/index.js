import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import { Container, Input, Button, ButtonText, Label} from '../../AlbumForm/AlbumFormCreate/styles.js';
import Form from '../../../components/Form';
import api from '../../../services/api';
import { Link } from 'react-router-dom';
import { validate } from '../../../components/Validate/validate.js';
import { showErrorMessage,showSucessMessage } from '../../../components/Toastr/Toastr';

export default function MusicForm() {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [artist, setArtist] = useState('');
  const [albums, setAlbums] = useState([]);

  useEffect(() => {

    async function fetchAlbums() {
      try {
        const response = await api.get('/album');
        const albumOptions = response.data.map((album) => ({
          value: album.id,
          label: album.title,
          year: album.year,
          gender: album.gender,
          artist: album.artist,
        }));
        setAlbums(albumOptions);
      } catch (error) {
        console.error('Erro ao buscar álbuns', error);
      }
    }
    fetchAlbums();
  }, []);

  const onMusicSubmit = async (musicData) => {
    const errors = validate(name, selectedAlbum, artist, year);
        
    if (errors.length > 0) {
      errors.forEach((message,index) => {
        showErrorMessage(message);
      });
      return false;
    }
    try {
      const response = await api.post('/music', musicData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      showSucessMessage('Música cadastrada com sucesso!');
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = () => {
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
    <Container>
      <Form title="Cadastrar Música" />
      <Label>Título:</Label>
      <Input
        placeholder="Nome da Música"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Label>Ano:</Label>
      <Input
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Ano de Lançamento"
      />
      <Label>Álbum:</Label>
      <Select
        options={albums}
        value={selectedAlbum}
        onChange={(selectedOption) => setSelectedAlbum(selectedOption)}
        placeholder="Selecione um álbum"
      />
      <Label>Artista</Label>
      <Input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Artista"
      />
    <Link to='/homemusic'>
      <Button onClick={handleSubmit}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
        <Button>
          Cancelar
        </Button>
      </Link>
    </Container>
  );
}
