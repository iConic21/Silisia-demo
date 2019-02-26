import Helpers from './../helpers';

export default ({ dispatch }) => {
    return next => action => {

        if (action.payload === null || (action.payload && (!action.payload.data && !action.payload.Data))) {
            return next(action);
        }

        const data = action.payload ? action.payload.data || action.payload.Data : null;
        const promise = Helpers.getSymbolFor('promise', action.payload);

        if (data && (data.success || (data.status >= 200 && data.status < 300))) {
            if (promise && promise.resolve) {
                promise.resolve(data);
            }
            const newAction = { ...action, payload: data.data || data.Data };
            dispatch(newAction);
        }
        else {
            if (promise && promise.reject) {
                promise.reject(data);
            }
            return null;
        }
    }
}