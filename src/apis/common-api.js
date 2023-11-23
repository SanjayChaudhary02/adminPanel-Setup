import axios from 'axios';
import { validateAuth, getHeader } from './auth-token-api';

export const getApi = (url, headers) => axios.get(url, getHeader(headers)).then((response) => response).catch((error) => (validateAuth(error?.response)));
export const postApi = (url, data, headers) => axios.post(url, data, getHeader(headers)).then((response) => response).catch((error) => (validateAuth(error?.response)));
export const putApi = (url, data, headers) => axios.put(url, data, getHeader(headers)).then((response) => response).catch((error) => (validateAuth(error?.response)));
export const deleteApi = (url, headers) => axios.delete(url, getHeader(headers)).then((response) => response).catch((error) => (validateAuth(error?.response)));
