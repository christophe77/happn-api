# happn-api

Wrapper of happn api for nodeJS.
Working may 2022 - Only facebook auth.

Exemple of use : [https://github.com/christophe77/happn-bot](https://github.com/christophe77/happn-bot)

## Installation

    npm i happn-api
    // or
    yarn add happn-api

then in your project :

    const happnApi = require("happn-api").default;
    // or
    import happnApi from "happn-api"

## Available commands

All return types can be found here : [types](https://github.com/christophe77/happn-api/tree/master/src/types)

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

    const { me } = happnApi;

    async function getMyDatas() {
        return me();
    }

### Recommandations

    const { recommandations } = happnApi;

    async function getMyRecommandations() {
        return recommandations();
    }

### Shortlist

    const { shortList } = happnApi;

    async function getShortList() {
        return shortList();
    }

### Like

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

    const { recommandations, dislike } = happnApi;

    async function disLikeUserExample() {
        const myRecs = await recommandations();
        if (myRecs.length > 0) {
           const userToDisLike = myRecs[0].content.user;
           await dislike(userToLike.id);
        }
    }

### Example

Full implementation for a bot usage can be found here [happn-bot](https://github.com/christophe77/happn-bot)

    const happnApi = require("happn-api").default;

    const { auth, recommandations, like } = happnApi;

    const facebookCredentials = {
        email: "email@gmail.com",
        password: "12345",
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

    example();

#### TODO

Implement other happn routes.
