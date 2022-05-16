import ShortListResponse from "../types/responses/shortList";
import axiosInstance from "../axiosInstance";

async function shortList(): Promise<ShortListResponse> {
  try {
    const fields =
      "expiration_date,shortlist_users.fields(user.fields(id,audios,first_name,last_name,gender,age,about,job,workplace,school,modification_date,is_moderator,is_admin,type,status,last_position_update,register_date,picture.mode(1).width(1400).height(1600).fields(id,is_default,url,width,height),profiles.mode(1).width(1400).height(1600).fields(id,is_default,url,width,height),spotify_tracks,social_synchronization.fields(facebook,vk,apple_sign_in,instagram,google_sign_in),traits,verification.fields(status,reason),unread_conversations,unread_notifications,is_premium,user_balance,credits,matching_preferences.fields(matching_traits.fields(enabled,traits)),location_preferences,mysterious_mode_preferences,marketing_preferences,notification_settings,biometric_preferences,last_tos_version_accepted,last_sdc_version_accepted,last_cookie_v1_version_accepted,last_cookie_v2_version_accepted,last_cookie_v3_version_accepted,location_city,residence_city,pending_likers,login,device_info,first_ip,country,language)))";
    const res = await axiosInstance.get(
      `/api/v1/users/me/shortlist?fields=${fields}`
    );
    return res.data;
  } catch (error: any) {
    throw new Error(`${error.response.status} : ${error.response.statusText}`);
  }
}

export default shortList;
