import yajdb from "yajdb";
import { StringMap } from "yajdb/dist/esm/types/operations";
import { AuthData } from "../types/auth/auth";
const { database, table } = yajdb;

const dbName = "facebook";
const tableName = "login_datas";
const tableStructure = [
  { name: "email", type: "string" },
  { name: "access_token", type: "string" },
];

export async function createDb(): Promise<boolean> {
  try {
    await database.createAsync(dbName);
    await table.createAsync(dbName, tableName, tableStructure);
    return true;
  } catch {
    return false;
  }
}

export async function updateLoginDatas(
  email: string,
  updatePayload: StringMap
): Promise<boolean> {
  try {
    const userExistsResponse = await getAuthDatas(email);
    if (userExistsResponse?.token !== "0") {
      await table.updateAsync(
        dbName,
        tableName,
        {
          email: email,
        },
        updatePayload
      );
    }else{
      const newUser = {email, access_token : updatePayload.access_token};
      const createUserResponse = await table.insertAsync(dbName, tableName, [newUser]);
      return createUserResponse.success;
    }
    return true;
  } catch {
    return false;
  }
}
export async function getAuthDatas(email: string): Promise<AuthData> {
  try {
    const response = await table.selectAsync(dbName, tableName, {
      email: email,
    });
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
