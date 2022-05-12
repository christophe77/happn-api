"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = __importDefault(require("../axiosInstance"));
async function recommandations() {
    try {
        const datas = "fields=type,content.fields(crossing_nb_times,position.fields(lat,lon,modification_date),user.fields(id,audios,first_name,last_name,gender,age,about,job,workplace,school,modification_date,is_moderator,is_admin,type,status,last_position_update,register_date,picture.mode(1).width(1400).height(1600).fields(id,is_default,url,width,height),profiles.mode(1).width(1400).height(1600).fields(id,is_default,url,width,height),spotify_tracks,social_synchronization.fields(facebook,vk,apple_sign_in,instagram,google_sign_in),traits,verification.fields(status,reason),unread_conversations,unread_notifications,is_premium,user_balance,credits,matching_preferences.fields(matching_traits.fields(enabled,traits)),location_preferences,mysterious_mode_preferences,marketing_preferences,notification_settings,biometric_preferences,last_tos_version_accepted,last_sdc_version_accepted,last_cookie_v1_version_accepted,last_cookie_v2_version_accepted,last_cookie_v3_version_accepted,location_city,residence_city,pending_likers,login,device_info,first_ip,country,language))&scroll_id_from=";
        const res = await axiosInstance_1.default.get(`/api/v1/users/me/recommendations?${datas}`);
        return res.data;
    }
    catch (error) {
        throw new Error(`${error.response.status} : ${error.response.statusText}`);
    }
}
exports.default = recommandations;
