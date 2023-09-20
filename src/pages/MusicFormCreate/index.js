import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import { Container, Input, Button, ButtonText, Label} from '../AlbumFormCreate/styles';
import Form from '../../components/Form';
import api from '../../services/api';

export default function MusicForm() {
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

  const onMusicSubmit = async (musicData) => {
    try {
      const response = await api.post('/music', musicData, {
          headers: {
              'Content-Type': 'application/json',
          }
      });
      console.log(response);
      alert('Música cadastrado com sucesso!');
  } catch (err) {
      console.error(err);
  }
  };

  async function handleSubmit() {
    
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
  }


  return (
    <Container>
      <Form title="Cadastrar Música"/>
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
        placeholder='Artista'
      />
      <Button onClick={handleSubmit}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
      <Button onClick={()=> {
        window.location.href = '/';
      }}>
        <ButtonText>Cancelar</ButtonText>
      </Button>
    </Container>
  );
}
