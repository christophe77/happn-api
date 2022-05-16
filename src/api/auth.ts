import { Credentials } from "../types/auth/auth";
import { getAuthDatas } from "../db/db";
import { client_id, client_secret } from "../const";
import facebookLogin from "../utils/facebookLogin";
import axiosInstance from "../axiosInstance";

async function withFacebook(credentials: Credentials): Promise<boolean> {
  const hasFacebookToken = await getAuthDatas(credentials.email);
  if (hasFacebookToken?.token && hasFacebookToken.token !== "0") {
    const tokenIsValid = await loginProcess(credentials, true);
    if (tokenIsValid) {
      return true;
    }
    return loginProcess(credentials, false);
  } else {
    return loginProcess(credentials, false);
  }
}
async function loginProcess(
  credentials: Credentials,
  withToken: boolean
): Promise<boolean> {
  try {
    if (!withToken) {
      await facebookLogin(credentials);
    }

    const authData = await getAuthDatas(credentials.email);

    const assertionString = `{"facebook_token":"${authData.token}","mobile_token":"","mobile_id":""}`;
    const datas = {
      assertion: assertionString,
      assertion_type: "facebook_access_token_and_mobile_data",
      assertion_version: "6.0",
      client_id,
      client_secret,
      grant_type: "assertion",
      scope: "mobile_app",
    };
    const res = await axiosInstance.post("/connect/oauth/token", datas);
    axiosInstance.defaults.headers.common[
      "authorization"
    ] = `OAuth="${res.data.access_token}"`;
    return true;
  } catch {
    return false;
  }
}

const auth = {
  withFacebook,
};
export default auth;
