import auth from "./api/auth";
import me from "./api/me";
import like from "./api/like";
import dislike from "./api/dislike";
import recommandations from "./api/recommandations";
import shortList from "./api/shortList";

const happnApi = {
  auth,
  me,
  like,
  dislike,
  recommandations,
  shortList
};

export default happnApi;
