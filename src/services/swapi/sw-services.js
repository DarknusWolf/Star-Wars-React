import { useState } from "react";
import { getPersonajesRequest } from "../../lib/swapi/requests/get-personajes-request";
import { getPlanetaRequest } from "../../lib/swapi/requests/get-planeta-request";

export const usePersonajes = () => {
    const [listaError, setListaError] = useState("");

    const getPersonajes = async () => {
        try {
            const personajeResponse = await getPersonajesRequest();
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
        getPlaneta,
        listaError
    }
}