import React, { useCallback } from "react";
import Component from "../../components/LandingPage/LandingPageComponent";

const LandingPageContainer = (props) => {
  const handleLaunchClick = useCallback(() => props.history.push("/signin"), [
    props.history,
  ]);
  return <Component handleLaunchClick={handleLaunchClick} />;
};

export default LandingPageContainer;
