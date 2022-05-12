import { Credentials } from "../types/auth";
declare function withFacebook(credentials: Credentials): Promise<boolean>;
declare const auth: {
    withFacebook: typeof withFacebook;
};
export default auth;
