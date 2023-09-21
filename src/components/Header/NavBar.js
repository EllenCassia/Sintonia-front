import React from "react";

import NavBarItem from "./NavBarItem";
import 'bootswatch/dist/flatly/bootstrap.css';

function NavBar(props){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Sintonia</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
             aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavBarItem href="/" label="Página Inicial"/>
                <NavBarItem href="/homealbum" label="Álbuns"/>
                <NavBarItem href="/homemusic" label="Músicas"/>
            </div>
        </div>
        </nav>
    );
}
export default NavBar;
