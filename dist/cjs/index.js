"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("./api/auth"));
const me_1 = __importDefault(require("./api/me"));
const like_1 = __importDefault(require("./api/like"));
const dislike_1 = __importDefault(require("./api/dislike"));
const recommandations_1 = __importDefault(require("./api/recommandations"));
const happnApi = {
    auth: auth_1.default,
    me: me_1.default,
    like: like_1.default,
    dislike: dislike_1.default,
    recommandations: recommandations_1.default,
};
exports.default = happnApi;
