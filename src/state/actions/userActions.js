import localforage from "localforage";
import api, { genericHeaders } from "../../config";

const postRegisterUserURI = "/users/register";
const postAuthenticateUserURI = "/users/authenticate";

export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";
export const AUTHENTICATE_USER_SUCCESS = "AUTHENTICATE_USER_SUCCESS";
export const AUTHENTICATE_USER_FALIURE = "AUTHENTICATE_USER_FAILURE";

export const registerUserAction = (requestData) => (dispatch) =>
  fetch(`${api}${postRegisterUserURI}`, {
    method: "POST",
    headers: genericHeaders(),
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then(() => {
      alert("User registration successful");
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: requestData,
      });
    })
    .catch(() => {
      alert("User registration failed");
    });

export const authenticateUser = (requestData) => (dispatch) =>
  fetch(`${api}${postAuthenticateUserURI}`, {
    method: "POST",
    headers: genericHeaders(),
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then(({ token }) => {
      localforage.setItem("x-access-token", token);
      dispatch({ type: AUTHENTICATE_USER_SUCCESS, payload: token });
    });
