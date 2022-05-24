import React, { useEffect, useState } from "react";
import TarjetaPersonajesContainer from "./TarjetaPersonajes-style";
import {usePersonajes} from '../../services/swapi/sw-services';

const TarjetaPersonaje = ({nombre, imgPersonaje, homeworld}) => {
    const servicioPersonajes = usePersonajes();
    
    const [planetaPersonaje, setPlanetaPersonaje] = useState({});

    const getPlanetaPersonaje = async (url) => {
        const planeta = await servicioPersonajes.getPlaneta(url);
        const planetainfo = await planeta.data;
        setPlanetaPersonaje(planetainfo);
    }

    useEffect(() => {
        getPlanetaPersonaje(homeworld);
    },[])
    return(
        <TarjetaPersonajesContainer>
            <div className="personaje">
                <img src={imgPersonaje} alt=""/>
            </div>
            <div className="planetas">
                {
                    /* incluir imagenes locales dinamicas */
                    planetaPersonaje.name && <img src={`/planetas/${planetaPersonaje.name}.png`} alt=""/> 
                }
            </div>
            <h2 className="nombre">{nombre}</h2>
        </TarjetaPersonajesContainer>
    );
}

export default TarjetaPersonaje;