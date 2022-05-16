import ApiResponse from './response';

interface LikeResponse extends ApiResponse {
	data: {
		message: string;
		has_liked_me: boolean;
		has_crushed: boolean;
		renewable_likes_per_period: number;
		cooldown_likes_period: number;
		renewable_likes: number;
		cooldown_likes_time_left: number;
	};
}

export default LikeResponse;
