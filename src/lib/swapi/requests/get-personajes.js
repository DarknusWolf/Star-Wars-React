import axios from "axios";

export const getPersonajes = () => {
    return axios('https://swapi.dev/api/people',{
        method: 'GET'
    });
};