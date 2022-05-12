import me from "./api/me";
import like from "./api/like";
import dislike from "./api/dislike";
import recommandations from "./api/recommandations";
declare const happnApi: {
    auth: {
        withFacebook: (credentials: import("./types/auth").Credentials) => Promise<boolean>;
    };
    me: typeof me;
    like: typeof like;
    dislike: typeof dislike;
    recommandations: typeof recommandations;
};
export default happnApi;
