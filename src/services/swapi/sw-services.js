import { useState } from "react";
import { getPersonajesRequest } from "../../lib/swapi/requests/get-personajes-request";
import { getPlanetaRequest } from "../../lib/swapi/requests/get-planeta-request";
import { getPersonajeRequest } from "../../lib/swapi/requests/get-personaje-request";

export const usePersonajes = () => {
    const [listaError, setListaError] = useState("");

    const getPersonajes = async () => {
        try {
            const personajesResponse = await getPersonajesRequest();
            return personajesResponse;
        } catch (error) {
            setListaError(error);
        }
    }

    const getPersonaje = async (url) => {
        try {
            const personajeResponse = await getPersonajeRequest(url);
            return personajeResponse;
        } catch (error) {
            setListaError(error);
        }
    }
    

    const getPlaneta = async (url) => {
        try {
            const planetaResponse = await getPlanetaRequest(url);
            return planetaResponse;
        } catch (error) {
            setListaError(error);
        }
    }

    return{
        getPersonajes,
        getPersonaje,
        getPlaneta,
        listaError
    }
}