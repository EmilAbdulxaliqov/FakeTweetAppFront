import {axiosPublic} from "./axiosPublic.ts";

export const AuthService = {
    register: async (username: string, password: string) => {
        return axiosPublic.post( 'register', {
            username,
            password
        });
    },
    login: async (username: string, password: string) => {
        return axiosPublic.post('login',  {
            username,
            password
        });
    }
}


