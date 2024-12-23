import { apiFactory } from "../utils.js";

export type GetAllFriendsResponse = {
    userId: string;
    username: string;
    displayName: string;
    zaloName: string;
    avatar: string;
    bgavatar: string;
    cover: string;
    gender: number;
    dob: number;
    sdob: string;
    status: string;
    phoneNumber: string;
    isFr: number;
    isBlocked: number;
    lastActionTime: number;
    lastUpdateTime: number;
    isActive: number;
    key: number;
    type: number;
    isActivePC: number;
    isActiveWeb: number;
    isValid: number;
    userKey: string;
    accountStatus: number;
    oaInfo: any;
    user_mode: number;
    globalId: string;
    bizPkg: {
        label: any;
        pkgId: number;
    };
    createdTs: number;
    oa_status: any;
}[];

export const getAllFriendsFactory = apiFactory<GetAllFriendsResponse>()((api, _, utils) => {
    const serviceURL = utils.makeURL(`${api.zpwServiceMap.profile[0]}/api/social/friend/getfriends`);

    return async function getAllFriends() {
        const response = await utils.request(serviceURL, {
            method: "GET",
        });

        return utils.resolve(response);
    };
});
