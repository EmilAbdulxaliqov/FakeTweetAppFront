import axios from "axios";

const BASE_URL: string = 'http://localhost:8080/api/auth/';

export const AuthService = {
    register: async (username: string, password: string) => {
        return axios.post(BASE_URL + 'register', {
            username,
            password
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Content-Type': 'application/json',
            },

        });
    },
    login: async (username: string, password: string) => {
        return axios.post(BASE_URL + 'login',  {
            username,
            password
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        });
    }
}


