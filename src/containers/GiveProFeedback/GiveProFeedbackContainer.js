import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import GiveProFeedback from "../../components/GiveProFeedback";
import { getProFeedbackTracks } from "../../state/actions/proFeedbackActions";
import { rateProFeedbackSelector } from "../../state/selectors/rateProFeedback";
import { postDiscoverFeedback } from "../../state/actions/discoverActions";

const GiveProFeedbackContainer = ({
  proFeedbackTracks,
  getProFeedbackTracksDispatchAction
}) => {
  const [trackRating, setTrackRating] = useState(0);
  const [trackIndex, setTrackTrackIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showNoMoreTracks, setShowNoMoreTrack] = useState(false);

  useEffect(() => {
    getProFeedbackTracksDispatchAction();
  }, [getProFeedbackTracksDispatchAction]);

  const handleSubmitProFeedback = useCallback(() => {
    const track = proFeedbackTracks[trackIndex];
    const { userId, price, feedbackId } = track;
    const payload = {
      feedbackId,
      userId,
      trackRating,
      trackFeedback: feedback,
      price
    };
    postDiscoverFeedback(payload, true);
    if (trackIndex < proFeedbackTracks.length - 1) {
      setTrackTrackIndex(trackIndex + 1);
    } else {
      setShowNoMoreTrack(true);
    }
  }, [feedback, proFeedbackTracks, trackIndex, trackRating]);

  const handleTrackRating = useCallback(e => {
    setTrackRating(e);
  }, []);

  const handleFeedbackChange = useCallback(e => {
    setFeedback(e.target.value);
  }, []);

  return (
    <GiveProFeedback
      showNoMoreTracks={showNoMoreTracks || proFeedbackTracks.length === 0}
      track={proFeedbackTracks[trackIndex]}
      trackRating={trackRating}
      feedback={feedback}
      handleSubmitProFeedback={handleSubmitProFeedback}
      handleTrackRating={handleTrackRating}
      handleFeedbackChange={handleFeedbackChange}
    />
  );
};

const dispatchActions = dispatch => ({
  getProFeedbackTracksDispatchAction: () => dispatch(getProFeedbackTracks())
});

GiveProFeedback.defaultProps = {
  proFeedbackTracks: []
};

export default connect(
  rateProFeedbackSelector,
  dispatchActions
)(GiveProFeedbackContainer);
