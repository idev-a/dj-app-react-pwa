const api = "https://hearbk-server-test.herokuapp.com";
//const api = "http://localhost:3000";

export const genericHeaders = () => ({
    "Content-Type": "application/json",
    "Accept": "application/json"
    
});

export const authHeaders = () => ({
    ...(genericHeaders()),
    "x-access-token": localStorage.getItem('x-access-token')
});

export const formDataHeader = () => ({
    "Content-Type": "multipart/form-data",
    "x-access-token": localStorage.getItem('x-access-token')
})
export default api;
