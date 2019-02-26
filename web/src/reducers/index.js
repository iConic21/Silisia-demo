import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import teamsReducer from './teams';
import projectsReducer from './projects';
import userReducer from './user';

export default history => combineReducers({
    router: connectRouter(history),
    teams: teamsReducer,
    projects: projectsReducer,
    user: userReducer
});