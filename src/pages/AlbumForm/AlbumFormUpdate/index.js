import React, { useState, useEffect } from "react";
import { Container, Button, Input, Label } from "../AlbumFormCreate/styles.js";
import Form from "../../../components/Form";
import Select from 'react-select';
import { Link } from "react-router-dom";

export default function AlbumFormHome(props) {
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
        if (props.album) {
          setTitulo(props.album.title || ''); 
          setAno(props.album.year || ''); 
          setSelectedGender(props.album.gender || null);
          setArtista(props.album.artist || '');
        }
      }, [props.album]);
    
    const handleSubmit = () => {
        
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
            <Button onClick={handleSubmit}>
                Cadastrar
            </Button>
            <Link to='/homealbum'>
            <Button>
                Cancelar
            </Button>
            </Link>
        </Container>    
    );
}
