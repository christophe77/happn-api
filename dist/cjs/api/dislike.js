"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = __importDefault(require("../axiosInstance"));
async function dislike(userId) {
    const datas = {};
    try {
        const res = await axiosInstance_1.default.post(`/api/v1/users/me/rejected/${userId}`, datas);
        return res.data;
    }
    catch (error) {
        throw new Error(`${error.response.status} : ${error.response.statusText}`);
    }
}
exports.default = dislike;
