import React from "react";

import NavBarItem from "./NavBarItem";

function NavBar(props){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Minhas Músicas</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
             aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavBarItem href="/" label="Home"/>
                <NavBarItem href="/album" label="Cadastrar Álbum"/>
                <NavBarItem href="/music" label="Cadastrar Música"/>
                {/* <NavBarItem href="/" label="Deletar Música"/>
                <NavBarItem href="/" label="Atualizar Música"/> */}
            </div>
        </div>
        </nav>
    );
}
export default NavBar;
