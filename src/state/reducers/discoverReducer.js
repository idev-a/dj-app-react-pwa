import { GET_TRACKS_SUCCESS, GET_UPDATED_COIN } from "../actions/discoverActions";

const initialState = {
  tracks: [],
  updatedCoin: 0,
};

export default (state = initialState, action) => {
  const handlers = {
    [GET_TRACKS_SUCCESS]: { ...state, tracks: action.payload },
    [GET_UPDATED_COIN]: { ...state, updatedCoin: action.payload },
  };
  return handlers[action.type] || state;
};
