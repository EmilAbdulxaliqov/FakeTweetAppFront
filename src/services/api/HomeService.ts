import {axiosPrivate} from "./axiosPrivate.ts";

export const HomeService = {
    getPosts: async () => {
        return axiosPrivate.get('post');
    },
    getPostById: async (userId: number) => {
        return axiosPrivate.get(`post/user/${userId}`);
    },
    createPost: async (title: string, content: string, userId: number) => {
        return axiosPrivate.post(`post/user/${userId}`, {
            title,
            content
        });
    },
    likePost: async (postId: number, userId: number) => {
        return axiosPrivate.post(`post/${postId}/like/${userId}`);
    },
    unlikePost: async (postId: number, userId: number) => {
        return axiosPrivate.post(`post/${postId}/like/${userId}`);
    }
}