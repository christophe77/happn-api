import { Credentials } from "../types/auth";
declare function facebookLogin(credentials: Credentials): Promise<boolean>;
export default facebookLogin;
