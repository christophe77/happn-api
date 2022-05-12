"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = __importDefault(require("../axiosInstance"));
async function like(userId, photoId) {
    const datas = {
        reaction: {
            id: "heart",
        },
        container: {
            type: "PHOTO",
            content: {
                id: photoId,
            },
        },
        tracking_custom_data: {
            reaction_index: 0,
            container_index: 0,
            content_index: 0,
        },
    };
    try {
        const res = await axiosInstance_1.default.post(`/api/v1/users/me/reacted/${userId}`, datas);
        return res.data;
    }
    catch (error) {
        throw new Error(`${error.response.status} : ${error.response.statusText}`);
    }
}
exports.default = like;
