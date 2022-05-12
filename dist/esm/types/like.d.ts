declare type LikeResponse = {
    status: number;
    data: {
        message: string;
        has_liked_me: boolean;
        has_crushed: boolean;
        renewable_likes_per_period: number;
        cooldown_likes_period: number;
        renewable_likes: number;
        cooldown_likes_time_left: number;
    };
    success: boolean;
    error_code: number;
};
export default LikeResponse;
