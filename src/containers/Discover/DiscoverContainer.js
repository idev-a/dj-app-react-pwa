import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";

import DiscoverComponent from "../../components/Discover/DiscoverComponent";
import { discoverSelector } from "../../state/selectors/discover";
import { getTracksForDiscover, postDiscoverFeedback } from "../../state/actions/discoverActions";

const DiscoverContainer = (props) => {
  const { tracks, getTracksDispatchAction } = props;

  useEffect(() => {
    getTracksDispatchAction();
  }, [getTracksDispatchAction]);

  const [componentIndex, setComponentIndex] = useState(0);
  const handleSwipeEnd = useCallback((e) => {
    let feedbackType = "HIT";
    if (e === "Left") {
      debugger;
      feedbackType = "MISS";
    }
    if (e === "UP") {
      feedbackType = "POTENTIAL";
    }
    postDiscoverFeedback({
      feedbackId: tracks[componentIndex]._id,
      feedbackType,
    });
    setComponentIndex(componentIndex + 1);
  }, [componentIndex, tracks]);

  return (
    <DiscoverComponent
      track={tracks[componentIndex]}
      handleSwipeEnd={handleSwipeEnd}
    />
  );
};

const dispatchActions = (dispatch) => ({
  getTracksDispatchAction: () => dispatch(getTracksForDiscover()),
});

export default connect(
  discoverSelector,
  dispatchActions
)(DiscoverContainer);
