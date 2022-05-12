import yajdb from "yajdb";
const { database, table } = yajdb;
const dbName = "facebook";
const tableName = "login_datas";
const tableStructure = [
    { name: "id", type: "string" },
    { name: "access_token", type: "string" },
];
const defaultValues = [{ id: "1", access_token: "0" }];
const searchPayload = { id: "1" };
export async function createDb() {
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
export async function updateLoginDatas(updatePayload) {
    try {
        await table.updateAsync(dbName, tableName, searchPayload, updatePayload);
        return true;
    }
    catch (_a) {
        return false;
    }
}
export async function getAuthDatas() {
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
