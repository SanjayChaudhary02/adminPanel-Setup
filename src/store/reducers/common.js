/* eslint-disable default-param-last */

import { LOADING, RESET_STATUS, SET_STATUS } from '../ducks/common/common-actionTypes';

const initialState = {
    loading: false,
};

const adminUserReducers = (state = initialState, action) => {
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                loading: action?.payload || false,
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action?.payload,
            };
        }
        case RESET_STATUS: {
            return {
                ...state,
                status: {},
            };
        }
        default:
            return state;
    }
};

export default adminUserReducers;
