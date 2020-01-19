import {
  REGISTER_USER_SUCCESS,
  AUTHENTICATE_USER_SUCCESS,
  GET_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  GET_HISTORY_SUCCESS
} from "../actions/userActions";

const initialState = {
  user: {},
  authToken: undefined,
  error: false,
  isPremiumUser: false,
};

const reducer = (state = initialState, { type, payload }) => {
  const handlers = {
    [REGISTER_USER_SUCCESS]: { ...state, user: payload },
    [AUTHENTICATE_USER_SUCCESS]: { ...state, authToken: payload },
    [GET_USER_SUCCESS]: {...state, user: payload },
    [UPDATE_USER_SUCCESS]: {...state, user: payload },
    [GET_HISTORY_SUCCESS]: {...state, user: payload }
  };
  return handlers[type] || state;
};

export default reducer;
