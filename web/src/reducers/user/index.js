import types from './../../actions/user/types';

const defaultValue = null;

export default (state = defaultValue, action) => {
    switch (action.type) {
        case types.USER_LOGIN:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}