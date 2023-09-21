import React, { Component } from "react";
import { Container, Button,ElementList,Lista } from "./styles";
import api from "../../../services/api";
import { Link } from 'react-router-dom';
import Form from "../../../components/Form";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicas: [],
    };
  }

  async componentDidMount() {

    try {
      const response = await api.get('/music');
      const musicOptions = response.data.map((music) => ({
        value: music.id,
        id: music.id,
        name: music.name,
        year: music.year,
        album: music.album,
        artist: music.artist,
      }));
      this.setState({musicas: musicOptions}); 
    } catch (error) {
      console.error('Erro ao buscar música', error);
    }
    
  }
  async deleteMusic(music) {
    try {
        await api.delete(`/music/${music.id}`);
        this.setState((prevState) => ({
            musicas: prevState.musicas.filter((m) => m.id !== music.id),
        }));
        alert('Música deletada com sucesso!');
    } catch (error) {
        console.error('Erro ao deletar música', error);
    }
  }

  render() {

    return (
      <Container>
        <Link to='/music'>
            <Button>
              Cadastrar
            </Button>
        </Link>
        <br/>
        <Form title='Lista de Músicas'></Form>
        <Lista>
          {this.state.musicas.map((music) => (
            <ElementList key={music.id}>
                <p>Nome: {music.name}</p>
                <p>Ano de Lançamento: {music.year}</p>
                <p>Álbum: {music.album.title}</p>
                <p>Artista: {music.artist}</p>
                <Button>Editar</Button>
                <Button onClick={() => this.deleteMusic(music)}>Excluir</Button>
            </ElementList>
          ))}
        </Lista>
      </Container>
    );
  }
}

export default Home;
