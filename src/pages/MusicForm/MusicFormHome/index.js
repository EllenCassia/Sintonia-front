import React, { Component } from "react";
import { Container, Button, ElementList, Lista } from "../../AlbumForm/AlbumFormHome/styles";
import api from "../../../services/api";
import { Link } from 'react-router-dom';
import Form from "../../../components/Form";
import MusicFormUptade from "../../MusicForm/MusicFormUptade/index";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      musicas: [],
      musica: null, 
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
      this.setState({ musicas: musicOptions });
    } catch (error) {
      console.error('Erro ao buscar música', error);
    }
  }

  editarMusica = (music) => {
    this.setState({ musica: music }); 
  }

  cancelarEdicao = () => {
    this.setState({ musica: null }); 
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
            Cadastrar Música
          </Button>
        </Link>
        <br />
        <Form title='Lista de Músicas' />
        {this.state.musica ? ( 
          <MusicFormUptade
            music={this.state.musica}
            onCancel={this.cancelarEdicao} 
          />
        ) : (
          <Lista>
            {this.state.musicas.map((music) => (
              <ElementList key={music.id}>
                <p>Nome: {music.name}</p>
                <p>Ano de Lançamento: {music.year}</p>
                <p>Álbum: {music.album.title}</p>
                <p>Artista: {music.artist}</p>
                <Button onClick={() => this.editarMusica(music)}>Editar</Button>
                <Button onClick={() => this.deleteMusic(music)}>Excluir</Button>
              </ElementList>
            ))}
          </Lista>
        )}
      </Container>
    );
  }
}

export default Home;
