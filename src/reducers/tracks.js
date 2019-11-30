import { SET_TRACKS } from "../actions";

const initialState = {
  tracks: [],
};

const reducer = (state = initialState, action) =>
  ({
    [SET_TRACKS]: { ...state, tracks: action.data },
  }[action.type] || state);

export default reducer;
