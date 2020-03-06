import { toast } from "react-toastify";
import api, { authHeaders } from "../../config";

export const GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_SUCCESS";

export const getUserProfile = (userName) => dispatch => 
  fetch(`${api}/users/${userName}`, {
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