import api, { authHeaders } from "../../config";

export const UPDATE_DATA = "UPDATE_DATA";
const orderFeedbackPostUrl = "/orders/feedback";
const uploadTrackURI = "/orders/upload/track/";

export const updateOrderData = (payload) => (dispatch) =>
  dispatch({
    type: UPDATE_DATA,
    payload,
  });

export const submitPayment = (paymentInfo) => {
  return fetch(`${api}${orderFeedbackPostUrl}`, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify(paymentInfo)
  });
};

export const uploadAudioFileToIPFS = (formData, feedbackId) =>
  fetch(`${api}${uploadTrackURI}${feedbackId}`, {
    method: "POST",
    body: formData,
  });