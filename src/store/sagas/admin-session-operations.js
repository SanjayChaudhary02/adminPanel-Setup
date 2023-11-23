import { call } from 'redux-saga/effects';
import { getHealth } from '../../apis/auth-token-api';
import AppConfig from '../../config/app.config';

let isCookieSet = false;

function clearSWR() {
    return new Promise((resolve) => {
        navigator?.serviceWorker?.getRegistrations().then((registrations) => {
            if (registrations?.length) {
                registrations?.forEach((registration) => registration?.unregister().then(() => window?.location?.reload?.(), () => resolve(false)));
            } else {
                resolve(true);
            }
        }, () => resolve(true)).catch((error) => {
            console.log(`${AppConfig?.API_BRAND}: [-] Error at clearSWR method in admin-session-operations.js file : ${error}`);
            resolve(true);
        });
    });
}
export function* getHeader(token) {
    const jwtToken = token ? `Bearer ${token}` : '';
    if (AppConfig.CSRF_ENABLED && !isCookieSet) {
        if ('serviceWorker' in navigator) {
            const resUnReg = yield call(clearSWR, jwtToken);
            if (resUnReg) {
                isCookieSet = true;
            }
        }
        yield call(getHealth, { authorization: jwtToken });
    }
    return {
        authorization: jwtToken,
    };
}

export default {};
