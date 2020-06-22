import api, { authHeaders } from "../../config";

export const GET_TRACKS_SUCCESS = "GET_TRACKS_SUCCESS";
export const GET_UPDATED_COIN = "GET_UPDATED_COIN";

const getTracksURI = "/discover/tracks";
const postTrackFeedback = "/discover/";
const postPlayTrackFeedbackURL = "/pro-feedback/giveFeedback/"

export const getTracksForDiscover = () => dispatch =>
  fetch(`${api}${getTracksURI}`, {
    method: "GET",
    headers: authHeaders()
  })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: GET_TRACKS_SUCCESS,
        payload: data
      });
    });

export const postDiscoverFeedback = (payload, isPro) =>
  fetch(
    `${api}${postTrackFeedback}${payload.feedbackId}${
      isPro ? "?type=PRO" : ""
    }`,
    {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify(payload)
    }
  );

  export const postPlayTrackFeedback = (payload, callback) => dispatch =>
  fetch(
    `${api}${postPlayTrackFeedbackURL}${payload.feedbackId}`,
    {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: GET_UPDATED_COIN,
        payload: data.updatedCoin
      });
      callback();
    });
