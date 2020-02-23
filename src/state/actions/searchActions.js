import api, { authHeaders } from "../../config";
import { toast } from "react-toastify";

const getCategorizedListenersUri = "/listeners/categorized";
const postSearchListenersUri = "/listeners/search";

export const GET_CATEGORIZED_LISTENERS_SUCCESS =
  "GET_CATEGORIZED_LISTENERS_SUCCESS";

export const GET_SEARCH_LISTENERS_SUCCESS =
  "GET_SEARCH_LISTENERS_SUCCESS";

export const getCategorizedListeners = () => dispatch => {
  return fetch(`${api}${getCategorizedListenersUri}`, {
    method: "GET",
    headers: authHeaders()
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      toast.error("Failed to get listeners !!");
    })
    .then(data =>
      dispatch({
        type: GET_CATEGORIZED_LISTENERS_SUCCESS,
        payload: data
      })
    );
};

export const searchListeners = searchValue => dispatch => {
  return fetch(`${api}${postSearchListenersUri}?searchQuery=${searchValue}`, {
    headers: authHeaders(),
    method: "POST"
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      toast.error("Failed to get listeners");
    })
    .then(data =>
      dispatch({
        type: GET_SEARCH_LISTENERS_SUCCESS,
        payload: data
      })
    );
};
