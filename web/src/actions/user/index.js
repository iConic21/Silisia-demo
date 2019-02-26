import types from './types';
import axios from 'axios';

const userLogin = (email, password) => async dispatch => dispatch({
    type: types.USER_LOGIN,
    payload: axios.post('/auth', { email, password })
});


export default {
    userLogin
}