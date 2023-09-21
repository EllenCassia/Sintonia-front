import React from "react";
import 'bootswatch/dist/flatly/bootstrap.css';

function NavBarItem(props){
    return(
        <li className="nav-item">
        <a className="nav-link" href={props.href}>
            {props.label}
        </a>
        </li>
    );
}
export default NavBarItem;