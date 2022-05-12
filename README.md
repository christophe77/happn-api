# happn-api

Wrapper of happn api for nodeJS.
Working may 2022 - Only facebook auth.

## Installation

    npm i happn-api
    // or
    yarn add happn-api

then in your project :

    const happnApi = require("happn-api").default;
    // or
    import happnApi from "happn-api"

## Available commands

### Auth

Only with facebook for the moment.

    const { auth } = happnApi;

    const facebookCredentials = {
        email: "email@gmail.com",
        password: "12345",
    };

    async function login() {
        return auth.withFacebook(facebookCredentials);
    }

Auth is mandatory before any action.

### Me

Used to get your profile datas.
Return type can be found here : [Me type](https://link-url-here.org).

    const { me } = happnApi;

    async function getMyDatas() {
        return me();
    }

### Recommandations

Return type can be found here : [Me type](https://link-url-here.org).

    const { recommandations } = happnApi;

    async function getMyRecommandations() {
        return recommandations();
    }

### Like

Return type can be found here : [Me type](https://link-url-here.org).

    const { recommandations, like } = happnApi;

    async function likeUserExample() {
        const myRecs = await recommandations();
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

### Dislike

Return type can be found here : [Me type](https://link-url-here.org).

    const { recommandations, dislike } = happnApi;

    async function disLikeUserExample() {
        const myRecs = await recommandations();
        if (myRecs.length > 0) {
           const userToDisLike = myRecs[0].content.user;
           await dislike(userToLike.id);
        }
    }

#### TODO

Implement other happn routes.
