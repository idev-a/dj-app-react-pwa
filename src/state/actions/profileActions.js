import { toast } from "react-toastify";
import api, { authHeaders } from "../../config";

export const GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_SUCCESS";
export const GET_USER_QUALIFYING_TRACK_SUCCESS = "GET_USER_QUALIFYING_TRACK_SUCCESS";
export const GET_FOLLOW_REQUEST_SUCCESS = "GET_FOLLOW_REQUEST_SUCCESS";

export const getUserProfile = (userName) => dispatch =>
  fetch(`${api}/users/profile/${userName}`, {
    method: "GET",
    headers: authHeaders()
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    toast.error("Failed to fetch profile !!");
  }).then(data => {
    dispatch({
      type: GET_USER_PROFILE_SUCCESS,
      payload: data,
    })
  });

export const getQualifyingTracks = (userName) => dispatch =>
  fetch(`${api}/orders/qualifyingTracks/${userName}`, {
    method: "GET",
    headers: authHeaders()
  })
    .then(res => res.json())
    .then(requestData => {
      dispatch({
        type: GET_USER_QUALIFYING_TRACK_SUCCESS,
        payload: requestData
      });
    });

export const getFollowRequest = (payload) => dispatch =>
  fetch(`${api}/users/follow`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(payload)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(requestData => {
      dispatch({
        type: GET_FOLLOW_REQUEST_SUCCESS,
        payload: requestData
      });
    });