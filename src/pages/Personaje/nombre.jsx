import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {usePersonajes} from '../../services/swapi/sw-services';
import datosExtra from '../../assets/extra/extra82.json';
import './style.css';

import Header from '../../containers/Header/Header';

const DetallesPersonaje = () => {
    const params = useParams();
    const servicioPersonajes = usePersonajes();
    const [elPersonaje, setElPersonaje] = useState({});
    const [personajeDatoExtra, setPersonajeDatoExtra] = useState({});
    const [error, setError] = useState("");

    const getListPersonajes = async (nombre) => {
        const personajes = await servicioPersonajes.getPersonajes();
        const {results} = await personajes.data;
        for(let i = 0; i < results.length; i++){
            if(results[i].name === nombre){
                getInfoPersona(results[i].url);
            }
        }
    }

    const getPersonaje = async (nom) => {
        for(let i = 0; i < datosExtra.length; i++){
            if(datosExtra[i].name === nom){
                setPersonajeDatoExtra(datosExtra[i]);
            }
        }
    }
    
    const getInfoPersona = async (url) => {
        try{
            const personaRequest = await servicioPersonajes.getPersonaje(url);
            const person = await personaRequest.data;
            setElPersonaje(person);
        }catch(error){
            setError("Oh, un error al parecer habido ha. Mmmm...");
        }
    }

    useEffect(() => {
        getListPersonajes(`${params.name}`);
        getPersonaje(`${params.name}`);
    }, []);

    return (
        <>
            <Header />
            <div className='contenedor'>
                <div className='contenido'>
                    <div className="personaje">
                        <img src={personajeDatoExtra.image} alt=""/>
                    </div>
                    <div className="datos">
                        <h2>{elPersonaje.name}</h2>
                        <p><span>Peso:</span> {elPersonaje.mass}</p>
                        <p><span>Altura:</span> {elPersonaje.height}</p>
                        <p><span>Color de ojos:</span> {elPersonaje.eye_color}</p>
                        <p><span>Genero:</span> {elPersonaje.gender}</p>
                        <p><span>Cumpleaños:</span> {elPersonaje.birth_year}</p>
                        {/* <p><span>Planeta:</span> {personajeDatoExtra.homeworld}</p> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetallesPersonaje;