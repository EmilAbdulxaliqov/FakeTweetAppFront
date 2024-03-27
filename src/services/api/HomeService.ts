import { axiosPrivate } from "./axiosPrivate.ts";

export const HomeService = {
  getPosts: async () => {
    return axiosPrivate.get("post");
  },
  getPostById: async (userId: number) => {
    return axiosPrivate.get(`post/user/${userId}`);
  },
  deletePost: async (postId: number) => {
    return axiosPrivate.delete(`post/${postId}`);
  },
  createPost: async (title: string, content: string, userId: number) => {
    return axiosPrivate.post(`post/user/${userId}`, {
      title,
      content,
    });
  },
  updatePost: async (postId: number, title: string, content: string) => {
    return axiosPrivate.put(`post/${postId}`, {
      title,
      content,
    });
  }
  ,
  addComment: async (postId: number, userId: number, content: string) => {
    return axiosPrivate.post(`comment/${postId}/user/${userId}`, {
      content,
    });
  },
  getComments: async (postId: number) => {
    return axiosPrivate.get(`comment/${postId}`);
  }
  ,
   deleteComment: async (commentId: number) => {
    return axiosPrivate.delete(`comment/${commentId}`);
  }
  ,
  likePost: async (postId: number, userId: number) => {
    return axiosPrivate.post(`post/${postId}/like/${userId}`);
  },
  unlikePost: async (postId: number, userId: number) => {
    return axiosPrivate.delete(`post/${postId}/unlike/${userId}`);
  },
};
