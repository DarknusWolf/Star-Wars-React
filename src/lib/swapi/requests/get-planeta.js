import axios from "axios";

export const getPlaneta = (url) => {
    return axios(url,{
        method: 'GET'
    });
};