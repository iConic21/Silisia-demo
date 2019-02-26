import types from './types';

const teams = {
    '0': {
        id: 0,
        name: 'personal boards'
    },
    '1': {
        id: 1,
        name: 'shared boards'
    },
    '2': {
        id: 2,
        name: 'work boards'
    }
}

const teamsFetch = () => async dispatch => dispatch({
    type: types.TEAMS_FETCH,
    payload: teams
});

const teamsPost = (team) => async dispatch => dispatch({
    type: types.TEAMS_POST,
    payload: {
        ...team,
        id: Math.random().toString(36).substring(7)
    }
});

export default {
    teamsFetch,
    teamsPost
}