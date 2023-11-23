import { all } from 'redux-saga/effects';
import listWatcher from './list-operations';
import addEditWatcher from './addEdit-operations';
import imageUploadWatcher from './imageUpload-operations';

const watchers = [
    ...listWatcher,
    ...addEditWatcher,
    ...imageUploadWatcher,
];

export default function* rootSaga() {
    yield all(watchers);
}
