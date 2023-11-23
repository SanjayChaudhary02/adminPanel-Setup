import {
    SET_DATA, RESET_DATA,
} from '../ducks/addEdit/addEdit-actionTypes';

const initialState = {
};

const addEditReducers = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                editData: action.payload,
            };
        }
        case RESET_DATA: {
            return {
                ...state,
                editData: {},
            };
        }
        default:
            return state;
    }
};

export default addEditReducers;
