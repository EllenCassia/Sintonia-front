import React, { useState, useEffect } from "react";
import { Container, Button, Input, Label } from "../AlbumFormCreate/styles.js";
import Form from "../../../components/Form";
import Select from 'react-select';
import { Link } from "react-router-dom";
import api from "../../../services/api";

export default function AlbumFormHome({album, onCancel}) {
    const [titulo, setTitulo] = useState(''); 
    const [ano, setAno] = useState(''); 
    const [selectedGender, setSelectedGender] = useState(null);
    const [artista, setArtista] = useState(''); 

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

    useEffect(() => {
        if (album) {
          setTitulo(album.name || ''); 
          setAno(album.year || ''); 
          setSelectedGender({ value: album.gender, label: album.gender });
          setArtista(album.artist || '');
        }
      }, [album]);
    
    const handleSubmit = () => {
        const albumData = {
            title: titulo,
            year: ano,
            gender: selectedGender ? selectedGender.value : null,
            artist: artista,
        };
        api.put(`/album/${album.id}`, albumData, 
          { 
            headers: {'Content-Type': 'application/json' } 
          }
        ).then((response) => {
            alert('Álbum atualizado com sucesso!');
            onCancel();
            window.location.reload();
        }).catch((err) => {
            console.error(err);
        });
    };

    return ( 
        <Container>
            <Form title='Editar Álbum'></Form>
            <Label>Título</Label>
            <Input
                type="text"
                placeholder="Nome do Álbum"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
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
                placeholder="Ano de Lançamento"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
            />
            <Label>Artista</Label>
            <Input
                type="text"
                placeholder="Artista"
                value={artista}
                onChange={(e) => setArtista(e.target.value)}
            />
            <Link to='/homealbum'>
            <Button onClick={handleSubmit}>
                Cadastrar
            </Button>
            <Button onClick={onCancel}>
                Cancelar
            </Button>
            </Link>
        </Container>    
    );
}
