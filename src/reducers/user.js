import content from "../containers/Feedback/Feedback.content";
import {
  SET_CARD_DETAILS,
  SET_SAVED_CARD_DETAILS,
  SET_FEEDBACK_PRICE,
  SET_TRACK_URL,
  SET_SELECTED_MEDIA_TYPE,
} from "../actions";

const initialState = {
  savedCard: {},
  selectedCard: 0,
  feedbackPrice: 0,
  cardInformation: {},
  selectedMediaType: content.MEDIA_TYPE_YOUTUBE,
  trackUrl: undefined,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SAVED_CARD_DETAILS:
      return {
        ...state,
        savedCard: action.data.savedCard,
        selectedCard: action.data.selectedCard,
      };
    case SET_CARD_DETAILS:
      return {
        ...state,
        cardInformation: action.data,
        selectedCard: 0,
      };
    case SET_FEEDBACK_PRICE:
      return { ...state, feedbackPrice: action.data };
    case SET_TRACK_URL:
      return { ...state, trackUrl: action.data };
    case SET_SELECTED_MEDIA_TYPE:
      return { ...state, selectedMediaType: action.data };
    default:
      return state;
  }
};

export default reducer;
