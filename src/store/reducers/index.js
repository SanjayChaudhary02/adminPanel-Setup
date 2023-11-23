import { combineReducers } from 'redux';
import common from './common';
import list from './list';
import imageUpload from './imageUpload';
import addEdit from './addEdit';

export default combineReducers({
    common, list, addEdit, imageUpload,
});
