import { ON_ADD,RESET_DATA, GET_DATA, SET_DATA } from './addEdit-actionTypes';

export const onAdd = (payload) => ({
    type: ON_ADD,
    data: payload?.data?.data,
    id: payload?.data?.id,
    history: payload?.data?.history,
    token: payload?.token,
    url: payload?.data?.url,
});

export const resetData = () => ({
    type: RESET_DATA,
});

export const getData = (payload) => ({
    type: GET_DATA,
    data: payload.data,
    token: payload.token,
});

export const setData = (payload) => ({
    type: SET_DATA,
    payload,
});

export default {};
