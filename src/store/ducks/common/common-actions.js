import { LOADING, RESET_STATUS, SET_STATUS } from './common-actionTypes';

export const loading = (payload) => ({
    type: LOADING,
    payload,
});

export const setStatus = (payload) => ({
    type: SET_STATUS,
    payload,
});

export const resetStatus = () => ({
    type: RESET_STATUS,
});

export default {};
