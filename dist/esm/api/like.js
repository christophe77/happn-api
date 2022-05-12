import axiosInstance from "../axiosInstance";
async function like(userId, photoId) {
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
        const res = await axiosInstance.post(`/api/v1/users/me/reacted/${userId}`, datas);
        return res.data;
    }
    catch (error) {
        throw new Error(`${error.response.status} : ${error.response.statusText}`);
    }
}
export default like;
