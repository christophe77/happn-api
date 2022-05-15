// https://api.happn.fr/api/v1/users/me/shortlist?fields=expiration_date,shortlist_users.fields(user.fields(id))
import { ShortListResponse } from "../types/shortList";
import axiosInstance from "../axiosInstance";

async function shortList(): Promise<ShortListResponse> {
  try {
    const fields =
      "expiration_date,shortlist_users.fields(user.fields(id))";
    const res = await axiosInstance.get(
      `/api/v1/users/me/recommendations?fields=${fields}`
    );
    return res.data;
  } catch (error: any) {
    throw new Error(`${error.response.status} : ${error.response.statusText}`);
  }
}

export default shortList;
