import { Credentials, AuthFacebook } from "./types/auth";
import { Feeling } from "./types/feelings";
import { Recommandations } from "./types/recommandations";

export interface HappnApi {
  auth: {
    withFacebook: (credentials: Credentials) => Promise<AuthFacebook>;
  };
  feeling: {
    like: (userId: string) => Promise<Feeling>;
    pass: (userId: string) => Promise<Feeling>;
  };
  recommandation: {
    getRecommandations: Promise<Recommandations>;
  };
}
