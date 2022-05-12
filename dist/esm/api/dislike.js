import axiosInstance from "../axiosInstance";
async function dislike(userId) {
    const datas = {};
    try {
        const res = await axiosInstance.post(`/api/v1/users/me/rejected/${userId}`, datas);
        return res.data;
    }
    catch (error) {
        throw new Error(`${error.response.status} : ${error.response.statusText}`);
    }
}
export default dislike;
