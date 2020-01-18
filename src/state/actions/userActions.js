import history from "../../history";
import api, { genericHeaders, formDataHeader, authHeaders } from "../../config";

const postRegisterUserURI = "/users/register";
const postAuthenticateUserURI = "/users/authenticate";
const postPreferencesURI = "/users";
const updateUserURI = "/settings/update";

export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";
export const AUTHENTICATE_USER_SUCCESS = "AUTHENTICATE_USER_SUCCESS";
export const AUTHENTICATE_USER_FAILURE = "AUTHENTICATE_USER_FAILURE";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const registerUserAction = (requestData) => (dispatch) =>
  fetch(`${api}${postRegisterUserURI}`, {
    method: "POST",
    headers: genericHeaders(),
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then(() => {
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
      history.push("/preferences");
      localStorage.setItem("x-access-token", token);
      dispatch({ type: AUTHENTICATE_USER_SUCCESS, payload: token });
    });

export const uploadUserProfile = (fileToUpload, email) => {
  const formData = new FormData();
  formData.append("profileImage", fileToUpload);
  formData.append("email", email);
  return fetch(`${api}${postAuthenticateUserURI}`, {
    method: "POST",
    headers: formDataHeader(),
    body: formData,
  });
};

export const postListenerPreferences = (payload, navigateToPath) => (
  dispatch
) => {
  const requestHeaders = authHeaders();
  return fetch(`${api}${postPreferencesURI}`, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then(() => { 
      history.push(navigateToPath);
    });
};
export const updateUserInfo = (requestData) => (dispatch) => 
  fetch(`${api}${updateUserURI}`, {
    method: "PATCH",
    header: genericHeaders(),
    body: JSON.stringify(requestData)
  })
    .then((response) => response.json())
    .then(() => {
      alert("User update successful");
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: requestData
      });
    })
    .catch(() => {
      alert("User update failed")
    });
