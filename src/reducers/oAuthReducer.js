import { FETCH_USER, FETCH_USER_FAILURE } from '../actions/types';

const initialState = {
    loggedIn: false,
    user: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                user: action.payload,
                loggedIn: true
            };
        case FETCH_USER_FAILURE:
            return {
                user: {},
                loggedIn: false
            }
        default: 
        return state;
    }
}
