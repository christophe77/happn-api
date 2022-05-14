"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db/db");
const const_1 = require("../const");
const facebookLogin_1 = __importDefault(require("../utils/facebookLogin"));
const axiosInstance_1 = __importDefault(require("../axiosInstance"));
async function withFacebook(credentials) {
    const hasFacebookToken = await (0, db_1.getAuthDatas)(credentials.email);
    if ((hasFacebookToken === null || hasFacebookToken === void 0 ? void 0 : hasFacebookToken.token) && hasFacebookToken.token !== "0") {
        const tokenIsValid = await loginProcess(credentials, true);
        if (tokenIsValid) {
            return true;
        }
        return loginProcess(credentials, false);
    }
    else {
        return loginProcess(credentials, false);
    }
}
async function loginProcess(credentials, withToken) {
    try {
        if (!withToken) {
            await (0, facebookLogin_1.default)(credentials);
        }
        const authData = await (0, db_1.getAuthDatas)(credentials.email);
        const assertionString = `{"facebook_token":"${authData.token}","mobile_token":"","mobile_id":""}`;
        const datas = {
            assertion: assertionString,
            assertion_type: "facebook_access_token_and_mobile_data",
            assertion_version: "6.0",
            client_id: const_1.client_id,
            client_secret: const_1.client_secret,
            grant_type: "assertion",
            scope: "mobile_app",
        };
        const res = await axiosInstance_1.default.post("/connect/oauth/token", datas);
        axiosInstance_1.default.defaults.headers.common["authorization"] = `OAuth="${res.data.access_token}"`;
        return true;
    }
    catch (_a) {
        return false;
    }
}
const auth = {
    withFacebook,
};
exports.default = auth;
