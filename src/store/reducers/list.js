import {
    SET_LIST,
} from '../ducks/list/list-actionTypes';

const initialState = {
    list: [],
    totalCount: 0,
};

const listReducers = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_LIST: {
            return {
                ...state,
                list: action?.payload?.records,
                totalCount: action?.payload?.totalCount,
            };
        }
        default:
            return state;
    }
};

export default listReducers;
