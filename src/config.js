const api = "https://api.thebreakisover.app";
// const api = "http://localhost:3000";
// const api = "https://hearbk-server.herokuapp.com";

export const genericHeaders = () => ({
  "Content-Type": "application/json",
  Accept: "application/json",
});

export const authHeaders = () => ({
  ...genericHeaders(),
  "x-access-token": localStorage.getItem("x-access-token"),
});

export const formDataHeader = (hasToken = true) => ({
  "Content-Type": "multipart/form-data",
  ...(hasToken && { "x-access-token": localStorage.getItem("x-access-token") }),
});

export const STRIPE_KEY = "pk_live_WxDWmJ53hswHLIAYQx3Xc15B";
export default api;
