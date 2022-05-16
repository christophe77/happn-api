import User from '../user/user';
import ApiResponse from './response';

interface ShortListResponse extends ApiResponse {
	data: { expiration_date: string; shortlist_users: User[] };
}

export default ShortListResponse;
