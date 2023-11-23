import axios from 'axios';
import AppConfig from '../config/app.config';
import { validateAuth, appendBrand, getHeader } from './auth-token-api';

export const imageUploadApi = (data, headers) => axios.post(appendBrand(`${AppConfig?.API_ENDPOINT}/common/imageUpload`), data, getHeader(headers)).then((response) => response).catch((error) => (validateAuth(error?.response)));
export default {};
