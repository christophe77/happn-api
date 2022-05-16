import LikeResponse from "../types/responses/like";
declare function like(userId: string, photoId: string): Promise<LikeResponse>;
export default like;
