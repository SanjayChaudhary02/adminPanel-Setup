import {
    call, put, takeLatest, fork,
} from 'redux-saga/effects';
import { appendBrand } from '../../apis/auth-token-api';
import { postApi } from '../../apis/common-api';
import { setData } from '../ducks/addEdit/addEdit-actions';
import { ON_ADD, GET_DATA } from '../ducks/addEdit/addEdit-actionTypes';
import { setStatus, resetStatus, loading } from '../ducks/common/common-actions';
import { getHeader } from './admin-session-operations';
import AppConfig from '../../config/app.config';

export function* add(action) {
    yield put(loading(true));
    try {
        const headers = yield call(getHeader, action?.token);
        const url = appendBrand(action?.id ? `${AppConfig.API_ENDPOINT}/font/editDetails/${action?.id}` : `${AppConfig.API_ENDPOINT}/font/addDetails`);
        const response = yield call(action?.id ? postApi : postApi, url, action?.data, headers);
        yield put(loading(false));
        if (response?.status >= 200 && response?.status < 300) {
            yield put(setStatus({ addStatus: 'success', ...response?.data }));
            setTimeout(() => {
                resetStatus();
                action?.history?.push({
                    pathname: `${AppConfig.ROUTE_PATH}/font`,
                    state: { ...response.data },
                });
            }, 3000);
        } else {
            yield put(setStatus({ addStatus: 'error', message: response?.data?.message || response?.data || response?.message || response }));
        }
    } catch (e) {
        yield put(loading(false));
        yield put(setStatus({ addStatus: 'error', message: e?.data?.message || e?.message || e }));
    }
}

export function* getData(action) {
    try {
        const headers = yield call(getHeader, action?.token);
        yield put(loading(true));
        const response = yield call(postApi, action?.data, headers);
        yield put(loading(false));
        if (response?.data?.result?.[0]) {
            yield put(setData(response?.data?.result[0]));
        } else {
            yield put(setStatus({ addStatus: 'error', message: 'Failed to load font data' }));
        }
    } catch (e) {
        yield put(loading(false));
        yield put(setStatus({ addStatus: 'error', message: 'Failed to load font data' }));
    }
}

function* watchAdd() {
    yield takeLatest(ON_ADD, add);
}

function* watchDataGet() {
    yield takeLatest(GET_DATA, getData);
}

const watchers = [fork(watchAdd), fork(watchDataGet)];
export default watchers;
