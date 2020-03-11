import api, { authHeaders } from "../../config";
import { toast } from "react-toastify";

export const GET_PRO_FEEDBACK_TRACKS_SUCCESS =
  "GET_PRO_FEEDBACK_TRACKS_SUCCESS";

const getProFeedbackTrackURI = "/pro-feedback/tracks";

export const getProFeedbackTracks = () => dispatch =>
  fetch(`${api}${getProFeedbackTrackURI}`, {
    method: "GET",
    headers: authHeaders()
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      toast.error("Failed to get tracks !!!");
    })
    .then(data =>
      dispatch({
        type: GET_PRO_FEEDBACK_TRACKS_SUCCESS,
        payload: data
      })
    );
