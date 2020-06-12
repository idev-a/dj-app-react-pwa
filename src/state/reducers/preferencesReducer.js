import {
  GENRES_REQUEST_SUCCESS,
  TAGS_REQUEST_SUCCESS,
  STYLE_REQUEST_SUCCESS,
} from "../actions/preferencesActions";
import {
  SELECTED_GENRES_UPDATE,
  SELECTED_TAGS_UPDATE,
  SELECTED_STYLE_UPDATE,
} from "../actions/preferencesActions";

const initialState = {
  genres: [],
  tags: [],
  selectedGenres: [],
  selectedTags: [],
  styles: [],
  selectedStyles:[],
};

export default (state = initialState, action) => {
  const handlers = {
    [GENRES_REQUEST_SUCCESS]: { ...state, genres: action.payload },
    [TAGS_REQUEST_SUCCESS]: { ...state, tags: action.payload },
    [STYLE_REQUEST_SUCCESS]: { ...state, styles: action.payload },
    [SELECTED_GENRES_UPDATE]: { ...state, selectedGenres: action.payload },
    [SELECTED_TAGS_UPDATE]: { ...state, selectedTags: action.payload },
    [SELECTED_STYLE_UPDATE]: { ...state, selectedStyles: action.payload },
  };

  return handlers[action.type] || state;
};
