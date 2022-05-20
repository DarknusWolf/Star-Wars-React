import React from "react";
import ListaPersonajesContainer from "./ListaPersonajes-style";

const ListaPersonajes = ({children}) => {
    return(
        <ListaPersonajesContainer>
            {children}
        </ListaPersonajesContainer>
    );
}

export default ListaPersonajes;