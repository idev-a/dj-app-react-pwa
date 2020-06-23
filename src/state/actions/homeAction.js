import api, { genericHeaders } from "../../config";

const getActivityUrl = "/activities";


export const GET_ACTIVITY_SUCCESS = "GET_ACTIVITY_SUCCESS"

export const getActivities = () => dispatch =>
    fetch(`${api}${getActivityUrl}`, {
        method: "GET",
        headers: genericHeaders()
    })
        .then(res => res.json())
        .then(requestData => {
            dispatch({
                type: GET_ACTIVITY_SUCCESS,
                payload: requestData
            });
        });