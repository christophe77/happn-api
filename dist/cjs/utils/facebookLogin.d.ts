import { Credentials } from "../types/auth/auth";
declare function facebookLogin(credentials: Credentials): Promise<boolean>;
export default facebookLogin;
