import localforage from "localforage"

// const apiU = "https://hearbk-server.herokuapp.com";
const api = "http://localhost:3000";
// const api = "https://hearbk.appspot.com";

export const genericHeaders = () => ({
    "Content-Type": "application/json",
    "Accept": "application/json"
    
});

export const authHeaders = () => ({
    ...(genericHeaders()),
    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZiaUBkeW5hbWljcHJvZHVjZXIuY29tIiwiX2lkIjoiNWRmMDJmMDkzNzFhMWM3MzViMTY0ZGFhIiwiaWF0IjoxNTc4NDQ2MDcwLCJleHAiOjE1Nzg0NDk2NzB9.r7Q4UHz7VyTwqdXg0AQE5C_k_78wDizgfrd99kDwWAg",
});

export const formDataHeader = () => ({
    "Content-Type": "multipart/form-data",
    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZiaUBkeW5hbWljcHJvZHVjZXIuY29tIiwiX2lkIjoiNWRmMDJmMDkzNzFhMWM3MzViMTY0ZGFhIiwiaWF0IjoxNTc4MzE4MDAzLCJleHAiOjE1NzgzMjE2MDN9.X9bcpqXSeUHoNArAx5D83cGbrOg0rKImoZuO1h8RK9Y",
})
export default api;
