import axios from "axios";
import api from "../config";

export const SET_TRACKS = "SET_TRACKS";
export const SET_SAVED_CARD_DETAILS = "SET_SAVED_CARD_DETAILS";
export const SET_CARD_DETAILS = "SET_CARD_DETAILS";
export const SET_FEEDBACK_PRICE = "SET_FEEDBACK_PRICE";
export const SET_TRACK_URL = "SET_TRACK_URL";
export const SET_SELECTED_MEDIA_TYPE = "SET_SELECTED_MEDIA_TYPE";

const getTracks = () => axios.get(`${api}/api/feedback/all`);

export const postFeedback = (feedbackId, swipeCode, email, token) => {
  fetch(`${api}/api/discover/add`, {
    method: "POST",
    body: JSON.stringify({ feedbackId, status: swipeCode, email }),
    headers: {
      "x-access-token": token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export const fetchTracksAction = () => (dispatch) =>
  getTracks().then((res) =>
    dispatch({
      type: SET_TRACKS,
      data: res.data.feedbacks,
    })
  );

export const fetchCardDetails = (token) => (dispatch) =>
  axios
    .get(`${api}/api/feedback/getSavedCard`, {
      headers: {
        "x-access-token": token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.data) {
        if (res.data.cardInfo.lastDigits) {
          dispatch({
            type: SET_CARD_DETAILS,
            data: {
              savedCard: {
                last4: res.data.cardInfo.lastDigits,
                customerId: res.data.cardInfo.customerId,
              },
              cardSelect: 1,
            },
          });
        }
      }
    });

export const uploadAudioFileToIPFS = (formData, feedbackId) =>
  fetch(`${api}/api/upload/track/${feedbackId}`, {
    method: "POST",
    body: formData,
  });

export const saveCardInformation = (cardInformation) => (dispatch) =>
  dispatch({
    type: SET_CARD_DETAILS,
    data: cardInformation,
  });

export const setFeedbackPrice = (feedbackCode) => (dispatch) =>
  dispatch({
    type: SET_FEEDBACK_PRICE,
    data: feedbackCode,
  });

export const setTrackUrl = (trackUrl) => (dispatch) => 
  dispatch({
    type: SET_TRACK_URL,
    data: trackUrl,
  });

export const setSelectedMediaType = (mediaType) => (dispatch) => 
  dispatch({
    type: SET_SELECTED_MEDIA_TYPE,
    data: mediaType,
  });

export const postPayment = (resBody, token) => fetch(`${api}/api/feedback/add`, {
  method: "POST",
  body: JSON.stringify(resBody),
  headers: {
    "x-access-token": token,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
