import types from './../../actions/teams/types';

const defaultValue = {
    items: {}
};

export default (state = defaultValue, action) => {
    switch (action.type) {
        case types.TEAMS_FETCH:
            return {
                ...state,
                items: action.payload
            }
        case types.TEAMS_POST:
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: action.payload
                }
            }
        default:
            return state;
    }
}