import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "https://api.happn.fr",
});
axiosInstance.defaults.headers.common["authorization"] = "";
axiosInstance.defaults.headers.common["x-happn-cid"] = "4645610e-8cff-4863-b219-c040feca1b4c";
axiosInstance.defaults.headers.common["x-happn-did"] = "b149536e-c7d6-400b-b8a0-8dfeda17785f";
axiosInstance.defaults.headers.common["x-happn-version"] = "happn-webapp/2022.4.7";
axiosInstance.defaults.headers.common["content-type"] = "application/json";
axiosInstance.defaults.headers.common["user-agent"] = "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Mobile Safari/537.36";
axiosInstance.defaults.headers.common["accept-encoding"] = "gzip";
axiosInstance.defaults.headers.common["connection"] = "keep-alive";
axiosInstance.defaults.headers.common["host"] = "api.happn.fr";
axiosInstance.defaults.headers.common["platform"] = "android";
axiosInstance.defaults.headers.common["sec-ch-ua-mobile"] = "?1";
axiosInstance.defaults.headers.common["sec-ch-ua-platform"] = "Android";
export default axiosInstance;
