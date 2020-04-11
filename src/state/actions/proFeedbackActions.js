import api, { authHeaders } from "../../config";
import { toast } from "react-toastify";

export const GET_PRO_FEEDBACK_TRACKS_SUCCESS =
  "GET_PRO_FEEDBACK_TRACKS_SUCCESS";

const getProFeedbackTrackURI = "/pro-feedback/tracks";
const postListenerRatingsURI = "/listeners/ratings";

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

export const postListenerRating = payload => dispatch =>
  fetch(`${api}${postListenerRatingsURI}`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(payload)
  }).then(response => {
    if (response.ok) {
      toast.success("Submitted successfully !!");
    } else {
      toast.error("Failed to submit feedback !!");
    }
  });
