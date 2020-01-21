import history from "../../history";
import api, { genericHeaders, formDataHeader, authHeaders } from "../../config";
import { toast } from "react-toastify";

const postRegisterUserURI = "/users/register";
const postAuthenticateUserURI = "/users/authenticate";
const postPreferencesURI = "/users";
const updateUserURI = "/settings/update";
const getOrderHistoryUrl = "/orders/history";
const getUserDetailsURI = "/users/details";
const uploadDisplayPicURI = "/users/upload/profile-image";

export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";
export const AUTHENTICATE_USER_SUCCESS = "AUTHENTICATE_USER_SUCCESS";
export const AUTHENTICATE_USER_FAILURE = "AUTHENTICATE_USER_FAILURE";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_FAILURE = "GET_USER_DATA_FAILURE";
export const GET_HISTORY_SUCCESS = "GET_HISTORY_SUCCESS";
export const GET_USER_DETAILS_SUCCESS = "GET_USER_DETAILS_SUCCESS";
export const GET_USER_DETAILS_FAILURE = "GET_USER_DETAILS_FAILURE";

export const registerUserAction = (requestData, file) => (dispatch) =>
  fetch(`${api}${postRegisterUserURI}`, {
    method: "POST",
    headers: genericHeaders(),
    body: JSON.stringify({
      email: requestData.email,
      password: requestData.password,
      display_name: requestData.displayName,
      user_name: requestData.username,
    }),
  })
    .then((response) => {
      if (response.status === 401) {
        toast.error("User already exits");
        return undefined;
      }
      if (response.ok) {
        if (!file) {
          toast.success("User registered sucessfully. Please login");
        }
        return response.json();
      } else {
        throw Error;
      }
    })
    .then(async (data) => {
      if (file && data) {
        const res = await uploadUserProfile(file, data.id);
        if (res.ok) {
          toast.success("User registered sucessfully. Please login");
        } else {
          toast.error("Profile image upload failed");
        }
      }
    });

export const authenticateUser = (requestData) => (dispatch) =>
  fetch(`${api}${postAuthenticateUserURI}`, {
    method: "POST",
    headers: genericHeaders(),
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then(({ token, isFirstUserLogin, isPremiumUser, expireTime = 3600000 }) => {
      localStorage.setItem("x-access-token", token);
      if (isPremiumUser) {
        localStorage.setItem("isPremiumUser", String(isPremiumUser))
      }
      setTimeout(() => {
        localStorage.removeItem("x-access-token");
        localStorage.removeItem("isPremiumUser");
      }, expireTime)
      history.push(isFirstUserLogin ? "/preferences" : "/discover");
      dispatch({ type: AUTHENTICATE_USER_SUCCESS, payload: token });
    });

export const uploadUserProfile = (fileToUpload, id) => {
  const formData = new FormData();
  formData.append("profileImage", fileToUpload);
  return fetch(`${api}${uploadDisplayPicURI}/${id}`, {
    method: "POST",
    body: formData,
  });
};

export const postListenerPreferences = (payload) => (dispatch) => {
  const requestHeaders = authHeaders();
  return fetch(`${api}${postPreferencesURI}`, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then(() => {
      dispatch(getUserDetails());
    });
};
export const updateUserInfo = (requestData) => (dispatch) =>
  fetch(`${api}${updateUserURI}`, {
    method: "POST",
    header: authHeaders(),
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then(() => {
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: requestData,
      });
    })
    .catch((e) => {
      console.log(e);
    });

export const getOrderHistory = () => (dispatch) =>
  fetch(`${api}${getOrderHistoryUrl}`, {
    method: "GET",
    headers: authHeaders(),
  })
    .then((res) => res.json())
    .then((requestData) => {
      dispatch({
        type: GET_HISTORY_SUCCESS,
        payload: requestData,
      });
    });

export const getUserData = () => (dispatch) =>
  fetch(`${api}${postPreferencesURI}:1`, {
    method: "GET",
    headers: authHeaders(),
  })
    .then((res) => res.json())
    .then((requestData) => {
      dispatch({
        type: GET_USER_DATA_SUCCESS,
        payload: requestData,
      });
    });

export const getUserDetails = () => (dispatch) =>
  fetch(`${api}${getUserDetailsURI}`, {
    method: "GET",
    headers: authHeaders(),
  })
    .then((res) => res.json())
    .then((requestData) => {
      dispatch({
        type: GET_USER_DETAILS_SUCCESS,
        payload: requestData,
      });
    });
