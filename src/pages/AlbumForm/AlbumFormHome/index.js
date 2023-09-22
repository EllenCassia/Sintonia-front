import React, { useEffect, useState } from "react";
import { Container, Button, Lista, ElementList } from "../AlbumFormHome/styles";
import Form from "../../../components/Form";
import api from "../../../services/api";
import AlbumFormUpdate from "../AlbumFormUpdate/index";
import {Link} from "react-router-dom";

function AlbumFormHome() {
  const [albuns, setAlbuns] = useState([]);
  const [editAlbum, setEditAlbum] = useState(null);

  useEffect(() => {
    async function fetchAlbuns() {
      try {
        const response = await api.get("/album");
        const albumOptions = response.data.map((album) => ({
          value: album.id,
          id: album.id,
          name: album.title,
          year: album.year,
          gender: album.gender,
          artist: album.artist,
        }));
        setAlbuns(albumOptions);
      } catch (error) {
        console.error("Erro ao buscar álbuns", error);
      }
    }
    fetchAlbuns();
  }, []);

  async function deleteAlbum(album) {
    try {
      await api.delete(`/album/${album.id}`);
      setAlbuns((prevState) => prevState.filter((a) => a.id !== album.id));
      alert("Álbum deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar álbum", error);
    }
  }

  function editarAlbum(album) {
    setEditAlbum(album);
  }

  function cancelarEdicao() {
    setEditAlbum(null);
  }

  return (
    <Container>
      <Link to='/album'>
        <Button>Cadastrar Álbum</Button>
      </Link>
      <br/>
      <Form title="Lista de Álbuns" />
      {!editAlbum ? (
        <Lista>
          {albuns.map((album) => (
            <ElementList key={album.id}>
              <p>Nome: {album.name}</p>
              <p>Ano de Lançamento: {album.year}</p>
              <p>Gênero: {album.gender}</p>
              <p>Artista: {album.artist}</p>
              <Button onClick={() => editarAlbum(album)}>Editar</Button>
              <Button onClick={() => deleteAlbum(album)}>Excluir</Button>
            </ElementList>
          ))}
        </Lista>
      ) : <AlbumFormUpdate album={editAlbum} onCancel={cancelarEdicao}/>}
    </Container>
  );
}

export default AlbumFormHome;
