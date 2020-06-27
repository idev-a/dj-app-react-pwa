import { toast } from "react-toastify";
import api, { authHeaders } from "../../config";

export const GET_TOP_LISTENERS = "GET_TOP_LISTENERS";

export const getTopListeners = (userName) => dispatch => 
  fetch(`${api}/listeners/topListners`, {
    method: "GET",
    headers: authHeaders()
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    toast.error("Failed to fetch top Listeners !!");
  }).then(data => {
    dispatch({
      type: GET_TOP_LISTENERS,
      payload: data,
    })
  });