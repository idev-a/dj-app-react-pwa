import { GET_USER_PROFILE_SUCCESS } from "../actions/profileActions";

const initialState = {
  profileDetails: undefined
};

const reducer = (state = initialState, action) => {
  const handlers = {
    [GET_USER_PROFILE_SUCCESS]: (state, { payload }) => ({
      ...state,
      profileDetails: payload
    })
  };

  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state;
};

export default reducer;
