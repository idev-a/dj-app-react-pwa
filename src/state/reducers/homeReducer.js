import {
    GET_ACTIVITY_SUCCESS,
} from "../actions/homeAction";

const initialState = {
    activities: [],
};

const reducer = (state = initialState, { type, payload }) => {
    const handlers = {
        [GET_ACTIVITY_SUCCESS]: { ...state, activities: payload },
    };
    return handlers[type] || state;
};

export default reducer;
