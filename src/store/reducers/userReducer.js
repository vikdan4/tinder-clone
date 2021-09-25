import { SAVE_USER } from "../actions/actionTypes";

const initialState = {
    user: {
        id: 77,
        imgUrl: "http://mail.manyaninda.com/images/basinda-biz/1576065218_TGX_2.JPG",
        name: "Vikdan",
        age: "20",
        bio: "listening to music, reading, movies, athlete, spirituality",
    },
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER: {
            return {
                user: action.payload,
            };
        }
        default:
            return state;
    }
};
