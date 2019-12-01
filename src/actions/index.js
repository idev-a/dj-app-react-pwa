import axios from 'axios';
import api from '../config';

export const SET_TRACKS = 'SET_TRACKS';

const getTracks = () =>
  axios.get(`${api}/api/feedback/all`);

export const postFeedback = (feedbackId, swipeCode, email, token) => {
    fetch(`${api}/api/discover/add`, {
        method: "POST",
        body: JSON.stringify({feedbackId, status: swipeCode, email}),
        headers: {
            'x-access-token': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
  }

  export const fetchTracksAction = () => dispatch => 
    getTracks().then(
        res => dispatch({
            type: SET_TRACKS,
            data: res.data.feedbacks,
        })
    );