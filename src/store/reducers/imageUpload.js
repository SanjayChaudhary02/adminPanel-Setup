import {
    ON_IMAGE_UPLOAD, ON_IMAGE_UPLOAD_SUCCESS, ON_IMAGE_UPLOAD_ERROR, RESET_UPLOAD_STATUS,
} from '../ducks/imageUpload/imageUpload-actionTypes';

const initialState = {
    uploadStatus: {},
    uploadQueue: [],
};

const imageUploadReducers = (state = initialState, action = {}) => {
    switch (action.type) {
        case ON_IMAGE_UPLOAD: {
            return {
                ...state,
                uploadQueue: [...state.uploadQueue, action.payload],
            };
        }
        case ON_IMAGE_UPLOAD_SUCCESS: {
            return {
                ...state,
                uploadStatus: action?.payload,
                uploadedUrl: action?.payload?.result,
            };
        }
        case ON_IMAGE_UPLOAD_ERROR: {
            return {
                ...state,
                uploadStatus: action.payload,
            };
        }
        case RESET_UPLOAD_STATUS: {
            return {
                ...state,
                uploadStatus: {},
                uploadedUrl: '',
            };
        }
        default:
            return state;
    }
};

export default imageUploadReducers;
