import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import { Container, Input, Button, ButtonText, Label} from '../../AlbumForm/AlbumFormCreate/styles.js';
import Form from '../../../components/Form';
import api from '../../../services/api';
import { validate } from '../../../components/Validate/validate.js';
import { showErrorMessage,showSucessMessage } from '../../../components/Toastr/Toastr';

export default function MusicForm({music, onCancel}) {
  const [nome, setNome] = useState('');
  const [ano, setAno] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [artista, setArtista] = useState('');
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

  useEffect(() => { 
    if (music) {
      setNome(music.name || '');
      setAno(music.year || '');
      setArtista(music.artist || '');

      if (music.album) {

        const albumData = {
          value: music.album.id,
          label: music.album.title,
          year: music.album.year,
          gender: music.album.gender,
          artist: music.album.artist,
        };
        setSelectedAlbum(albumData);
      }
    }
  }, [music]);

  const handleSubmit = () => {

    const albumData = {
        id: selectedAlbum ? selectedAlbum.value : null,
        title: selectedAlbum ? selectedAlbum.label : null,
        year: selectedAlbum ? selectedAlbum.year : null,
        gender: selectedAlbum ? selectedAlbum.gender : null,
        artist: selectedAlbum ? selectedAlbum.artist : null,
    };

    const musicData = {
        name: nome,       
        year: ano,       
        album: albumData,
        artist: artista,
    };
    const errors = validate(nome, selectedAlbum, artista, ano);
        
    if (errors.length > 0) {
      errors.forEach((message,index) => {
        showErrorMessage(message);
      });
      return false;
    }

    api.put(`/music/${music.id}`, musicData, 
        { 
           headers: { 'Content-Type': 'application/json' } 
        }).then((response) => {
            showSucessMessage('Música atualizada com sucesso!');
            onCancel();
            window.location.reload();
           }
        ).catch((error) => {
           console.error('Erro ao atualizar música', error);
        }
    );
  };

  return (
    <Container>
      <Form title="Editar Música" />
      <Label>Título:</Label>
      <Input
        placeholder="Nome da Música"
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Label>Ano:</Label>
      <Input
        type="text"
        value={ano}
        onChange={(e) => setAno(e.target.value)}
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
        value={artista}
        onChange={(e) => setArtista(e.target.value)}
        placeholder="Artista"
      />
      <Button onClick={handleSubmit}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
      <Button onClick={onCancel}>Cancelar</Button>
    </Container>
  );
}
