import Helpers from './../helpers';

const getPayload = (response, payload) => {
    if (!payload) {
        return null;
    }

    const promiseObjects = Helpers.getSymbolFor('promise', payload);

    if (!promiseObjects || !response) {
        return response;
    }

    return Helpers.setSymbolFor('promise', response, promiseObjects);
}

export default ({ dispatch }) => {
    return next => action => {
        if (!action.payload || !action.payload.then) {
            return next(action);
        }
        action.payload
            .then(response => {
                const res = getPayload(response, action.payload);
                const newAction = { ...action, payload: res };
                dispatch(newAction);
            })
            .catch(err => {
                const newAction = { ...action, payload: getPayload(err.response, action.payload) };
                dispatch(newAction);
            });
    }
}