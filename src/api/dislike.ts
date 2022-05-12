import axiosInstance from "../axiosInstance";
import DislikeResponse from "../types/dislike";

async function dislike(userId: string): Promise<DislikeResponse> {
  const datas = {};
  try {
    const res = await axiosInstance.post(
      `/api/v1/users/me/rejected/${userId}`,
      datas
    );
    return res.data;
  } catch (error: any) {
    throw new Error(`${error.response.status} : ${error.response.statusText}`);
  }
}
export default dislike;
