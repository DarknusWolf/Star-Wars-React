import axios from "axios";

export const getPersonajeRequest = (url) => {
    return axios(url,{
        method: 'GET'
    });
};