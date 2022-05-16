import Trait from "./user/trait";
export declare type MeResponse = {
    success: boolean;
    status: number;
    error: any;
    data: {
        role: string;
        type: string;
        birth_date: string;
        id: string;
        audios: any[];
        first_name: string;
        last_name: string;
        gender: string;
        age: number;
        about: string;
        job: string;
        workplace: string | null;
        school: string;
        modification_date: string;
        is_moderator: boolean;
        is_admin: boolean;
        status: string;
        last_position_update: string;
        register_date: string;
        picture: {
            id: string;
            is_default: boolean;
            url: string;
            width: number;
            height: number;
        };
        profiles: {
            id: string;
            is_default: false;
            url: string;
            width: number;
            height: number;
        }[];
        nb_photos: number;
        spotify_tracks: string[];
        social_synchronization: {
            facebook: {
                id: string;
                email: string;
            };
        };
        traits: Trait[];
        verification: {
            status: string;
            reason: string;
        };
        unread_conversations: number;
        unread_notifications: number;
        is_premium: boolean;
        user_balance: {
            type: string;
            total: number;
            permanent: number;
            renewable: number;
            renewable_per_period: number;
            cooldown_period: any;
            cooldown_time_left: any;
        }[];
        subscription: any;
        renewable_credits_per_period: number;
        cooldown_credits_period: any;
        credits: number;
        permanent_credits: number;
        renewable_credits: number;
        cooldown_credits_time_left: any;
        matching_preferences: {
            female: number;
            male: number;
            distance: number;
            age_min: number;
            age_max: number;
            matching_traits: Trait[];
        };
        location_preferences: {
            hide_location: boolean;
        };
        mysterious_mode_preferences: {
            hide_age: boolean;
            hide_distance: boolean;
            hide_last_activity_date: boolean;
        };
        marketing_preferences: {
            audience_measurement: boolean;
            targeted_ads: boolean;
            marketing_operations: boolean;
            recommended_in_emails: boolean;
        };
        notification_settings: {
            charms: number;
            messages: number;
            reminders: number;
            dates: number;
            near: number;
            visit: number;
            match: number;
            likes: number;
            daily_recap: number;
            weekly_recap: number;
            news: number;
            shortlist: number;
            crush_time: number;
            others: number;
        };
        biometric_preferences: {
            profile_verification: any;
        };
        last_tos_version_accepted: string;
        last_sdc_version_accepted: string;
        last_cookie_v1_version_accepted: string;
        last_cookie_v2_version_accepted: string | null;
        last_cookie_v3_version_accepted: string | null;
        location_city: {
            id: string;
            city: string;
            county: string;
            country: string;
            position: {
                lat: number;
                lon: number;
            };
            modification_date: string;
        };
        residence_city: {
            id: string;
            city: string;
            county: string;
            country: string;
            position: {
                lat: number;
                lon: number;
            };
            modification_date: string;
        };
        pending_likers: {
            counter_label: string;
            icon: any;
        };
        login: string | null;
        device_info: number;
        country: {
            id: string;
            name: string;
        };
        language: {
            id: string;
            name: string;
        };
    };
    error_code: number;
};
