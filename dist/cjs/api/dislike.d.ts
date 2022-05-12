import DislikeResponse from "../types/dislike";
declare function dislike(userId: string): Promise<DislikeResponse>;
export default dislike;
