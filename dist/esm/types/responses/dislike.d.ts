import ApiResponse from './response';
interface DislikeResponse extends ApiResponse {
    data: {
        message: string;
    };
}
export default DislikeResponse;
