const happnApi = require("./dist/cjs").default;

const { auth, recommandations, like, shortList } = happnApi;

const facebookCredentials = {
  email: "aaa@gmail.com ",
  password: "bbb",
};

async function login() {
  return auth.withFacebook(facebookCredentials);
}

async function getRecommandations() {
  const loginSuccess = await login();
  if (loginSuccess) {
    const myRecommandations = await recommandations();
    return myRecommandations.data || [];
  }
  return [];
}

async function example() {
  const myRecs = await getRecommandations();
  if (myRecs.length > 0) {
    const userToLike = myRecs[0].content.user;
    try {
      const likeResponse = await like(userToLike.id, userToLike.picture.id);
      const remainingLikes = likeResponse.data.renewable_likes;
      const hasLikedMe = likeResponse.data.has_liked_me;
      const hasCrushed = likeResponse.data.has_crushed;
      console.log(`you liked ${userToLike.first_name} ${userToLike.age}`);
      console.log(`remaining likes : ${remainingLikes}`);
      if (hasLikedMe) {
        console.log("she liked you");
      }
      if (hasCrushed) {
        console.log("we have a crush");
      }
    } catch (error) {
      console.log(error);
    }
  }
}
test();
