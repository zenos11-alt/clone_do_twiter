import { Tweet } from "../types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
    id: 123,
    user: user,
    body: 'Outro dia mágico',
    image: 'https://cdn.tugatech.com.pt/imagens/topicos/tugatech-1683361094-7322.jpg',
    likeCount: 523,
    commentCount: 61,
    retweetCount: 0,
    liked: true,
    retweeted: false,
    dataPost: new Date(2026,2,23,15,14,0)
}