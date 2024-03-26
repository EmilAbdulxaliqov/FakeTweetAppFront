import axios from "axios";




export const axiosPublic = axios.create({
    baseURL: 'http://localhost:8080/api/auth/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json',
        "Authorization": null
    }
});