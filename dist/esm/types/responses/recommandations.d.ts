import User from "../user/user";
import ApiResponse from "./response";
export declare type RecommandationData = {
    type: number;
    content: {
        user: User;
        position: {
            lat: number;
            lon: number;
        };
    };
};
interface RecommandationResponse extends ApiResponse {
    data: RecommandationData[];
}
export default RecommandationResponse;
