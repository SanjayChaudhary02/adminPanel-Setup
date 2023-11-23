import {
    ON_IMAGE_UPLOAD, ON_IMAGE_UPLOAD_SUCCESS, ON_IMAGE_UPLOAD_ERROR, RESET_UPLOAD_STATUS,
} from './imageUpload-actionTypes';

export const onImageUpload = (payload) => ({
    type: ON_IMAGE_UPLOAD,
    data: payload?.data,
    token: payload?.token,
});

export const onImageUploadSuccess = (payload) => ({
    type: ON_IMAGE_UPLOAD_SUCCESS,
    payload,
});

export const onImageUploadError = (payload) => ({
    type: ON_IMAGE_UPLOAD_ERROR,
    payload,
});

export const resetUploadStatus = () => ({
    type: RESET_UPLOAD_STATUS,
});
