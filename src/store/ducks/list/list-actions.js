import {
    FETCH_LIST, SET_LIST, DELETE_BYID,
} from './list-actionTypes';

export const getList = (payload) => ({
    type: FETCH_LIST,
    data: payload.data,
    token: payload.token,
});

export const setList = (payload) => ({
    type: SET_LIST,
    payload,
});

export const deleteById = (payload) => ({
    type: DELETE_BYID,
    id: payload?.data?.id,
    token: payload?.token,
});

