import LikeResponse from "../types/like";
declare function like(userId: string, photoId: string): Promise<LikeResponse>;
export default like;
