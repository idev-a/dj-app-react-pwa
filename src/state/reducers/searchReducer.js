import {
  GET_CATEGORIZED_LISTENERS_SUCCESS,
  GET_SEARCH_LISTENERS_SUCCESS
} from "../actions/searchActions";

const initialState = {
  categorizedListeners: {},
  searchResults: []
};

const reducer = (state = initialState, { type, payload }) => {
  const handlers = {
    [GET_CATEGORIZED_LISTENERS_SUCCESS]: (state, payload) => {
      return { ...state, categorizedListeners: payload };
    },
    [GET_SEARCH_LISTENERS_SUCCESS]: (state, payload) => {
      return { ...state, searchResults: payload };
    }
  };
  return handlers[type] ? handlers[type](state, payload) : state;
};

export default reducer;
