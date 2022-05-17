import axios from "axios";

export const getPersonajesRequest = () => {
    return axios('https://swapi.dev/api/people',{
        method: 'GET'
    });
};