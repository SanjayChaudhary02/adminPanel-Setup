import {
    call, put, takeLatest, fork,
} from 'redux-saga/effects';
import { appendBrand } from '../../apis/auth-token-api';
import { postApi, deleteApi } from '../../apis/common-api';
import { setList } from '../ducks/list/list-actions';
import { FETCH_LIST, DELETE_BYID } from '../ducks/list/list-actionTypes';
import { loading, setStatus } from '../ducks/common/common-actions';
import { getHeader } from './admin-session-operations';
import AppConfig from '../../config/app.config';

export function* fetchList(action) {
    try {
        const headers = yield call(getHeader, action?.token);
        yield put(loading(true));
        const response = yield call(postApi, action?.url, action?.data, headers);
        yield put(loading(false));
        if (response) {
            // eslint-disable-next-line no-underscore-dangle
            const records = response?.data?.result?.map((item) => ({ ...item, id: item?._id }));
            if (response?.status >= 200 && response?.status < 300) {
                yield put(setList({ records, totalCount: response?.data?.totalCount  }));
            } else {
                yield put(setList({ records: [{id: 1, name: 'Times New Roman', status: true }, {id: 2, name: 'Arial', status: true },], totalCount: response?.data?.totalCount  }));
                yield put(setStatus({ status: 'error', message: response?.data?.message || response?.data || response?.message || response, time: new Date().getTime() }));
            }
        } else {
            yield put(setList({ records: [{id: 1, name: 'Times New Roman', status: true }, {id: 2, name: 'Arial', status: true },], totalCount: response?.data?.totalCount  }));
            yield put(setStatus({ status: 'error', message: 'Failed to load font list', time: new Date().getTime() }));
        }
    } catch (e) {
        yield put(setList({ records: [{id: 1, name: 'Times New Roman', status: true }, {id: 2, name: 'Arial', status: true },], totalCount: 10  }));
        yield put(setStatus({ status: 'error', message: e?.data?.message || e?.message || e, time: new Date().getTime() }));
        yield put(loading(false));
    }
}

export function* deleteItem(action) {
    try {
        const headers = yield call(getHeader, action?.token);
        const response = yield call(deleteApi, appendBrand(`${AppConfig?.API_ENDPOINT}/font/delete/${action?.id}`), headers);
        yield put(setStatus({ status: (response?.status >= 200 && response?.status < 300) ? 'success' : 'error', message: response?.data?.message || response?.data || response?.message || response, time: new Date().getTime() }));
    } catch (e) {
        yield put(setStatus({ status: 'error', message: e?.data?.message || e?.message || e, time: new Date().getTime() }));
        console.error('[-] Error: catch error at delete in font-operations.js file.', e);
    }
}

function* watchList() {
    yield takeLatest(FETCH_LIST, fetchList);
}

function* watchDelete() {
    yield takeLatest(DELETE_BYID, deleteItem);
}

const watchers = [fork(watchList), fork(watchDelete)];
export default watchers;
