import DislikeResponse from "../types/responses/dislike";
declare function dislike(userId: string): Promise<DislikeResponse>;
export default dislike;
