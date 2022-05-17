import axios from "axios";

export const getPlanetaRequest = (url) => {
    return axios(url,{
        method: 'GET'
    });
};