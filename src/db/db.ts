import yajdb from "yajdb";
import { StringMap } from "yajdb/dist/esm/types/operations";
import { AuthData } from "../types/auth";
const { database, table } = yajdb;

const dbName = "facebook";
const tableName = "login_datas";
const tableStructure = [
  { name: "id", type: "string" },
  { name: "access_token", type: "string" },
];
const defaultValues = [{ id: "1", access_token: "0" }];
const searchPayload = { id: "1" };

export async function createDb(): Promise<boolean> {
  try {
    await database.createAsync(dbName);
    await table.createAsync(dbName, tableName, tableStructure);
    const response = await table.selectAsync(dbName, tableName, searchPayload);
    if (response.message === "[]" || response.message === "table is empty") {
      await table.insertAsync(dbName, tableName, defaultValues);
    }
    return true;
  } catch {
    return false;
  }
}
export async function updateLoginDatas(
  updatePayload: StringMap
): Promise<boolean> {
  try {
    await table.updateAsync(dbName, tableName, searchPayload, updatePayload);
    return true;
  } catch {
    return false;
  }
}
export async function getAuthDatas(): Promise<AuthData> {
  try {
    const response = await table.selectAsync(dbName, tableName, searchPayload);
    const { access_token } = JSON.parse(response.message)[0];
    return {
      token: access_token,
    };
  } catch {
    return {
      token: "0",
    };
  }
}
