import {
    CHANGE_AUTH
} from "../constant/ActionTypes";


const INIT_STATE = {
    auth: true,
    userName: 'haider'
};


export default (state = INIT_STATE, action) => {
    console.log('action in reducer', action);

    switch (action.type) {
        case CHANGE_AUTH: {
            console.log('CHANGE_AUTH');
            return {
                ...state,
                auth: !state.auth,
                userName: 'Ali'
            }
        }
        default:
            return state;
    }
}
