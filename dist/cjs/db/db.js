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
    { name: "id", type: "string" },
    { name: "access_token", type: "string" },
];
const defaultValues = [{ id: "1", access_token: "0" }];
const searchPayload = { id: "1" };
async function createDb() {
    try {
        await database.createAsync(dbName);
        await table.createAsync(dbName, tableName, tableStructure);
        const response = await table.selectAsync(dbName, tableName, searchPayload);
        if (response.message === "[]" || response.message === "table is empty") {
            await table.insertAsync(dbName, tableName, defaultValues);
        }
        return true;
    }
    catch (_a) {
        return false;
    }
}
exports.createDb = createDb;
async function updateLoginDatas(updatePayload) {
    try {
        await table.updateAsync(dbName, tableName, searchPayload, updatePayload);
        return true;
    }
    catch (_a) {
        return false;
    }
}
exports.updateLoginDatas = updateLoginDatas;
async function getAuthDatas() {
    try {
        const response = await table.selectAsync(dbName, tableName, searchPayload);
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
