"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthDatas = exports.updateLoginDatas = exports.createDb = void 0;
const yajdb_1 = __importDefault(require("yajdb"));
const { database, table } = yajdb_1.default;
const dbName = "facebook";
const tableName = "login_datas";
const tableStructure = [
    { name: "email", type: "string" },
    { name: "access_token", type: "string" },
];
async function createDb() {
    try {
        await database.createAsync(dbName);
        await table.createAsync(dbName, tableName, tableStructure);
        return true;
    }
    catch (_a) {
        return false;
    }
}
exports.createDb = createDb;
async function updateLoginDatas(email, updatePayload) {
    try {
        const userExistsResponse = await getAuthDatas(email);
        if ((userExistsResponse === null || userExistsResponse === void 0 ? void 0 : userExistsResponse.token) !== "0") {
            await table.updateAsync(dbName, tableName, {
                email: email,
            }, updatePayload);
        }
        else {
            const newUser = { email, access_token: updatePayload.access_token };
            const createUserResponse = await table.insertAsync(dbName, tableName, [newUser]);
            console.log(createUserResponse);
            return true;
        }
        return true;
    }
    catch (_a) {
        return false;
    }
}
exports.updateLoginDatas = updateLoginDatas;
async function getAuthDatas(email) {
    try {
        const response = await table.selectAsync(dbName, tableName, {
            email: email,
        });
        const { access_token } = JSON.parse(response.message)[0];
        return {
            token: access_token,
        };
    }
    catch (_a) {
        return {
            token: "0",
        };
    }
}
exports.getAuthDatas = getAuthDatas;
