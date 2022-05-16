type ApiResponse = {
	status: number;
	success: boolean;
	error_code: number;
    pagination?: { count: number; is_last_page: boolean };
}

export default ApiResponse
