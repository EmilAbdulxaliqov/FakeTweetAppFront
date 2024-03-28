export interface PostType {
    id: number,
    title: string,
    content: string,
    userIdWhoCreatedPost: number,
    username: string,
    likeCount: number
    usersIdWhoLikedPost: number[]
   likesId: number[]
}