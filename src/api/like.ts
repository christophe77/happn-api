import axiosInstance from "../axiosInstance";
import LikeResponse from "../types/responses/like";

async function like(userId: string, photoId: string): Promise<LikeResponse> {
  const datas = {
    reaction: {
      id: "heart",
    },
    container: {
      type: "PHOTO",
      content: {
        id: photoId,
      },
    },
    tracking_custom_data: {
      reaction_index: 0,
      container_index: 0,
      content_index: 0,
    },
  };
  try {
    const res = await axiosInstance.post(
      `/api/v1/users/me/reacted/${userId}`,
      datas
    );
    return res.data;
  } catch (error: any) {
    throw new Error(`${error.response.status} : ${error.response.statusText}`);
  }
}
export default like;
