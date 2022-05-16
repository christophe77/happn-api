import Trait from './trait';
declare type User = {
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
export default User;
