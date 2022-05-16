import me from "./api/me";
import like from "./api/like";
import dislike from "./api/dislike";
import recommandations from "./api/recommandations";
import shortList from "./api/shortList";
declare const happnApi: {
    auth: {
        withFacebook: (credentials: import("./types/auth/auth").Credentials) => Promise<boolean>;
    };
    me: typeof me;
    like: typeof like;
    dislike: typeof dislike;
    recommandations: typeof recommandations;
    shortList: typeof shortList;
};
export default happnApi;
