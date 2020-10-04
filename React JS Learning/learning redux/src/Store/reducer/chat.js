import { CHATS_FETCHED } from "../constant/ActionTypes";


const INIT_STATE = {
    chats: []
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CHATS_FETCHED: {
            return {
                ...state,
                chats: action.payload
            }
        }
        default:
            return state;
    }
}
