import React, { useEffect, useState } from "react";
import TarjetaPersonajesContainer from "./TarjetaPersonajes-style";
import {usePersonajes} from '../../services/swapi/sw-services';
import datosExtra from '../../assets/extra/extra82.json';

const TarjetaPersonaje = ({nombre, homeworld}) => {
    const servicioPersonajes = usePersonajes();
    
    const [planetaPersonaje, setPlanetaPersonaje] = useState({});
    const [personaje, setPersonaje] = useState({});

    const getPlanetaPersonaje = async (url) => {
        const planeta = await servicioPersonajes.getPlaneta(url);
        const planetainfo = await planeta.data;
        setPlanetaPersonaje(planetainfo);
    }

    const getPersonaje = async (nom) => {
        for(let i = 0; i < datosExtra.length; i++){
            if(datosExtra[i].name == nom){
                setPersonaje(datosExtra[i]);
            }
        }
    }

    useEffect(() => {
        getPersonaje(nombre);
        getPlanetaPersonaje(homeworld);
    },[])
    return(
        <TarjetaPersonajesContainer>
            <div className="personaje">
                <img src={personaje.image} alt=""/>
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