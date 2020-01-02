import { ENUMS } from "../../utils";
import { UPDATE_DATA } from "../actions/orderActions";

const initialState = {
  accountName: "",
  mediaType: ENUMS.MEDIA_TYPE_YOUTUBE,
  selectedFeedback: 1,
  trackTitle: "",
  trackUrl: "",
};

const reducer = (state = initialState, { type, payload }) => {
  const handlers = {
    [UPDATE_DATA]: { ...state, ...payload },
  };
  return handlers[type] || state;
};

export default reducer;
