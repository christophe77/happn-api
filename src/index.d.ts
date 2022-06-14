import { Credentials } from './types/auth/auth';
import { MeResponse } from './types/me';
import LikeResponse from './types/responses/like';
import DisLikeResponse from './types/responses/dislike';
import RecommandationResponse from './types/responses/recommandations';
import ShortListResponse from './types/responses/shortList';

export interface HappnApi {
	auth: {
		withFacebook: (credentials: Credentials) => Promise<boolean>;
	};
	me: () => Promise<MeResponse>;
	like: (userId: string, photoId: string) => Promise<LikeResponse>;
	dislike: (userId: string) => Promise<DisLikeResponse>;
	recommandations: () => Promise<RecommandationResponse>;
	shortList: () => Promise<ShortListResponse>;
}
