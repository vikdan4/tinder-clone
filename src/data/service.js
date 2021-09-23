import { allMatches } from "../mocks/matches";
import { allProfiles } from "../mocks/profiles";
import { allReactions } from "../mocks/reactions";

class APIService {
    getToken(authData) {
        const myAuthData = {
            login: "vikdan",
            password: "vikdan123",
        };
        const myToken = "abpoqwrnafbwlkj";

        if (JSON.stringify(authData) === JSON.stringify(myAuthData))
            return myToken;
        //return error
    }

    getProfiles(pageNumber = 0, pageSize = 10) {
        return allProfiles.slice(
            pageNumber * pageSize,
            pageNumber * pageSize + pageSize
        );
    }
    addReaction(reaction) {
        allReactions.push(reaction);
        if (reaction.liked) {
            allReactions.forEach((item) => {
                if (
                    item.firstId == reaction.secondId &&
                    item.secondId == reaction.firstId &&
                    item.liked
                ) {
                    allMatches.push({ id1: item.firstId, id2: item.secondId });
                }
            });
        }
    }
    findMatches(id) {
        //go through allMatches and find all obj, that contain this id
        //extract other id from them and add user with this id
        const matches = [];
        allMatches.forEach((item) => {
            if (item.id1 == id) {
                let match = allProfiles.find(
                    (profile) => profile.id == item.id2
                );
                matches.push(match);
            }
            if (item.id2 == id) {
                let match = allProfiles.find(
                    (profile) => profile.id == item.id1
                );
                matches.push(match);
            }
        });
        return matches;
    }
}

export const apiService = new APIService();
