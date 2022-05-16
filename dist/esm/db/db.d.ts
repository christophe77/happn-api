import { StringMap } from "yajdb/dist/esm/types/operations";
import { AuthData } from "../types/auth/auth";
export declare function createDb(): Promise<boolean>;
export declare function updateLoginDatas(email: string, updatePayload: StringMap): Promise<boolean>;
export declare function getAuthDatas(email: string): Promise<AuthData>;
