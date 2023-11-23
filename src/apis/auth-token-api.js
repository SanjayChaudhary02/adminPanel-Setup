import axios from 'axios';
import AppConfig from '../config/app.config';

export const validateAuth = (response) => {
    if (response?.status === 401 && typeof window !== 'undefined' && window?.location?.href) {
        // window.location.href = AppConfig?.ROUTE_PATH;
    }
    console.error(response?.status && response?.request?.responseURL ? `${AppConfig?.API_BRAND}: API error, getting ${response?.status} on ${response?.request?.responseURL}` : 'no response received');
    return response;
};

export const getHeader = (headers) => ({
    headers,
    withCredentials: !!AppConfig?.CSRF_ENABLED,
});

export const appendBrand = (url) => (`${url}${url?.indexOf('?') > 0 ? '&' : '?'}brand=${AppConfig?.API_BRAND}`);

export const getHealth = (headers) => axios.get(`${AppConfig?.API_ENDPOINT}/../health`, { headers, withCredentials: true }).then((response) => response).catch((error) => (validateAuth(error?.response)));

export default {};
