import {
    call, put, takeLatest, fork,
} from 'redux-saga/effects';
import { imageUploadApi } from '../../apis/uploadImage-api';
import { onImageUploadSuccess, onImageUploadError } from '../ducks/imageUpload/imageUpload-actions';
import { ON_IMAGE_UPLOAD } from '../ducks/imageUpload/imageUpload-actionTypes';
import { loading } from '../ducks/common/common-actions';
import { getHeader } from './admin-session-operations';

export function* uploadImage(action) {
    yield put(loading(true));
    try {
        const headers = yield call(getHeader, action?.token);
        const newHeader = { ...headers, 'Content-Type': 'multipart/form-data' };
        const data = new FormData();
        data.append('image', action?.data?.file, action?.data?.file?.name);
        if (action?.data?.raw) {
            data.append('raw', true);
        }
        const response = yield call(imageUploadApi, data, newHeader);
        yield put(loading(false));
        if (response?.data?.result) {
            yield put(onImageUploadSuccess({ uploadStatus: 'success', ...response?.data }));
        } else {
            yield put(onImageUploadError({ uploadStatus: 'error', ...response }));
        }
    } catch (e) {
        yield put(loading(false));
        yield put(onImageUploadError({ uploadStatus: 'error', message: e?.data?.message || e?.message || e }));
    }
}

function* watchImageUpload() {
    yield takeLatest(ON_IMAGE_UPLOAD, uploadImage);
}

const watchers = [fork(watchImageUpload)];
export default watchers;
