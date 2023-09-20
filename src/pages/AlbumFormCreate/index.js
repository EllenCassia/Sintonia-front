import React, { useState } from 'react';
import Select from 'react-select';

import { Container, Input, Button, ButtonText, Label } from './styles';
import api from '../../services/api';
import Form from '../../components/Form';

export default function AlbumForm() {
  
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
    { value: 'GOSPEL', label: 'Gospel' },
    { value: 'CLASSICA', label: 'Clássica' },
    { value: 'BLUES', label: 'Blues' },
    { value: 'FUNK', label: 'Funk' },
    { value: 'COUNTRY', label: 'Country' },
    { value: 'SERTANEJO', label: 'Sertanejo' },
  ];

  const onAlbumSubmit = async (albumData) => {
    try {
        const response = await api.post('/album', albumData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response);
        alert('Album cadastrado com sucesso!');
    } catch (err) {
        console.error(err);
    }
    
  }

  async function handleSubmit() {
    const albumData = {
      title,
      gender: selectedGender ? selectedGender.value : null,
      year,
      artist,
    };
    console.log(albumData);
    onAlbumSubmit(albumData);
    setTitle('');
    setSelectedGender(null);
    setYear('');
    setArtist('');
  }

  return (
    <Container>
      <Form title="Cadastrar Álbum" />
      <Label>Título</Label>
      <Input
        type="text"
        placeholder="Nome do Album"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Label>Gênero</Label>
      <Select
        options={genderOptions}
        placeholder="Selecione um gênero"
        value={selectedGender}
        onChange={(selectedOption) => setSelectedGender(selectedOption)}
      />
      <Label>Ano de Lançamento</Label>
      <Input
        type="text" 
        placeholder="Data de Lançamento"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <Label>Artista</Label>
      <Input
        type="text"
        placeholder="Artista"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <Button onClick={handleSubmit}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
      <Button onClick={()=>{
        window.location.href = "/";
      }}>
        <ButtonText>Cancelar</ButtonText>
      </Button>
    </Container>
  );
}
