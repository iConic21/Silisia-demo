import { push, goBack } from 'connected-react-router';

const routerSetQuery = query => async dispatch => {
    dispatch(push({
        search: query
    }));
}

const routerGoBack = () => async (dispatch, getState) => {
    const currentState = getState();
    if (currentState.router.action === 'POP') {
        return dispatch(push('/'));
    }

    return dispatch(goBack());
}

const routerPushRoute = path => async dispatch => {
    dispatch(push(path));
}

export default {
    routerGoBack,
    routerSetQuery,
    routerPushRoute
};