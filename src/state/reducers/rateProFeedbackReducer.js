import { GET_PRO_FEEDBACK_TRACKS_SUCCESS } from "../actions/proFeedbackActions";

const initialState = {
  tracks: []
};

const reducer = (state = initialState, action) => {
  const handler = {
    [GET_PRO_FEEDBACK_TRACKS_SUCCESS]: (state, action) => ({
      ...state,
      tracks: action.payload
    })
  };
  return handler[action.type] ? handler[action.type](state, action) : state;
};

export default reducer;
