import { GET_TOP_LISTENERS } from "../actions/listenerActions";

const initialState = {
  topListeners: []
};

const reducer = (state = initialState, action) => {
  const handlers = {
    [GET_TOP_LISTENERS]: (state, { payload }) => ({
      ...state,
      topListeners: payload
    })
  };

  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state;
};

export default reducer;
