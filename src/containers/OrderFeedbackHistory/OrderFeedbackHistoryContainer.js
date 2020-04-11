import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import OrderFeedbackHistory from "../../components/OrderFeedbackHistory";
import { getOrderHistory } from "../../state/actions/userActions";
import { orderHistorySelector } from "../../state/selectors/order";
import { postListenerRating } from "../../state/actions/proFeedbackActions";

const OrderFeedbackHistoryContainer = ({
  tracksHistory = [],
  trackReviews,
  history,
  loading = true,
  postListenerRatingsDispatchAction,
  getOrderHistoryDispatchAction
}) => {
  useEffect(() => {
    if (localStorage.getItem("isFirstUserLogin")) {
      history && history.push("/preferences");
    }
  }, [history]);

  useEffect(() => {
    getOrderHistoryDispatchAction();
  }, [getOrderHistoryDispatchAction]);

  const [hitStats, setToggle] = useState(true);

  const handleTrackReviewFeedback = useCallback(() => {}, []);
  return (
    <OrderFeedbackHistory
      hitStats={hitStats}
      setToggle={setToggle}
      tracksHistory={tracksHistory}
      loading={loading}
      trackReviews={trackReviews}
      handleTrackReviewFeedback={postListenerRatingsDispatchAction}
    />
  );
};

const dispatchAction = dispatch => ({
  getOrderHistoryDispatchAction: () => dispatch(getOrderHistory()),
  postListenerRatingsDispatchAction: payload =>
    dispatch(postListenerRating(payload))
});

export default connect(
  orderHistorySelector,
  dispatchAction
)(OrderFeedbackHistoryContainer);
