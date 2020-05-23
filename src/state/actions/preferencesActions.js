import api, { genericHeaders } from "../../config";

export const GENRES_REQUEST = "GENRES_REQUEST";
export const GENRES_REQUEST_SUCCESS = "GENRES_REQUEST_SUCCESS";
export const STYLE_REQUEST_SUCCESS = "STYLE_REQUEST_SUCCESS";
export const TAGS_REQUEST = "TAGS_REQUEST";
export const TAGS_REQUEST_SUCCESS = "TAGS_REQUEST_SUCCESS";
export const SELECTED_GENRES_UPDATE = "SELECTED_GENRES_UPDATE";
export const SELECTED_TAGS_UPDATE = "SELECTED_TAGS_UPDATE";
export const SELECTED_STYLE_UPDATE = "SELECTED_STYLE_UPDATE";

const GENRE_URI = "/genres";
const TAGS_URI = "/listeners/tags";
const STYLES_URI = "/styles/getStyles";

export const getGenres = () => (dispatch) =>
  fetch(`${api}${GENRE_URI}`, {
    method: "GET",
    headers: genericHeaders(),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GENRES_REQUEST_SUCCESS,
        payload: data,
      });
    });

export const getTags = () => (dispatch) =>
  fetch(`${api}${TAGS_URI}`, {
    method: "GET",
    headers: genericHeaders(),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: TAGS_REQUEST_SUCCESS,
        payload: data,
      });
    });

export const getStyles = () => (dispatch) =>
  fetch(`${api}${STYLES_URI}`, {
    method: "GET",
    headers: genericHeaders(),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: STYLE_REQUEST_SUCCESS,
        payload: data,
      });
    });

export const updateSelectedGenres = (genres) => ({
  type: SELECTED_GENRES_UPDATE,
  payload: genres,
});

export const updateSelectedTags = (tags) => ({
  type: SELECTED_TAGS_UPDATE,
  payload: tags,
});

export const updateSelectedStyles = (styles) => ({
  type: SELECTED_STYLE_UPDATE,
  payload: styles,
});
