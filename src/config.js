import localforage from "localforage"

// const apiU = "https://hearbk-server.herokuapp.com";
const api = "http://localhost:3009";
// const api = "https://hearbk.appspot.com";

export const genericHeaders = () => ({
    "Content-Type": "application/json",
    "Accept": "application/json"
    
});

export const authHeaders = () => ({
    ...(genericHeaders()),
    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZiaUBkeW5hbWljcHJvZHVjZXIuY29tIiwiX2lkIjoiNWRmMDJmMDkzNzFhMWM3MzViMTY0ZGFhIiwiaWF0IjoxNTc3ODkyODg1LCJleHAiOjE1Nzc4OTY0ODV9.SppB4AlWjIlXidI4r0xlJDV2vRhi59nLhuTLUpN73as",
});

export const formDataHeader = () => ({
    "Content-Type": "multipart/form-data",
    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZiaUBkeW5hbWljcHJvZHVjZXIuY29tIiwiX2lkIjoiNWRmMDJmMDkzNzFhMWM3MzViMTY0ZGFhIiwiaWF0IjoxNTc3ODkyODg1LCJleHAiOjE1Nzc4OTY0ODV9.SppB4AlWjIlXidI4r0xlJDV2vRhi59nLhuTLUpN73as",
})
export default api;
