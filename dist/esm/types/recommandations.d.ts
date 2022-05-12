import { Trait } from "./me";
export declare type RecommandationData = {
    type: number;
    content: {
        user: {
            id: string;
            first_name: string;
            about: string;
            age: number;
            gender: string;
            job: string;
            school: string;
            type: string;
            modification_date: string;
            audios: any[];
            profiles: {
                id: string;
                is_default: false;
                url: string;
                width: number;
                height: number;
            }[];
            picture: {
                id: string;
                is_default: false;
                url: string;
                width: number;
                height: number;
            };
            social_synchronization: {
                facebook: {
                    id: string;
                    email: string;
                };
            };
            spotify_tracks: string[];
            traits: Trait[];
            verification: {
                status: string;
            };
        };
        position: {
            lat: number;
            lon: number;
        };
    };
};
export declare type RecommandationResponse = {
    status: number;
    data: RecommandationData[];
    success: boolean;
    pagination: {
        count: number;
        is_last_page: boolean;
    };
    error_code: number;
};
